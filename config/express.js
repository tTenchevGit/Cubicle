// const handlebars = require('express-handlebars');
// const express = require('express');

// function setupExpress(app){
// app.engine('hbs', handlebars.engine({ 
//     extname: '.hbs',
//     layoutsDir: 'views/layouts',
    
//  })); 
// app.set('view engine', 'hbs');

// app.use(express.static('public'));
// };

// module.exports = setupExpress;
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.engine('hbs', handlebars.engine({ 
        extname: '.hbs',
        layoutsDir: path.join(__dirname, '../views/layouts'),
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../views'));

    app.use(express.static(path.join(__dirname, '../public')));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

};
