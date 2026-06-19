sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"customerportal/customerportal/test/integration/pages/CustomersList",
	"customerportal/customerportal/test/integration/pages/CustomersObjectPage",
	"customerportal/customerportal/test/integration/pages/CustomerOrdersObjectPage"
], function (JourneyRunner, CustomersList, CustomersObjectPage, CustomerOrdersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('customerportal/customerportal') + '/test/flp.html#app-preview',
        pages: {
			onTheCustomersList: CustomersList,
			onTheCustomersObjectPage: CustomersObjectPage,
			onTheCustomerOrdersObjectPage: CustomerOrdersObjectPage
        },
        async: true
    });

    return runner;
});

