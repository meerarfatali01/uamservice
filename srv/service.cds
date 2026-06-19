using capservice.schema as db from '../db/schema';

// @requires: 'authenticated-user'
service CatalogService {

    // action hello() returns {
    //     message : String;
    // };

    entity Customers         as projection on db.customers;
    entity CustomerOrders    as projection on db.customerOrders;

    entity Suppliers         as projection on db.suppliers;
    entity SupplierProducts  as projection on db.supplierProducts;
}