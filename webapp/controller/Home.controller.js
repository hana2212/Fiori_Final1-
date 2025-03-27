sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("fioriv3.controller.Home", {
        onInit: function () {
            // Any initialization logic
        },

        onSetDataForDropDown: function (oEvent) {
            
            var oSelectedKey = this.byId("dropDownBukrs").getSelectedKey();
            var oFilter = new Filter("Bukrs", FilterOperator.EQ, oSelectedKey);
            var oSmartTable = this.byId("smartTable");
        
            // Push filter
            var oBinding = oSmartTable.getTable().getBinding("rows") || oSmartTable.getTable().getBinding("items");
            if (oBinding) {
                oBinding.filter([oFilter]);
            }
    
        }
    });
});