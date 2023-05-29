const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;


// use public folder
app.use(express.static(path.join(__dirname,'public')))
// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs',engine({
    // config .handlebars name
    extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources/views'))


app.get('/',(rep,res) => res.render('home'));
app.get('/news',(rep,res) => res.render('news'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
