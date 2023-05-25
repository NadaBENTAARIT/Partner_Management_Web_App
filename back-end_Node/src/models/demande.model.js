'use strict';
var dbConn = require('./../../config/db.config');




//Admin object create
var Demande = function(demande){
  this.first_name     = demande.first_name;
  this.last_name      = demande.last_name;
    this.birthdate          = demande.birthdate;

  this.email          = demande.email;
  this.tel          = demande.tel;
  this.description         =demande.description;
  this.etat        = demande.etat;
  this.dateenvoie=demande.dateenvoie;


};




/*

// verfier l esxistence d'un admin a partir login et password
Admin.connect = function (login,password,result) {
  console.log("dans Admin");
dbConn.query("SELECT * FROM administrateur WHERE login=? AND password=?",[login,password], function (err, res) {
if(err) {
  console.log("error: ", err);
  return result(err,null)
}
else{

           

  return result(res);
 }

});
};
*/
Demande.findAll = function (result) {
dbConn.query("Select * from demande ORDER BY dateenvoie DESC" , function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('demande : ', res);
  result(null, res);
}
});
};





Demande.create = function (newDemande, result) {
dbConn.query("INSERT INTO demande SET ?",newDemande, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.create);
  result(null, res.create);
}
});
};


Demande.accept= function(demande, result){

dbConn.query("UPDATE demande SET etat=? WHERE email = ?",['accepted',demande.email], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  
  result(null, res);



}
});
};

Demande.refuse= function(demande, result){

dbConn.query("UPDATE demande SET etat=? WHERE email = ?",['refused',demande.email], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log("je suis dans refuse");
  
  result(null, res);



}
});
};







Demande.deleted= function(mailpartner,result){
  console.log("modeeeeeeeeeeeeeel input:" ,mailpartner)
var req=String("UPDATE demande SET etat= 'deleted' WHERE email = '"+mailpartner+"'");
console.log("Reqq:",req)
dbConn.query(req, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log("je suis dans delete");
  
  result(null, res);



}
});
};
/*


Admin.findById = function (id, result) {
dbConn.query("Select * from administrateur where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

*/






/*

Admin.updateprofile = function(ancienpassword, admin, result){
        console.log("jklkjhgfghjklkjhghjklmlkjhgfghjklmlkjhgfdfghjklm",admin.password);


dbConn.query("UPDATE administrateur SET login=?,first_name=?,last_name=?,email=?,password=?,tel=?,birthdate=? WHERE password = ?", [admin.login,admin.first_name,admin.last_name,admin.email,admin.password,admin.tel,admin.birthdate,ancienpassword], function (err, res) {

if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};




Admin.delete = function(login, result){
dbConn.query("DELETE FROM administrateur WHERE login = ?", [login], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
*/
module.exports= Demande;