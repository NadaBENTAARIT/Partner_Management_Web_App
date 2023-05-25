const crypto = require('crypto')

const nodemailer = require('nodemailer');





function password()
{
const generatePassword = (
  length = 8,
  wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
) =>
  Array.from(crypto.randomFillSync(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join('')

 return (generatePassword());


}



//insert partner


function sendmail(first_name,last_name,email,emailadmin,passwordadmin)
{

let transport = nodemailer.createTransport({
   service:'gmail' ,
    auth: {
       user: 'tt1921294',
       pass: '00001111a'
    }
});

const message = {
    from: 'nada123.bentaarit@gmail.com', // Sender address
    to: 'nouha.bentaarit@gmail.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text:"Bonjour Nouha test test"
};


transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});

// password mte3 l compte 00001111a       esmou test test 


}
