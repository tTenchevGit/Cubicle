const express = require('express');
const app = express();
const config = require('./config/config'); 
const port = config.PORT || 3500;

console.log(`Environment: ${process.env.NODE_ENV}`);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
