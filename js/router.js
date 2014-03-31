
App.Router.map(function() {
  // put your routes here
  this.resource('search', {path: "/", queryParams: ['query', 'fulltext', 'rows', 'startyear', 'endyear', 'page', 'numberofitems', 'facets', 'facetsLang', 'sortOrder']});  
  this.resource("post", { path: "/post/:id/:id1" });
  this.route("subject", {path: "/subject"});
});


App.SubjectRoute = Ember.Route.extend({

	model: function(params, transition) {
		this.controllerFor("search").toggleLoader();
		var url = App.APIURL + "select/?q=*:*&rows=0&wt=json&indent=true&facet=true&facet.field=dc_subject&facet.mincount=1&facet.limit=-1&json.wrf=?"
		return $.getJSON(url, function(data) {
			return data;
		});
	},

	setupController: function(controller, model, queryParams) {
		controller.set("model", model);
		controller.makeJSONArr();
	}

});

App.SearchRoute = Ember.Route.extend({
	beforeModel: function(queryParams, transition) {
		if (!queryParams.rows) {
			this.transitionTo("search", {queryParams: {fulltext: false, rows: App.MAXCOUNT.toString(), startyear: App.MINYEAR, endyear: App.MAXYEAR, numberofitems: (App.MAXCOUNT).toString()}});
					
		}
	},

	model: function(params, queryParams, transition) {
			var url = App.buildURL(queryParams);
			var that = this;
			this.controllerFor("search").toggleLoader();
	 		return $.getJSON(url,
	        	function(data) {
	        	 that.controllerFor("search").toggleLoader();
	          	 return data;
	         });
 	},


	setupController: function(controller, model, queryParams) {
		if (queryParams.rows) {
			if (queryParams.query) {
				if (queryParams.query === true) {
					this.set("controller.query", '');
				}
				else {
					this.set("controller.query", queryParams.query);
				}
			}

			if (queryParams.fulltext) {
				this.set("controller.fulltext", queryParams.fulltext === 'true')
			}
			if (queryParams.startyear) {
				this.set("controller.startYear", queryParams.startyear * 1);
			}
			if (queryParams.endyear) {
				this.set("controller.endYear", queryParams.endyear * 1);
			}

			if (queryParams.page) {
				this.set("controller.page", queryParams.page);
			}

			if (queryParams.facets && (queryParams.facets.length > 0)) {

				var facetIDarr = queryParams.facets.split(":");							
			}
			if (queryParams.facetsLang && (queryParams.facetsLang.length > 0)) {
				var facetLangIDarr = queryParams.facetsLang.split(":");
			}
			if (queryParams.sortOrder) {
				controller.fixSortOrderChanged(queryParams.sortOrder * 1);
			}
		}

		controller.set("model", model);
		controller.showLoadMore();
		this.fixFacets(controller,facetIDarr);
		this.fixFacetsLang(controller, facetLangIDarr);
		
	},

	fixFacetsLang: function(controller, facetIDarr) {
		var arr = [];
		for (var i = 0; i < controller.get("model.facet_counts.facet_fields.language_order").length; i++) {
			if (i % 2 === 0)	{
				var result = controller.get("model.facet_counts.facet_fields.language_order")[i];
				result = result.substring(result.indexOf(":") + 1);
				var checked = false;
				if (facetIDarr) {
					if ($.inArray(result, facetIDarr) != -1){
						checked = true;
					}
				}
				arr.pushObject({"id": result,"name": result,"checked": checked, "count": controller.get("model.facet_counts.facet_fields.language_order")[i+1]});
			}
		}
		controller.set("facetsLang",arr);
	},


	fixFacets: function(controller, facetIDarr) {
		var arr = [];
		var lengt = controller.get("model.facet_counts.facet_fields.collection_id_name_mapping").length;
		for (var i = 0; i < controller.get("model.facet_counts.facet_fields.collection_id_name_mapping").length; i++) {
			if (i % 2 === 0)	{
				var splitResultArr = controller.get("model.facet_counts.facet_fields.collection_id_name_mapping")[i].split(":");
				var checked = false;
				if (facetIDarr) {
					if ($.inArray(splitResultArr[0], facetIDarr) != -1){
						checked = true;
					}
				}

				arr.pushObject({"id": splitResultArr[0],"name": splitResultArr[1],"checked": checked, "count": controller.get("model.facet_counts.facet_fields.collection_id_name_mapping")[i+1]});
			}
		}
		controller.set("facets",arr);
	},

	actions: {
		transitionWithoutHistory: function(queryParams) {
			this.replaceWith('search',{queryParams: queryParams});
		}
	}
});


App.PostRoute = Ember.Route.extend({
	model: function(params) {
		this.controllerFor("search").toggleLoader();
		if (params.id){
			var url = App.APIURL + "select?q=*:*&wt=json&indent&fq=handle:"+params.id+ "/" + params.id1 + "&json.wrf=?";
			var secondURL = App.APIURLFILES + "select/?q=handle:"+params.id+ "/" + params.id1 + "&wt=json&json.wrf=?";
	     	return Ember.RSVP.hash({
	            post: App.AjaxPromise(url),
	            postLinks: App.AjaxPromise(secondURL)
	        });
	    }
	},
	setupController: function(controller, model) {
	
		var singlePost = model.post;
    	var postLinks = model.postLinks;

	    controller.set('post', singlePost);
	    controller.set('postLinks', postLinks);

	}
});
