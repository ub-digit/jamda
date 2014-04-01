Ember.TEMPLATES["_filters"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "subject", options) : helperMissing.call(depth0, "link-to", "subject", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("Visa alla ämnesord i Jämda <i class=\"fa fa-arrow-circle-right\"></i>");
  }

  data.buffer.push("\n      <div class=\"row\" id=\"filter\">\n        <div class=\"col-xs-12\">\n          <div class=\"row\">\n          <div id=\"filter-wrapper\" class=\"clearfix\">\n            <div class=\"col-xs-12\">\n              <h2>Avgränsa sökningen</h2>\n            </div>\n            <div class=\"filter-reset col-xs-12\">\n              <a class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetFilters", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" href=\"javascript:void(0)\">Återställ <i class=\"fa fa-undo\"></i></a>\n            </div>\n            <div class=\"filter-year col-xs-12\">\n              <h3>Publikationsår</h3>\n                <div class=\"row\"> \n                  <div id=\"slider-wrapper\" class=\"col-xs-12\">\n                    <div id=\"slider\"></div>\n                  </div>\n                </div>\n            </div>\n            <div class=\"filter-lang col-xs-12\">\n              <h3>Språk</h3>\n              <form name=\"publication-type\" id=\"publication-type\">\n                  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.FacetsLang", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n              </form>\n            </div>\n\n            <div class=\"filter-fulltext col-xs-12\">\n              <h3>Fulltext</h3>\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Fulltext", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            </div>\n            <div class=\"filter-type col-xs-12\">\n              <h3>Publikationstyp</h3>\n              <form name=\"publication-type\" id=\"publication-type\">\n                  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Facets", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n              </form>\n            </div>\n            <div class=\"filter-subject col-xs-12\">\n              <h3>Ämnesord</h3>\n              ");
  stack1 = helpers.view.call(depth0, "App.FilterSubject", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n          </div><!-- filter-wrapper -->\n   \n          </div>\n        </div>\n  \n      </div>\n");
  return buffer;
  
});

