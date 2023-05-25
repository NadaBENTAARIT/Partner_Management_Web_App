const express = require('express')
const router = express.Router()
const adminController =   require('../controllers/admin.controller');



// Update  profileadmin  with login
// Delete a admin with id
//router.delete('/:id', adminController.delete);
// Test connexion admin
router.post('/connect', adminController.connect);
router.post('/updateprofile', adminController.updateprofile);
router.post('/updatepassword', adminController.updatepassword);


router.post('/sendMail', adminController.sendMail);







// Retrieve all admins
//router.get('/', adminController.findAll);// probleme
// Create a new admin
//router.post('/', adminController.create);// probleme
// Retrieve a single admin with id
//router.get('/:id', adminController.findById); // c bn


module.exports = router