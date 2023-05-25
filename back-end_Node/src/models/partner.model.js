'use strict';
var dbConn = require('./../../config/db.config');




//Admin object create
var Partner = function(partner){
  this.login         = partner.login;
  this.first_name     = partner.first_name;
  this.last_name      = partner.last_name;
  this.email          = partner.email;
  this.tel          = partner.tel;
  this.password         =partner.password;
  this.birthdate         = partner.birthdate;

};



Partner.findAll = function (result) {
dbConn.query("Select * from partenaire ORDER BY login" , function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('partenaire : ', res);
  result(null, res);
}
});
};


Partner.delete = function(email, result){
dbConn.query("DELETE FROM partenaire WHERE email = ?",email, function (err, res) {
  console.log("je suis dans delete",email);
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log("je suis dans delete");
  
  result(null, res);



}
});
};








// verfier l esxistence d'un admin a partir login et password
Partner.connect = function (login,password,result) {
  console.log("dans Admin");
dbConn.query("SELECT * FROM partenaire WHERE login=? AND password=?",[login,password], function (err, res) {
if(err) {
  console.log("error: ", err);
  return result(err,null)
}
else{

           

  return result(res);
 }

});
};







Partner.create = function (newPartner, result) {
dbConn.query("INSERT INTO partenaire set ?", newPartner, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};





Partner.updateprofile = function(logintest,partner, result){
        

console.log("Partner model.....",partner)
dbConn.query("UPDATE partenaire SET login=?,first_name=?,last_name=?,email=?,password=?,tel=?,birthdate=? WHERE login = ?", [partner.login,partner.first_name,partner.last_name,partner.email,partner.password,partner.tel,partner.birthdate,logintest], function (err, res) {

if(err) {
  console.log("error: ", err);
  result(err, null);
}else{
  console.log("hhhhhhhhhhhhh"+JSON.stringify(partner));
   return result(null,partner);
}
});
};




Partner.updatepassword = function(passwordtest,passwordnew,partner, result){


console.log("deja est ",partner.password);
if(partner.password == passwordtest)
          {
dbConn.query("UPDATE partenaire SET login=?,first_name=?,last_name=?,email=?,password=?,tel=?,birthdate=? WHERE login=? ", [partner.login,partner.first_name,partner.last_name,partner.email,passwordnew,partner.tel,partner.birthdate,partner.login], function (err, res) {

if(err) {
  console.log("error: ", err);
  result(null, err);
         }
else{
  partner["password"]=passwordnew;

   return result(null, {"modification":"true","partner":partner});
    }
});
                         }
else
      {
        console.log("not same password");
   return result(null, {"modification":"false","partner":partner});

      }
                                    

                                              };


/*

Partner.findById = function (id, result) {
dbConn.query("Select * from partenaire where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};







Partner.update = function(id, partner, result){
dbConn.query("UPDATE partenaire SET login=?,first_name=?,last_name=?,email=?,tel=?,password=?,birthdate=? WHERE id = ?", [partner.first_name,partner.last_name,partner.email,partner.tel,partner.password,partner.birthdate,partner,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};



*/
module.exports= Partner;