const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = 8888;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
// define a root route
app.get('/', (req, res) => {
  console.log("hello world;")
  res.send("Hello World");
});
// Require admin routes
const adminRoutes = require('./src/routes/admin.route')
// using as middleware: charger le module de routage dans l’application 
app.use('/admin', adminRoutes)


// Require admin routes
const partnerRoutes = require('./src/routes/partner.route')
// using as middleware: charger le module de routage dans l’application 
app.use('/partner', partnerRoutes)



// Require admin routes
const demandeRoutes = require('./src/routes/demande.route')
// using as middleware: charger le module de routage dans l’application 
app.use('/demande', demandeRoutes)




