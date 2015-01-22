
App.delay = function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
}();


App.AjaxPromise = function(url, options) {
    return Ember.RSVP.Promise(function(resolve, reject) {
        var options = options || {
            type: 'GET',
            cashe: false,
            dataType: 'json',
            contentType: 'application/json'
        };

        options.success = function(data){
            resolve(data);
        };

        options.error = function(jqXHR, status, error){
            reject(arguments);
        };

        Ember.$.ajax(url, options);
    });
};



App.buildURL = function (queryParams) {
        //return App.APIURL + "?query=" + queryParams.query + "&startyear=" + queryParams.startyear + "&endyear=" + queryParams.endyear + "&language=" + queryParams.language;
        //return "http://130.241.35.208:8080/solr/jamda_items/select?q=*:*&rows=5&wt=json&indent=true&fq=dc_date_issued:[2010%20TO%202012]&fq=dc_language_iso:eng";
        var facetLang, lang, query, start, rows, fulltext, facets, sortOrder;   

        if (typeof(queryParams.query) === "string" && !(queryParams.query === "")) {
            query = encodeURIComponent(queryParams.query);
        }
        else {
            query = "*";
        }

        if (queryParams.fulltext === "true") {
            fulltext = "&fq=-no_of_files:0";
        }
        else {
            fulltext = "&fq=";
        }

        if (queryParams.page) {
            start = queryParams.page; 
        }
        else {
            start = 0;
        }

        if (queryParams.rows) {
            rows = queryParams.rows;
        }

        if (queryParams.facets && (queryParams.facets.length > 0)) {
            facets = "&fq={!tag=dt}collection_id:(";
            var facetIDarr = queryParams.facets.split(":");
            if (facetIDarr.length > 0) {
                for (var i = 0; i < facetIDarr.length; i++) {
                    if (i === (facetIDarr.length-1)) {
                        facets = facets + facetIDarr[i];
                    }
                    else {
                        facets = facets + facetIDarr[i] + " OR ";
                    }
                }
            }

            facets = facets + ")";
        }
        else {
            facets = "";
        }

        if (queryParams.facetsLang && (queryParams.facetsLang.length > 0)) {
            facetsLang = "&fq={!tag=dx}language_sv_name:(";
            var facetLangIDarr = queryParams.facetsLang.split(":");
            if (facetLangIDarr.length > 0) {
                for (var i = 0; i < facetLangIDarr.length; i++) {
                    if (i === (facetLangIDarr.length-1)) {
                        facetsLang = facetsLang + facetLangIDarr[i];
                    }
                    else {
                        facetsLang = facetsLang + facetLangIDarr[i] + " OR ";
                    }
                }
            }

            facetsLang = facetsLang + ")";
        }
        else {
            facetsLang = "";

        }


        if (queryParams.sortOrder) {
            switch(queryParams.sortOrder)
            {
                case "1":
                  sortOrder = ""
                  break;
                case "2":
                  sortOrder = "&sort=dc_date_issued+desc"
                  break;
                case "3":
                  sortOrder = "&sort=dc_date_issued+asc"
                  break;
                case "4":
                  sortOrder = "&sort=dc_title+asc"
                  break;
                case "5":
                  sortOrder = "&sort=dc_date_accessioned+desc"
                  break;
                default:
                  sortOrder = "&sort=dc_date_accessioned+desc"
            }
            
        }
        else {
            sortOrder = "&sort=dc_date_accessioned+desc";
        }

        return  App.APIURL + "select?q=simple:"+query+"&start="+start+"&rows="+rows+"&wt=json&indent=true&fq=dc_date_issued:["+queryParams.startyear+"%20TO%20"+queryParams.endyear+"]"+fulltext+"&facet=true&facet.field={!ex=dx}language_order&facet.field={!ex=dt}collection_id_name_mapping&facet.sort=index" + facetsLang + facets + sortOrder + "&json.wrf=?"
    }
