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
        
        el: function(){ return $('<div class="ui-alert top-center error"><span></span></div>'); }, 
		
        options: {
            parentTag : "body",
            message: ""
        }, 
		
		events: {
			"click": "close",
		},
		
		initialize: function( options ) {
			
			//var alertBox = $('<div class="ui-alert top-center error"><span>' + this.options.message + '</span></div>');
			
            $(this.el).find("span").html( this.options.message );
			
			$(this.options.parentTag).append( $(this.el) );
            
		}, 
		
		close: function() {
			$(this.el).remove();
		}
		
	});
	
})(this._, this.Backbone);