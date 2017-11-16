const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost:27017/customerscli', {
    useMongoClient: true
});

const Customer = require('./models/customer');

const addCustomer = (customer) => {
    Customer.create(customer).then(customer =>{
        console.info('New Customer added.');
        db.close();
    });
}

const findCustomer = (name) => {
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
        .then(customer =>{
            console.info(customer);
            console.info(`${customer.length} matches`);
            db.close();
        });
}

const updateCustomer = (_id, customer) => {
    Customer.update({_id}, customer)
        .then(customer => {
            console.info('Customer Updated');
            db.close();
        });
}

const removeCustomer = (_id) => {
    Customer.remove({_id})
        .then(customer => {
            console.info('Customer Removed');
            db.close();
        });
}

const listCustomer = () => {
    Customer.find()
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} customers`);
            db.close();
        });
}

module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
};