Ember.TEMPLATES["_search-result-description"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  Du sökte efter <b>");
  stack1 = helpers._triageMustache.call(depth0, "queryToDisplay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b>.\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n      Visar enbart poster som finns som <b>fulltext</b>.\n    ");
  }

  data.buffer.push("\n<div id=\"search-result-description\">\n\n  <p class=\"lead\">\n  ");
  stack1 = helpers['if'].call(depth0, "queryToDisplay", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  Jämda visar <b>");
  stack1 = helpers._triageMustache.call(depth0, "model.response.numFound", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b> poster publicerade mellan <b>");
  stack1 = helpers._triageMustache.call(depth0, "startYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "endYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b>. \n    ");
  stack1 = helpers['if'].call(depth0, "fulltext", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n   </p>\n </div>\n");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("\n<div id=\"wrapper\" class=\"container wrapper\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["facet-view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <li>\n            <label>\n                 ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("item.checked")
  },hashTypes:{'checkedBinding': "STRING"},hashContexts:{'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n                  ");
  stack1 = helpers._triageMustache.call(depth0, "item.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"badge\">");
  stack1 = helpers._triageMustache.call(depth0, "item.count", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></label>\n          </li>\n       ");
  return buffer;
  }

  data.buffer.push("\n     <ul class=\"list-unstyled\">\n       ");
  stack1 = helpers.each.call(depth0, "item", "in", "facets", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["facetLang-view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <li>\n          <label>\n               ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("item.checked")
  },hashTypes:{'checkedBinding': "STRING"},hashContexts:{'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n                ");
  data.buffer.push(escapeExpression((helper = helpers.removeSortOrder || (depth0 && depth0.removeSortOrder),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "item.name", options) : helperMissing.call(depth0, "removeSortOrder", "item.name", options))));
  data.buffer.push(" <span class=\"badge\">");
  stack1 = helpers._triageMustache.call(depth0, "item.count", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></label>\n        </li>\n     ");
  return buffer;
  }

  data.buffer.push("\n     <ul class=\"list-unstyled\">\n     ");
  stack1 = helpers.each.call(depth0, "item", "in", "facetsLang", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["fulltext-view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\n      <label>\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("fulltext")
  },hashTypes:{'checkedBinding': "STRING"},hashContexts:{'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \n        Visa enbart poster med fulltext</label>\n");
  return buffer;
  
});

Ember.TEMPLATES["loadMore"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n      <div class=\"row\">\n        <div class=\"col-xs-12 load-more\">\n          <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-standard\">Visa fler <i class=\"fa fa-refresh\"></i></a>\n        </div>\n      </div>\n\n");
  
});

Ember.TEMPLATES["post"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <h3>Abstract</h3>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "post.response.docs.0.dc_description_abstract", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n          ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <div class=\"gup-note col-xs-12\">\n            <b><i class=\"fa fa-pencil\"></i> Kommentar:</b> ");
  stack1 = helpers._triageMustache.call(depth0, "post.response.docs.0.dc_gup_note", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers._triageMustache.call(depth0, "item", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.joinAuthors || (depth0 && depth0.joinAuthors),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "post.response.docs.0.dc_contributor_author", options) : helperMissing.call(depth0, "joinAuthors", "post.response.docs.0.dc_contributor_author", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.joinAuthors || (depth0 && depth0.joinAuthors),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "post.response.docs.0.contributors", options) : helperMissing.call(depth0, "joinAuthors", "post.response.docs.0.contributors", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <div class=\"number-of-pages col-xs-12\">\n              <b><i class=\"fa fa-files-o\"></i> Antal sidor: </b>\n               ");
  stack1 = helpers._triageMustache.call(depth0, "post.response.docs.0.dc_format_extent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n          </div>\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <div class=\"isbn col-xs-12\">\n              <b><i class=\"fa fa-book\"></i> Startsida: </b>\n                ");
  stack1 = helpers._triageMustache.call(depth0, "post.response.docs.0.dc_citation_spage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n          </div>\n        ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <div class=\"isbn col-xs-12\">\n              <b><i class=\"fa fa fa-book\"></i> Slutsida: </b>\n                ");
  stack1 = helpers._triageMustache.call(depth0, "post.response.docs.0.dc_citation_epage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n          </div>\n        ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <div class=\"isbn col-xs-12\">\n              <b><i class=\"fa fa fa-info-circle\"></i> Ingår i: </b>\n                ");
  stack1 = helpers._triageMustache.call(depth0, "post.response.docs.0.dc_citation_jtitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n          </div>\n        ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <div class=\"col-xs-6 col-sm-3\"><a class=\"btn btn-lg btn-primary btn-standard\" target=\"_blank\" href=\"http://");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "file_link", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\"><i class=\"fa fa-cloud-download\"></i> Ladda ner fulltext</a></div> \n            ");
  return buffer;
  }

  data.buffer.push("\n    <div id=\"single-post\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\"> \n        <a href=\"javascript:void(0)\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goBack", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"btn btn-primary btn-standard\"><i class=\"fa fa-chevron-left\"></i> Tillbaka</a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n         <h2>");
  stack1 = helpers._triageMustache.call(depth0, "post.response.docs.0.dc_title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n         <p class=\"ingress\">\n         ");
  stack1 = helpers['if'].call(depth0, "post.response.docs.0.dc_description_abstract", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </div> <!-- end row --> \n\n\n      <div class=\"detail-footer\">\n      <div class=\"row\">      \n        ");
  stack1 = helpers['if'].call(depth0, "post.response.docs.0.dc_gup_note", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div><!-- end row -->\n\n      <div class=\"row\">      \n        <div class=\"collection-type col-xs-12\">\n          <b><i class=\"fa fa-align-justify\"></i> Publikationstyp:</b> ");
  stack1 = helpers._triageMustache.call(depth0, "post.response.docs.0.collection_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </div><!-- end row -->\n      <div class=\"row\">\n        <div class=\"keywords col-xs-12\">\n          <b><i class=\"fa fa-key\"></i> Ämnesord: </b> \n             ");
  stack1 = helpers.each.call(depth0, "item", "in", "post.response.docs.0.dc_subject", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </div><!-- end row -->\n      <div class=\"row\">\n        <div class=\"authors col-xs-12\">\n         <b><i class=\"fa fa-user\"></i> Författare: </b> \n          ");
  stack1 = helpers['if'].call(depth0, "post.response.docs.0.dc_contributor_author", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"date-issued col-xs-12\">\n            <b><i class=\"fa fa-calendar\"></i> Publiceringsdatum: </b>\n             ");
  stack1 = helpers._triageMustache.call(depth0, "post.response.docs.0.dc_date_issued", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n        </div>\n        ");
  stack1 = helpers['if'].call(depth0, "post.response.docs.0.dc_format_extent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <div class=\"isbn col-xs-12\">\n            <b><i class=\"fa fa-info-circle\"></i> ISBN / ISSN: </b>\n              ");
  data.buffer.push(escapeExpression((helper = helpers.joinISBN || (depth0 && depth0.joinISBN),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "post.response.docs.0.dc_identifier_isbn", "post.response.docs.0.dc_citation_issn", options) : helperMissing.call(depth0, "joinISBN", "post.response.docs.0.dc_identifier_isbn", "post.response.docs.0.dc_citation_issn", options))));
  data.buffer.push(" \n        </div>\n        ");
  stack1 = helpers['if'].call(depth0, "post.response.docs.0.dc_citation_spage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "post.response.docs.0.dc_citation_epage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "post.response.docs.0.dc_citation_jtitle", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"download col-xs-12\">\n          <div class=\"row\">\n              ");
  stack1 = helpers.each.call(depth0, "postLinks.response.docs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div> <!-- end row --> \n        </div> <!-- end download --> \n      </div><!-- end row -->\n    </div> <!-- end single-post -->\n");
  return buffer;
  
});

