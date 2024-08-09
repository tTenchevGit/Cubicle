const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path'); 

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../servers.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('An error occurred while reading the data.');
        }
        const products = JSON.parse(data);
        res.render('home', { products });
    });
});

module.exports = router;