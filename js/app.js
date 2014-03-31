
Ember.FEATURES["query-params"] = true;

App = Ember.Application.createWithMixins({
	 rootElement: '#app'
});

// Application Settings
App.APIURL = "http://130.241.35.208:90/solr/jamda_items/";
App.APIURLFILES = "http://130.241.35.208:90/solr/jamda_files/"
App.MAXCOUNT = 10;
App.MINYEAR = 1990;
App.MAXYEAR = new Date().getFullYear();



App.SubjectController = Ember.Controller.extend({
	subjectArr: [],
	makeJSONArr: function() {
		this.subjectArr = [];
		var tempArr = this.get("model.facet_counts.facet_fields.dc_subject");
		var that = this;
		var counter = 0;
		tempArr.forEach(function(item, index) {
			if (index % 2 === 0) {
				that.subjectArr.pushObject({subject: item});
				Ember.set(that.subjectArr[counter], "count", tempArr[index+1]);
				counter++;
			}
		});
	},

	actions: {
		goBack: function () {
			history.go(-1);
		}
	}
});

App.PostController = Ember.Controller.extend({
	actions: {
		goBack: function () {
			history.go(-1);
		}
	}
});


App.SearchController = Ember.Controller.extend({
	query: '',
	page: 0,
	facets: [],
	facetsLang: [],
	fulltext: false, 
	startYear: App.MINYEAR,
	endYear: App.MAXYEAR,
	sortBy: [
		{sort:"Relevans", id: 1, selected: false},
		{sort:"Nyast först", id: 2, selected: false},
		{sort:"Äldst först", id: 3, selected: false},
		{sort:"Titel (a-ö)", id: 4, selected: false},
		{sort:"Senast inlagda", id: 5, selected: true}
	], 

	queryToDisplay: "",
	firstActiveSearch : true,
	fulltextIsChecked : false,
	showLoadMoreBtn : true, 
	sortOrderSelected: "Sortera" ,


	init: function() {
		var item = this.get("sortBy").find(function(item) {
			return item.selected === true;
		});
		this.set("sortOrderSelected",item.sort);
	},



	sortOrder: function() {
		var item = this.get("sortBy").find(function(item) {
			return item.selected === true;
		});
		if (item) {
			this.set("sortOrderSelected", item.sort);
		}

	}.observes("sortBy.@each.selected"),

	intervalChanged: function() {
		$("#slider").rangeSlider("values", this.get("startYear"), this.get("endYear"));
	}.observes("startYear", "endYear"),

	getPreferedSortOrder: function() {
		var obj = this.get("sortBy");
		var toBeReturned =  obj.find(function(item) {
			return item.selected === true;
		});

		if (toBeReturned) {
			return toBeReturned.id;
		}
		else {
			return false;
		}
	},

	toggleLoader: function() {
		if ($("#wrapper").hasClass("loading")) {
			$("#wrapper").removeClass("loading");
		}
		else {
			$("#wrapper").addClass("loading");
		}
	},

	getActiveFacetsAndMakeString: function() {
		var resultArr = $.map(this.get("facets"), function(val, index) {
			if (val.checked === true) {
				return val;
			}
		})

		var returnStr = "";
		for (var i = 0; i < resultArr.length; i++ ) {
			if (i === 0) {
				returnStr = resultArr[i].id;
			}
			else {
				returnStr = returnStr + ":" + resultArr[i].id;
			}
		}
		if (returnStr === "") {
			return true;
		}
		else {
			return returnStr;
		}
	},
	getActiveLanguageFacetsAndMakeString: function() {
		var resultArr = $.map(this.get("facetsLang"), function(val, index) {
			if (val.checked === true) {
				return val;
			}
		})

		var returnStr = "";
		for (var i = 0; i < resultArr.length; i++ ) {
			if (i === 0) {
				returnStr = resultArr[i].id;
			}
			else {
				returnStr = returnStr + ":" + resultArr[i].id;
			}
		}
		if (returnStr === "") {
			return true;
		}
		else {
			return returnStr;
		}
	},

	doSearch: function() {
		// reset page variable on search
		this.set("page", 0);

		if (this.firstActiveSearch) {
			this.set("firstActiveSearch", false);
			this.fixSortOrderChanged(1);
		}
		
		//queryParam = {"query:" this.get("query"), "fulltext:" this.get("fulltext").toString(), "rows:" App.MAXCOUNT.toString(), "startyear:" this.get("startYear").toString(), "endyear:" this.get("endYear").toString(), "english:" + this.get("language.en").toString() +","+ "swedish:"+ this.get("language.sv").toString() , "page:" this.get("page").toString(), "numberofitems:" App.MAXCOUNT.toString(), "facets:" this.getActiveFacetsAndMakeString(), "sortOrder:" this.getPreferedSortOrder().toString()};
		var queryParam = {query: this.get("query"),fulltext: this.get("fulltext").toString(), rows: App.MAXCOUNT.toString(), startyear: this.get("startYear").toString(), endyear: this.get("endYear").toString(), page: this.get("page").toString(), numberofitems: App.MAXCOUNT.toString(), facets: this.getActiveFacetsAndMakeString(), facetsLang: this.getActiveLanguageFacetsAndMakeString(), sortOrder: this.getPreferedSortOrder().toString()};
		

		//this.get('target').send('transitionWithoutHistory', queryParam);
		this.transitionToRoute("search",{queryParams: queryParam});
	},

	showLoadMore: function() {
		var numberOfItemsLeftToShow =  this.get("model.response.numFound") - ((this.get("page") + 1) * App.MAXCOUNT);
		var MoreItemsToShow = true;
		if (numberOfItemsLeftToShow <= 0) {
			MoreItemsToShow = false;
		}		
		
		if ((this.get("model").response.docs.length < App.MAXCOUNT) || !MoreItemsToShow ) {
			this.set("showLoadMoreBtn",false);
		}
		else {
			this.set("showLoadMoreBtn", true);
		}
	},

	loadMore: function() {
		this.page++;
		var start = this.get("page") * App.MAXCOUNT;
	
		var queryParams = {query: this.get("query"), fulltext: this.get("fulltext").toString(), rows: App.MAXCOUNT, startyear: this.get("startYear"), endyear: this.get("endYear"), page: start, numberofitems: App.MAXCOUNT, facetsLang: this.getActiveLanguageFacetsAndMakeString(), facets: this.getActiveFacetsAndMakeString()};
		var url = App.buildURL(queryParams);
		var that = this;
		this.toggleLoader();
		return $.getJSON(url,
        	function(data) {
        		that.get("model.response.docs").pushObjects(data.response.docs);
				that.showLoadMore();	
				that.toggleLoader();	
          	 	return data;

         });

	},

	fixSortOrderChanged: function(id) {
		var temp = this.get("sortBy");
		temp.forEach(function(item,index) {
			Ember.set(item, "selected", false);
		});

		var obj = temp.find(function(item) {
			return item.id === id;
		});
		Ember.set(obj, "selected", true);

		//this.doSearch();
	},

	actions: {
		sortOrderChanged: function(itemClicked) {
			this.fixSortOrderChanged(itemClicked);
			this.doSearch();
		},

		toggle_fulltext_filter: function() {
			if (this.get("fulltext")) {
				this.set("fulltext", false);
			}
			else {
				this.set("fulltext", true);
			}
			this.doSearch();
		},
	    trigger_search: function() {
	      this.doSearch();
	    },
	    toggle_language_filter: function(lang1, lang2) { 
	    	if (this.get('language.'+lang1) === false) {
	    		this.set('language.'+lang1, true);
	    	}
	    	else {
	    		if (this.get("language." + lang2) === true) {
	    			this.set('language.'+lang1, false);
	    		}
	    		else {
	    			return false;
	    		}
	    	}
	    	this.doSearch();
	    },
	    resetFilters: function() {
			var facetsToClear = this.get("facets");
			facetsToClear.forEach(function(item) {
				Ember.set(item, "checked", false);
			});

			var facetLangToClear = this.get("facetsLang");
			facetLangToClear.forEach(function(item) {
				Ember.set(item, "checked", false);
			});

			this.set("fulltext", false);
			this.set("startYear", App.MINYEAR);
			this.set("endYear", App.MAXYEAR);
			this.doSearch();

		},
	}
});

