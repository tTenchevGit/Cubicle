const express = require('express');
const router = express.Router();


router.get('/', (req, res)=> {
    res.render('home');
});
// router.get('/about', (req, res) => {
//     res.render('about', { layout: false });
// });

router.get('/create', (req, res) => {
    res.render('create');
});

router.get('/details', (req, res) => {
    res.render('details');
});

module.exports = router;