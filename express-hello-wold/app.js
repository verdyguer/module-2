// Require Express
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

// Express server handling requests and responses
const app = express();

app.use(express.static('public'));
app.set('layout', 'layouts/main-layout');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



// our first Route:
app.get('/', (req, res, next) => {
    let data = {
    name: "Ironhacker",
    bootcamp: "IronHack WebDev"
  };
  // send views/index.ejs for displaying in the browser
  res.render('index',{
    name: "Ironhacker",
    age:18,
    country:"US",
    bootcamp: "IronHack WebDev",
    citiesTraveled: ["Miami", "Madrid", "Barcelona"]  
  });
});
//second route
app.get('/foods', (req, res, next)=> {
  res.render('foods',{
    foods:["bannas","apple","carrots", "tomatoes"]
  })
})

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

