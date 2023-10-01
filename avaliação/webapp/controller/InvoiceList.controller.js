sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "../model/formatter"
], function(Controller, JSONModel, UIComponent, Filter, FilterOperator, formatter) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList",{
        formatter: formatter,        
        onInit: function() {
            const that = this;
              $.get( "https://jsonplaceholder.typicode.com/todos", function(response) {
                var oViewModel = new JSONModel(response);
                that.getView().setModel(oViewModel,"list");
              })
            
        },
        onDetailsPress: function() {
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("detalhes")
        },
        onSearch: function (event) {
          var filters=[];
          var query=event.getParamater("query");
          if(query){
            filters.push(new Filter("title", FilterOperator.Contains, query));
          }
          var getList=this.getView().byId("productList");
          var bindingItems=getList.getBinding("items");
          bindingItems.filter(filters);
		}
    });
});