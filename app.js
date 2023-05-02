require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;
const publicPath = `${ __dirname }/public`;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials', function (err) {} );

// Server static content
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', { title: 'Node course', name: 'Feranndo Herrera' });
});

app.get('/generic', (req, res) => {
  res.render('generic');
});

app.get('/elements', (req, res) => {
  res.render('elements');
});

app.get('*', (req, res) => {
  // res.send('404 | Page not found');
  res.sendFile(`${ publicPath }/404.html`);
});

app.listen(port, () => console.log(`Running server on port ${ port }` ));