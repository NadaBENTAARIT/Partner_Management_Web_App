'use strict';
const Demande = require('../models/demande.model');




/*

exports.delete = function(req, res) {
  console.log("hellooo.....")
 
  
   var x=req.params['login'];
Partner.delete(x, function(err, resultat) {

  if (err)
  res.send(err);
  res.json({ error:false, message: 'Partner successfully deleted' });
});
};



exports.connect = function(req, res) {
  console.log("body est",req.body.login,req.body.password);
Partner.connect(req.body.login,req.body.password, function(err,partner) {
  
                                                                          if (err)
                                                                          res.send(err);
                                                                           res.json(partner);
                                                                       });
                                      };




*/


exports.findAll = function(req, res) {

  Demande.findAll(function(err, demande) {
  
  if (err)
  res.send(err);
  console.log('res', JSON.stringify(demande));
  res.send(JSON.stringify(demande));
                           });
};





exports.create = function(req, res) {
const new_demande = new Demande(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
  console.log("icciiii")
Demande.create(new_demande, function(err, admin) {
  if (err)
  res.send(err);
  res.json({error:false,message:"demande added successfully!",data:new_demande});
});
}
};


exports.refuse = function(req, res) {
  
  
var demande=req.body;
Demande.refuse(demande, function(err, resultat) {
  console.log("in test");

  if (err)
  res.send(err);
  res.json({ error:false, message: 'etat changed  refuse with success' });
});
};






exports.deleted = function(req, res) {
  
  var mailpartner=req.body.mailpartner;

Demande.deleted(mailpartner, function(err, resultat) {
  console.log("in test");

  if (err)
  res.send(err);
  res.json({ error:false, message: 'etat changed  deleted with success' });
});
};



exports.accept = function(req, res) {
  
  
var demande=req.body;
Demande.accept(demande, function(err, resultat) {
  console.log("in test");

  if (err)
  res.send(err);
  res.json({ error:false, message: 'etat changed  accepted with success' });
});
};





/*

exports.findById = function(req, res) {
  console.log("dans le partner controller");
Partner.findById(req.params.id, function(err, partner) {
  if (err)
  res.send(err);
  res.json(partner);
});
};





exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Partner.update(req.params.id, new Partner(req.body), function(err, partner) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Partner successfully updated' });
});
}



};


*/