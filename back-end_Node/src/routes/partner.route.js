const express = require('express')
const router = express.Router()
const partnerController =   require('../controllers/partner.controller');


// get listpartner
router.get('/list', partnerController.findAll);

// Delete a admin with login
router.post('/delete/:email', partnerController.delete);

//verify connection
router.post('/connect', partnerController.connect);


router.post('/updateprofile', partnerController.updateprofile);
router.post('/updatepassword', partnerController.updatepassword);

module.exports = router

