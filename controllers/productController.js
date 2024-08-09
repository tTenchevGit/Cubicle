const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Route to render the create page
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

// Route to handle the creation of new entries
router.post('/create', (req, res) => {
    const details = req.body;
    details.id = uuidv4();
    console.log(details);
    res.send('It is Created');

    // Read the existing servers.json file
    fs.readFile('servers.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        // Parse the JSON data into an array
        const servers = JSON.parse(data);

        // Add the details to the array
        servers.push(details);

        // Write the updated array back to the servers.json file with formatting
        fs.writeFile('servers.json', JSON.stringify(servers, null, 2), 'utf8', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('servers.json file updated');
        });
    });
});

// // Route to get and display products
// router.get('/products', (req, res) => {
//     const filePath = path.join(__dirname, 'servers.json');
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).send('An error occurred');
//         }
//         const products = JSON.parse(data);
//         res.render('home', { products });
//     });
// });

// Route to render the details page with optional ID
router.get('/details/:id', (req, res) => {
    const filePath = path.join(__dirname, '../servers.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('An error occurred while reading the data.');
        }
        const products = JSON.parse(data);
        const product = products.find((product) => product.id === req.params.id);
        console.log(product); // Debugging line
        res.render('details', { product });
    });
});



module.exports = router;
