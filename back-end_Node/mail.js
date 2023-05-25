const nodemailer = require('nodemailer');




let transport = nodemailer.createTransport({
   service:'gmail' ,
    auth: {
       user: 'tt1921294@gmail.com',
       pass: '00001111a '
    }
});

const message = {
    from: 'nada123.bentaarit@gmail.com', // Sender address
    to: 'nouha.bentaarit@gmail.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text:"Bonjour Nouha"
};


transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});

     