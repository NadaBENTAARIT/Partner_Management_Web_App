'use strict';
const Admin = require('../models/admin.model');
const Partner = require('../models/partner.model');
const Demande = require('../models/demande.model');





exports.findAll = function(req, res) {
  Admin.findAll(function(err, admin) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', admin);
  res.send(admin);
});
};






exports.create = function(req, res) {
const new_admin = new Admin(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Admin.create(new_admin, function(err, admin) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Admin added successfully!",data:admin});
});
}
};



exports.connect = function(req, res) {
  console.log("body est",req.body.login,req.body.password);
Admin.connect(req.body.login,req.body.password, function(err,admin) {
  
                                                                          if (err)
                                                                          res.send(err);
                                                                           res.json(admin);
                                                                       });
                                      };





exports.sendMail = function(req, res) {
  console.log("body est",req.body.demande,req.body.partner,req.body.mailadmin);
  const partner= new Partner(req.body.partner)
   let demande= new Demande(req.body.demande)
   Admin.sendMail(demande,partner,req.body.mailadmin, function(err,admin) {
  
          if (err)
          res.send(err);
        
   res.json({message: 'mail et enre avec succesenvoye avec succes' });
                                                                       });
                                      };











exports.updateprofile = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    console.log("test if ");
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }
  else
    { 
      console.log("laaaa")
    let  logintest =req.body.logintest;
    let ad =req.body.admin;

    console.log("l'ancien login est"+logintest);
    Admin.updateprofile(logintest,ad, function(err,result) {
      console.log("res est ", result)
   if (err)
   res.send(err);
   console.log("c est passé");
  
   let x=JSON.stringify(result)
   res.send(result);
});
}
};









exports.updatepassword = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    console.log("test if ");
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }
  else
    { 
      console.log("laaaa")
    let  passwordtest =req.body.passwordtest;
        let  passwordnew =req.body.passwordnew;

    let ad =req.body.admin;

    console.log("l'ancien est"+passwordtest);
        console.log("l'actuel est"+ad.password);

    Admin.updatepassword(passwordtest,passwordnew,ad, function(err,result)
   {
   if (err)
   res.send(err);
 //result["password"]=passwordnew
  
   console.log("admin result de model est",JSON.stringify(result));
   res.json(result);
});
}
};

/*
exports.findById = function(req, res) {
Admin.findById(req.params.id, function(err, admin) {
  if (err)
  res.send(err);
  res.json(admin);
});
};

*/






/*

exports.delete = function(req, res) {
Admin.delete( req.params.login, function(err, admin) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Admin successfully deleted' });
});
};
*/