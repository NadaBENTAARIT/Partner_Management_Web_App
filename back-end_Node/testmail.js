const nodemailer = require('nodemailer');

var sendMail = function (mail,login, result) {



const message = {
    from: 'nada123.bentaarit@gmail.com', // Sender address
    to: mail,         // List of recipients
    subject: 'Welcome as Test partener', // Subject line
    text:"Bonjour  with function"+  login+"test test"
};

let transport = nodemailer.createTransport({
   service:'gmail' ,
    auth: {
       user: 'tt1921294@gmail.com',
       pass: '00001111a '
    }
});
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
      result(err, null);
    } else {
    	console.log("envoyé")
      result(null, "Bien");
    }
});
// password mte3 l compte 00001111a       esmou test test 

}
sendMail("nouha.bentaarit@gmail.com","nouha")