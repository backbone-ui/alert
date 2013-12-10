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



## Credits

Initiated by Lyndel Thomas (@ryndel)

Distributed through [Makesites.org](http://makesites.org)

Released under the [MIT license](http://makesites.org/licenses/MIT)