Ember.TEMPLATES["search-result"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.printIsOddDiv || (depth0 && depth0.printIsOddDiv),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "view.contentIndex", options) : helperMissing.call(depth0, "printIsOddDiv", "view.contentIndex", options))));
  data.buffer.push("\n              ");
  data.buffer.push(escapeExpression((helper = helpers.getPostURL || (depth0 && depth0.getPostURL),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "handle", "dc_title", options) : helperMissing.call(depth0, "getPostURL", "handle", "dc_title", options))));
  data.buffer.push("\n              <div class=\"detail-footer\">\n                <div class=\"keywords\">\n                <b><i class=\"fa fa-key\"></i> Ämnesord: </b>\n                ");
  stack1 = helpers.each.call(depth0, "item", "in", "dc_subject", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                <div class=\"authors\">\n                <b><i class=\"fa fa-user\"></i> Författare: </b>\n                  ");
  stack1 = helpers['if'].call(depth0, "dc_contributor_author", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                <div class=\"date-issued\">\n                  <b><i class=\"fa fa-calendar\"></i> Publiceringsdatum: </b>\n                   ");
  stack1 = helpers._triageMustache.call(depth0, "dc_date_issued", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n                </div>\n              </div>\n            </div>\n          ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                  ");
  stack1 = helpers._triageMustache.call(depth0, "item", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.joinAuthors || (depth0 && depth0.joinAuthors),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "dc_contributor_author", options) : helperMissing.call(depth0, "joinAuthors", "dc_contributor_author", options))));
  data.buffer.push("\n                  ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.joinAuthors || (depth0 && depth0.joinAuthors),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "contributors", options) : helperMissing.call(depth0, "joinAuthors", "contributors", options))));
  data.buffer.push("\n                  ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.LoadMore", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          ");
  return buffer;
  }

  data.buffer.push("\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "_filters", options) : helperMissing.call(depth0, "partial", "_filters", options))));
  data.buffer.push("\n      </div>\n      <div id=\"result-area\" class=\"col-sm-8\">\n        <div class=\"row\">\n          <div id=\"result-area-wrapper\">\n          <div class=\"col-xs-12\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "_search-result-description", options) : helperMissing.call(depth0, "partial", "_search-result-description", options))));
  data.buffer.push("\n          </div>\n          <div class=\"col-xs-12\">\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SortResultList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          </div>\n          ");
  stack1 = helpers.each.call(depth0, "model.response.docs", {hash:{
    'itemViewClass': ("Ember.View")
  },hashTypes:{'itemViewClass': "STRING"},hashContexts:{'itemViewClass': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <div id=\"loader\"><i class=\"fa fa-spinner\"></i></div>\n          </div>\n        </div>\n          ");
  stack1 = helpers['if'].call(depth0, "showLoadMoreBtn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n");
  return buffer;
  
});

Ember.TEMPLATES["search"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <form id=\"search-form\">\n          <div class=\"input-group\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("search-input"),
    'type': ("search"),
    'placeholder': ("Sök i databasen Jämda"),
    'autofocus': ("true"),
    'class': ("form-control"),
    'value': ("query")
  },hashTypes:{'id': "STRING",'type': "STRING",'placeholder': "STRING",'autofocus': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'id': depth0,'type': depth0,'placeholder': depth0,'autofocus': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            <div class=\"input-group-btn\">\n            <button type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "trigger_search", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\"><i class=\"fa fa-search\"></i> Sök</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SearchResultList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["sort-order"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("item.selected:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortOrderChanged", "item.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" href=\"javascript:void(0)\">");
  stack1 = helpers._triageMustache.call(depth0, "item.sort", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n            ");
  return buffer;
  }

  data.buffer.push("\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n          <div class=\"btn-group pull-right\">\n             <button id=\"sort-btn\" type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n              ");
  stack1 = helpers._triageMustache.call(depth0, "sortOrderSelected", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"caret\"></span>\n            </button>\n            <ul id=\"sort-order-list\" class=\"dropdown-menu\" role=\"menu\">\n            ");
  stack1 = helpers.each.call(depth0, "item", "in", "sortBy", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n          </div> <!-- end btngroup -->\n      </div>\n    </div>\n");
  return buffer;
  
});

Ember.TEMPLATES["subject"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <tr><td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'query': ("item.subject"),
    'startyear': ("App.MINYEAR"),
    'endyear': ("App.MAXYEAR"),
    'numberofitems': ("App.MAXCOUNT"),
    'rows': ("10")
  },hashTypes:{'query': "ID",'startyear': "ID",'endyear': "ID",'numberofitems': "ID",'rows': "STRING"},hashContexts:{'query': depth0,'startyear': depth0,'endyear': depth0,'numberofitems': depth0,'rows': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "search", options) : helperMissing.call(depth0, "link-to", "search", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td> <td><span class=\"badge\">");
  stack1 = helpers._triageMustache.call(depth0, "item.count", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></td></tr>\n          ");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "item.subject", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push(" \n    <div id=\"subject-list\" class=\"row\">\n        <div class=\"col-xs-12\"> \n        <a href=\"javascript:void(0)\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goBack", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"btn btn-primary btn-standard\"><i class=\"fa fa-chevron-left\"></i> Tillbaka</a>\n        </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n      <h1>Ämnesord i Jämda</h1>\n       <table class=\"table table-striped table-hover\">\n        <tr><th>Ämnesord</th><th>Antal</th><tr>\n          ");
  stack1 = helpers.each.call(depth0, "item", "in", "subjectArr", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </table>\n      </div>\n    </div>\n");
  return buffer;
  
});