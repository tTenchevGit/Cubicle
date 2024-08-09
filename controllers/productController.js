const express = require('express');
const router = express.Router();


// router.get('/about', (req, res) => {
//     res.render('about', { layout: false });
// });

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.get('/details/:id?', (req, res) => {
    res.render('details');
});

module.exports = router;