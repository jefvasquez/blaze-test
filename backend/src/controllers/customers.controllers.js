const customersController = {};

const Customer = require('../models/Customer');

customersController.getCustomers = async (req, res) => {
    const customers = await Customer.find();
    res.json(customers);
};

customersController.createCustomer = async (req, res) =>{
    const {firstName, lastName, email, phoneNumber} =  req.body;
    const newCustomer = new Customer({
        firstName,
        lastName,
        email,
        phoneNumber
    });

    await newCustomer.save();

    res.json({message: 'Customer saved.'});
};

customersController.getCustomer = async (req, res) => {
    const currentCustomer = await Customer.findById(req.params.id);
    res.json(currentCustomer);
};

customersController.updateCustomer = async (req, res) => {
    const {firstName, lastName, email, phoneNumber} =  req.body;
    
    await Customer.findOneAndUpdate({_id: req.params.id}, {
        firstName,
        lastName,
        email,
        phoneNumber
    });

    res.json({message: 'Customer updated.'});
}
customersController.deleteCustomer = async (req, res) => {
    await Customer.findByIdAndDelete(req.params.id);
    res.json({message: 'Customer deleted.'});
}
module.exports = customersController;