App.SearchView = Ember.View.extend(Ember.Evented,{
  didInsertElement: function () {
  	var controller = this.controller;
  	$("#slider").rangeSlider({
  		bounds: {min: App.MINYEAR, max: App.MAXYEAR},
  		defaultValues: {min: controller.get("startYear"), max: controller.get("endYear")},
  		step: 1,
  		arrows: false
  	}).on("userValuesChanged", function(e, data) {
		//console.log("Something moved. min: " + data.values.min + " max: " + data.values.max);
  		controller.set("startYear", data.values.min);
  		controller.set("endYear", data.values.max);
  		controller.doSearch();
	});

	$("#search-input").focus();

	$("#app").fadeIn("fast");
  },

  willInsertElement: function() {
  	$("#app").hide();
  },

  willClearRender: function() {
  	this.get("controller").toggleLoader();
  },
  click: function() {
  //	App.delay($.proxy(this.controller.doSearch,this.controller), 500);
  }


});


App.FilterSubject = Ember.View.extend({
	click: function() {
	//	this.get("controller").toggleLoader();
	}
});

App.Facets = Ember.View.extend({
	templateName: 'facet-view',

	change: function(e) {
		this.get("controller").doSearch();
	}
});

App.FacetsLang = Ember.View.extend({
	templateName: 'facetLang-view',

	change: function(e) {
		this.get("controller").doSearch();
	}
});

App.SearchResultList = Ember.View.extend({
	templateName: 'search-result'
		
});


App.Fulltext = Ember.View.extend({
	templateName: "fulltext-view",
	change: function() {
		this.get("controller").doSearch();
	}
});

App.SortResultList = Ember.View.extend({
	templateName: 'sort-order'

});

App.LoadMore = Ember.View.extend({
	templateName: 'loadMore',
	click: function() {
		this.get("controller").loadMore();
		return false;
	}
});


App.PostView = Ember.View.extend({
	didInsertElement: function() {
		 $(window).scrollTop(0);
		 $("#app").fadeIn("fast");
	},

	willInsertElement: function() {
		$("#app").hide();
	}
});

App.SubjectView = Ember.View.extend({
	didInsertElement: function() {
		$(window).scrollTop(0);
		$("#app").fadeIn("fast");
	},

	willInsertElement: function() {
		$("#app").hide();
	}
});



