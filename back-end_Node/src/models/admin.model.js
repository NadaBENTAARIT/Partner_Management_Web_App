'use strict';
var dbConn = require('./../../config/db.config');

const nodemailer = require('nodemailer');
const Partner = require('../models/partner.model');
const Demande = require('../models/demande.model');


const crypto = require('crypto')


//Admin object create
var Admin = function(admin){
  this.login         = admin.login;
  this.first_name     = admin.first_name;
  this.last_name      = admin.last_name;
  this.email          = admin.email;
  this.tel          = admin.tel;
  this.password         =admin.password;
  this.birthdate         = admin.birthdate;


};






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





Admin.updateprofile = function(logintest, admin, result){
        


dbConn.query("UPDATE administrateur SET login=?,first_name=?,last_name=?,email=?,password=?,tel=?,birthdate=? WHERE login = ?", [admin.login,admin.first_name,admin.last_name,admin.email,admin.password,admin.tel,admin.birthdate,logintest], function (err, res) {

if(err) {
  console.log("error: ", err);
  result(err, null);
}else{
  console.log("hhhhhhhhhhhhh"+JSON.stringify(admin));
   return result(null,admin);
}
});
};




Admin.updatepassword = function(passwordtest,passwordnew,admin, result){


console.log("deja est ",admin.password);
if(admin.password == passwordtest)
          {
dbConn.query("UPDATE administrateur SET login=?,first_name=?,last_name=?,email=?,password=?,tel=?,birthdate=? WHERE login=? ", [admin.login,admin.first_name,admin.last_name,admin.email,passwordnew,admin.tel,admin.birthdate,admin.login], function (err, res) {

if(err) {
  console.log("error: ", err);
  result(null, err);
         }
else{
  admin["password"]=passwordnew;
    console.log("le admin apres modif password"+JSON.stringify(admin));

   return result(null, {"modification":"true","admin":admin});
    }
});
                         }
else
      {
        console.log("not same password");
   return result(null, {"modification":"false","admin":admin});

      }
                                    

                                              };




//**************************************************

function password(){

const generatePassword = (
  length = 8,
  wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
) =>
  Array.from(crypto.randomFillSync(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join('')

 return (generatePassword());


}

Admin.sendMail = function (demande,partner,mailadmin,result) {
  

let motdepasse=password();
// insert base de donne

//send mail
console.log("partner mail",partner.email)
const message = {
    from: mailadmin, // Sender address
    to: partner.email,         // List of recipients
    subject: 'Welcome as Test partener', // Subject line
    text:"Dear    "+ partner.first_name +"   " +partner.last_name+    " \n  A login has been created for you:   \n " +"login   "+partner.email +"\n  password:   "+motdepasse + "\n Thank you"


};

let transport = nodemailer.createTransport({
   service:'gmail' ,
    auth: {
       user: mailadmin,
       pass: '00001111a'
    }
});
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log("erreur mail",err)
      result(err, null);
      
    } else {
      console.log(" mail envoyé")
      //result(null, "Bien");
    }
});


//*****************

//handles null error
console.log("Partner creation")
partner.password=motdepasse;
Partner.create(partner, function(err, res) {
  if (err)
  result(err,null);
  console.log("partner created")
  //result(null,{message:"partner added successfully!"});
});


Demande.accept(demande, function(err, res) {
  if (err)
  result(err,null);
console.log("request accepted")
  result(null,{message:"demande etat accepted!"});
});




}




// password mte3 l compte 00001111a       esmou test test

















/*




Admin.create = function (newAdmin, result) {
dbConn.query("INSERT INTO administrateur set ?", newAdmin, function (err, res) {
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

Admin.findAll = function (result) {
dbConn.query("Select * from administrateur", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('administrateur : ', res);
  result(null, res);
}
});
};
*/
/*
A
*/

/*
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
module.exports= Admin;