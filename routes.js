const express = require('express');
const router = express.Router();
const productController = require('./controllers/productController');
const aboutController = require('./controllers/aboutController');
const homeController = require('./controllers/homeController');

router.use('/', homeController);
router.use('/products', productController);
router.use('/about', aboutController);
router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;