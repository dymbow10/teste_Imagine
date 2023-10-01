sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function(Controller) {
    'use strict';
    return Controller.extend("sap.ui.demo.controller.Detalhes",{
        onInit: function(){

        },
        oNavButton: function() {
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("home")
        }
    });
    
});