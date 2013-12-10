# Backbone UI: Alert

A notification system to display errors, warnings, confirmations and notifications to the user


## Examples

* [Styles](http://rawgithub.com/backbone-ui/alert/master/examples/styles.html)
* [Animations](http://rawgithub.com/backbone-ui/alert/master/examples/animations.html)
* [Interactions](http://rawgithub.com/backbone-ui/alert/master/examples/interactions.html)
* [Positions](http://rawgithub.com/backbone-ui/alert/master/examples/positions.html)


## Install

Using bower
```
bower install backbone.ui.alert
```

## Usage
In its basic implementation, the plugin is available under the ```Backbone.UI``` namespace
```
var alert = new Backbone.UI.Alert({
	message : $(e.target).attr("title"),
	type: "success"
});
```
You can control the fade out animation and the style of the alert through the options.


## Options

These are the varialbes that give you access to a number of features of the plugin

* **parentEl**: (default: "body" ),
* **message**: (default: ""),
* **type**: (default: "info"),
* **position**: (default: "top-center"),
* **fade**: (default: 0),


## Showcase

A few of the sites using this open source:

[![Cloudvisio](http://appicon.makesit.es/cloudvisio.com)](http://cloudvisio.com)
[![Roomchecking](http://appicon.makesit.es/roomchecking.com)](http://roomchecking.com)
[![CRUDr](http://appicon.makesit.es/crudr.com)](http://crudr.com)
[![GoCollab](http://appicon.makesit.es/gocollab.com)](http://gocollab.com)
[![Chiiv](http://appicon.makesit.es/gocollab.com)](http://chiiv.com)
[![tIssues](http://appicon.makesit.es/tissues.kdiweb.net)](http://apps.facebook.com/tissues)


## Credits

Initiated by Lyndel Thomas (@ryndel)

Distributed through [Makesites.org](http://makesites.org)

Released under the [MIT license](http://makesites.org/licenses/MIT)
