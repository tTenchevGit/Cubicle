const express = require('express');
const app = express();
const config = require('./config/config'); 
require('./config/express')(app);

const port = config.PORT || 3500;



app.get('/', (req, res)=> {
    res.render('home', { layout: false });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
