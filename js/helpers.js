
Ember.Handlebars.registerBoundHelper('joinAuthors', function(arr) {  
 	if (!arr) {return "N/A"}
 	return new Handlebars.SafeString(arr.join(' <strong>|</strong> '));
});

Ember.Handlebars.registerBoundHelper('printIsOddDiv', function(number) {  
 	if ((number % 2) == 0) {
 		return new Handlebars.SafeString('<div class="post-item col-xs-12 even">');
 	}
 	else
 	{
 		return new Handlebars.SafeString('<div class="post-item col-xs-12 odd">');
 	}
});



Ember.Handlebars.registerBoundHelper('getPostURL', function(str, title) {  
 	return new Handlebars.SafeString('<a href="#/post/' + str + '"><h2>'+title+'</h2></a>');
});

Ember.Handlebars.registerBoundHelper('joinISBN', function(isbnArr,issnArr) {
	if (isbnArr != undefined) {
		return new Handlebars.SafeString(isbnArr.join(' <strong>|</strong> '));
	}
	else if (issnArr != undefined) {
		return new Handlebars.SafeString(issnArr.join(' <strong>|</strong> '));
		
	}
	else {
		return "N/A";
	}
});


Ember.Handlebars.registerBoundHelper('removeSortOrder', function(str) {
	return new Handlebars.SafeString(str.substring(str.indexOf(":") + 1));
});

