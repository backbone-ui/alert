# Backbone UI: Alert

A notification system to display errors, warnings, confirmations and notifications to the user


## Examples

* [Styles](http://rawgithub.com/backbone-ui/alert/master/examples/styles.html)
* [Animations](http://rawgithub.com/backbone-ui/alert/master/examples/animations.html)
* [Interactions](http://rawgithub.com/backbone-ui/alert/master/examples/interactions.html)
* [Positions](http://rawgithub.com/backbone-ui/alert/master/examples/positions.html)
* [Icons](http://rawgithub.com/backbone-ui/alert/master/examples/icons.html)


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

These are the variables that give you access to a number of features of the plugin

* **parentEl**: (default: "body" ),
* **message**: (default: ""),
* **type**: (default: "info"),
* **position**: (default: "top-center"),
* **fade**: (default: 0),

## Using icon fonts

The example [Icons](http://rawgithub.com/backbone-ui/alert/master/examples/icons.html), demonstrates how to add icons to the alerts and can be
used as is, or customised if desired.
The codes for the icons are as follows:

### Icons with solid background

Success: e600
Error: e602
Warning: e604

### Icons with transparent background

Success: e601
Error: e603
Warning: e605

For exact usage, please refer to the css in the header of the example file.

### Customisation

To allow for customisation of the iconfont, the sources selection.json is available in the src/font folder, along with the svg files of the iconfont.




## Showcase

A few of the sites using this open source:

[![Cloudvisio](http://appicon.makesit.es/cloudvisio.com)](http://cloudvisio.com)
[![Roomchecking](http://appicon.makesit.es/roomchecking.com)](http://roomchecking.com)
[![CRUDr](http://appicon.makesit.es/crudr.com)](http://crudr.com)
[![GoCollab](http://appicon.makesit.es/gocollab.com)](http://gocollab.com)
[![Chiiv](http://appicon.makesit.es/chiiv.com)](http://chiiv.com)
[![tIssues](http://appicon.makesit.es/tissues.kdiweb.net)](http://apps.facebook.com/tissues)


## Credits

Initiated by Lyndel Thomas (@ryndel)

Distributed through [Makesites.org](http://makesites.org)

Released under the [MIT license](http://makesites.org/licenses/MIT)
