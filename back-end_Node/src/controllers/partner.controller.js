'use strict';
const Partner = require('../models/partner.model');



exports.findAll = function(req, res) {
  Partner.findAll(function(err, partner) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', partner);
  res.send(partner);
});
};







exports.delete = function(req, res) {
  console.log("hellooo.....")
 
  
   var x=req.params['email'];
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







exports.updateprofile = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    console.log("test if ");
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }
  else
    {  console.log("Parner controller.....",req.body.partner)
      console.log("laaaa")
    let  logintest =req.body.logintest;
    let part =req.body.partner;

    console.log("l'ancien login est"+logintest);
    Partner.updateprofile(logintest,part, function(err,result) {
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

    let part =req.body.partner;

    console.log("l'ancien est"+passwordtest);
        console.log("l'actuel est"+part.password);

    Partner.updatepassword(passwordtest,passwordnew,part, function(err,result)
   {
   if (err)
   res.send(err);
 //result["password"]=passwordnew
  
   console.log(" result de model est",JSON.stringify(result));
   res.json(result);
});
}
};


/*
exports.create = function(req, res) {
const new_partner = new Partner(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Partner.create(new_partner, function(err, admin) {
  if (err)
  res.send(err);
  res.json({error:false,message:"partner added successfully!",data:partner});
});
}
};








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