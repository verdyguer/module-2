// Require Express
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
// Express server handling requests and responses
const app = express();

app.use(express.static('public'));
app.set('layout', 'layouts/main-layout');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(myFakeMiddleware)
function myFakeMiddleware(req,_,next){
  console.log("myFakeMiddleware was called!");
  req.secretValue = "swordfish";
  next();
}

// our first Route:
app.get('/get-user-info', (req, res) => {
  res.render('user-info-form');
});
app.get('/display-user-info', (req, res) => {
  let name      = req.query.name;
  let age       = req.query.age;
  let superhero = req.query.superhero;

  res.send(`
    Your name is ${name}
    Your age is ${age}
    Your favorite superhero is ${superhero}
  `)
});

// second route
app.get('/login', (req, res) => {
  res.render('login')
});
app.post('/login', (req, res) => {
let email    = req.body.email;
  let password = req.body.password;
  if (email=== "pepe@gmail.com"){
    //render "Welcome"
    res.send(`wellcome`)
    
  } else {
    // render go away
    res.send(`fail`)
  }

  res.send(`Email: ${email}, Password: ${password}`);
  
});

// third route

app.get('/test', (req, res) => {
  let mySecret = req.secretValue;
  res.send(mySecret);
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

app.get('/hello', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="stylesheets/style.css">
      </head>
      <body>
        This is my second route
      </body>
    </html>
  `);
});

