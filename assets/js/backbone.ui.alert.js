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
		
		events: {
			// "click .some-class": "unnamed",
		},
		
		unnamed: function() {
			
		}, 
		
		unnamed2: function() {
			
		}
		
	});
	
})(this._, this.Backbone);