const express = require('express');
const app = express();
const config = require('./config/config'); 
require('./config/express')(app);
const routes = require('./routes');

const port = config.PORT || 3500;

app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
