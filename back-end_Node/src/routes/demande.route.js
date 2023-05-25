const express = require('express')
const router = express.Router()
const demandeController =   require('../controllers/demande.controller');



// Update  profileadmin  with login
// Delete a admin with id
// Test connexion admin

router.get('/findAll', demandeController.findAll);
router.post('/create', demandeController.create);
//router.post('/refuse/hello', demandeController.test);
router.post('/refuse', demandeController.refuse);
router.post('/accept', demandeController.accept);

router.post('/deleted', demandeController.deleted);





/*
// Retrieve all admins
router.get('/', adminController.findAll);
// Create a new admin
router.post('/', adminController.create);
// Retrieve a single admin with id
router.get('/:id', adminController.findById);
*/

module.exports = router