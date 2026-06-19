namespace capservice.schema;

using { cuid, managed } from '@sap/cds/common';

@restrict: [
        { grant: '*', to: 'Admin' },
        { grant: ['READ','WRITE'], to: 'CustomerManager' }]
entity customers : cuid, managed {
    customerId   : String(10);
    name         : String(100);
    email        : String(100);
    phone        : String(20);
    city         : String(50);

    orders       : Composition of many customerOrders
                   on orders.customer = $self;
}

@restrict: [
        { grant: '*', to: 'Admin' },
        { grant: ['READ','WRITE'], to: 'CustomerManager' }]
entity customerOrders : cuid, managed {
    orderNo      : String(20);
    orderDate    : Date;
    amount       : Decimal(15,2);
    status       : String(20);

    customer     : Association to customers;
}

@restrict: [
        { grant: '*', to: 'Admin' },
        { grant: ['READ','WRITE'], to: 'SupplierManager' }]
entity suppliers : cuid, managed {
    supplierId   : String(10);
    name         : String(100);
    email        : String(100);
    country      : String(50);

    products     : Composition of many supplierProducts
                   on products.supplier = $self;
}

@restrict: [
        { grant: '*', to: 'Admin' },
        { grant: ['READ','WRITE'], to: 'SupplierManager' }]
entity supplierProducts : cuid, managed {
    productId    : String(20);
    productName  : String(100);
    category     : String(50);
    price        : Decimal(15,2);

    supplier     : Association to suppliers;
}