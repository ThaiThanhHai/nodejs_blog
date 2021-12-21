const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// HTTP logger
// app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')))

const hbs = handlebars.create({
  extname: '.hbs'
});

// Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.set('views', path.join(__dirname, 'resources/views'));

// 
app.use(express.json())
app.use(express.urlencoded()) 

// [GET] home
app.get('/', (req, res) => {
  res.render('home');
})

// [GET] news
app.get('/news', (req, res) => {
  res.render('news');
})

// [GET] search
app.get('/search', (req, res) => {
  res.render('search');
})

// [POST] search
app.post('/search', (req, res) => {
  console.log(req.body);
  res.send('AAAAA');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})