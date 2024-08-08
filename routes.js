const express = require('express');

const router = express.Router();

// Define your routes here
router.get('/', (req, res)=> {
    res.render('home', { layout: false });
});
router.get('/about', (req, res) => {
    res.render('about', { layout: false });
});

router.get('/create', (req, res) => {
    res.render('create', { layout: false });
});

router.get('/details', (req, res) => {
    res.render('details', { layout: false });
});

module.exports = router;