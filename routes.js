const express = require('express');
const router = express.Router();
const productController = require('./controllers/productController');
const aboutController = require('./controllers/aboutController'); // Provide the correct path to the aboutController module



router.use('/', productController);
router.use('/about', aboutController);


module.exports = router;