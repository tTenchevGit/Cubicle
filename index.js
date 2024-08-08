const express = require('express');
const app = express();
const config = require('./config/config'); 
const handlebars = require('express-handlebars');


const port = config.PORT || 3500;

app.engine('hbs', handlebars.engine({ extname: '.hbs' })); 
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.render('home', { layout: false });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
