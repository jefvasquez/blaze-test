const { Router } = require('express');
const router = Router();
const { 
        getCustomer,
        getCustomers,
        createCustomer,
        deleteCustomer,
        updateCustomer
      } = require('../controllers/customers.controllers');

router.route('/')
    .get(getCustomers)
    .post(createCustomer);
router.route('/:id')
    .get(getCustomer)
    .put(updateCustomer)
    .delete(deleteCustomer);
module.exports = router;