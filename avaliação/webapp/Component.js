sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";
	var Component = UIComponent.extend("sap.m.sample.CheckBox.Component", {

		metadata : {
			manifest: "json"
		},
		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		}
	});

	return Component;

});
