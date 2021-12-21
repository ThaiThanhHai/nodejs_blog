const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

// HTTP logger
// app.use(morgan('combined'));

// Static file
app.use(express.static(path.join(__dirname, 'public')));

const hbs = handlebars.create({
    extname: '.hbs',
});

// Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.set('views', path.join(__dirname, 'resources', 'views'));

// Get data req.body
app.use(express.json());
app.use(express.urlencoded());

// Route init
route(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
