// Backbone.js Alert extension
//
// Created by: Lyndel Thomas (@ryndel)
// Source: https://github.com/backbone-ui/alert
//
// Licensed under the MIT license: 
// http://makesites.org/licenses/MIT

(function(_, Backbone) {
	
	// fallbacks
	if( _.isUndefined( Backbone.UI ) ) Backbone.UI = {};
	// Support backbone app (if available)
	var View = ( typeof APP != "undefined" && !_.isUndefined( APP.View) ) ? APP.View : Backbone.View;
	
	
	
	Backbone.UI.Alert = View.extend({
		options: {
            parentTag : "body"
            
        }, 
		
		events: {
			"click .ui-alert-control": "showAlert",
			"click .ui-alert": "removeAlert",
		},
		
		showAlert: function( e ) {
			var message = $(e.target).attr("title");
			// console.log(message);
			
			var alertBox = $('<div class="ui-alert top-center error"><span>' + message + '</span></div>');
			
			$(this.options.parentTag).append(alertBox);
			e.preventDefault();
		}, 
		
		removeAlert: function() {
			$(".ui-alert").remove();
		}
		
	});
	
})(this._, this.Backbone);