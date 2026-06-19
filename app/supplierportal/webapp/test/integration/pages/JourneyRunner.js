sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"supplierportal/supplierportal/test/integration/pages/SuppliersList",
	"supplierportal/supplierportal/test/integration/pages/SuppliersObjectPage",
	"supplierportal/supplierportal/test/integration/pages/SupplierProductsObjectPage"
], function (JourneyRunner, SuppliersList, SuppliersObjectPage, SupplierProductsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('supplierportal/supplierportal') + '/test/flp.html#app-preview',
        pages: {
			onTheSuppliersList: SuppliersList,
			onTheSuppliersObjectPage: SuppliersObjectPage,
			onTheSupplierProductsObjectPage: SupplierProductsObjectPage
        },
        async: true
    });

    return runner;
});

