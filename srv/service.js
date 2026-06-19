const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

    const { Customers, Suppliers } = this.entities;

    this.before('CREATE', Customers, (req) => {
        console.log('Creating customer:', req.data.name);
    });

    this.before('CREATE', Suppliers, (req) => {
        console.log('Creating supplier:', req.data.name);
    });

    // this.on('hello', () => {
    //     return {
    //         message: 'Hello from CAP Service'
    //     };
    // });

});