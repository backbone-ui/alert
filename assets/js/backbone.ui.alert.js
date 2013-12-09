// Backbone.js Alert extension
//
// Created by: Lyndel Thomas (@ryndel)
// Source: https://github.com/backbone-ui/alert
//
// Licensed under the MIT license:
// http://makesites.org/licenses/MIT

(function(w, _, Backbone, APP) {

	// Support backbone app (if available)
	var View = ( typeof APP != "undefined" && !_.isUndefined(APP.View) ) ? APP.View : Backbone.View;
	// find the query lib
	var $ = w.jQuery || w.Zepto;

	var Alert = View.extend({

		el: function(){ return $('<div class="ui-alert"><span></span></div>'); },

		options: {
			parentEl: "body",
			message: "",
			type: "info",
			position: "top-center",
			fade: 0,
		},

		events: {
			"click": "close",
		},

		initialize: function( options ) {
			var $el = $(this.el);

			//var alertBox = $('<div class="ui-alert top-center error"><span>' + this.options.message + '</span></div>');
			$el.addClass( this.options.type ).addClass( this.options.position );
			$el.find("span").html( this.options.message );

			$(this.options.parentEl).append( $el );
			// add fading effect
			if( this.options.fade ){
				setTimeout(function(){
					//$el.fadeOut("fast", function(){ $el.remove(); });
					$el.addClass("fade-out");
					$el.on('webkitTransitionEnd', function(e){ $el.remove(); });
				}, this.options.fade);
			}

		},

		close: function() {
			$(this.el).remove();
		}

	});

	// fallbacks
	if( _.isUndefined( Backbone.UI ) ) Backbone.UI = {};
	Backbone.UI.Alert = Alert;

	// Support module loaders
	if ( typeof module === "object" && module && typeof module.exports === "object" ) {
		// Expose as module.exports in loaders that implement CommonJS module pattern.
		module.exports = Alert;
	} else {
		// Register as a named AMD module, used in Require.js
		if ( typeof define === "function" && define.amd ) {
			//define( "backbone.ui.alert", [], function () { return Alert; } );
			define( [], function () { return Alert; } );
		}
	}
	// If there is a window object, that at least has a document property
	if ( typeof window === "object" && typeof window.document === "object" ) {
		window.Backbone = Backbone;
		// update APP namespace
		if( typeof APP != "undefined" && (_.isUndefined( APP.UI ) || _.isUndefined( APP.UI.Alert ) ) ){
			APP.UI = APP.UI || {};
			APP.UI.Alert = Backbone.UI.Alert;
			window.APP = APP;
		}
	}


})(this.window, this._, this.Backbone, this.APP);