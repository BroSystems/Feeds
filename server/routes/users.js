const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('login');
});

router.get('/signin', (req, res) => {
    res.send('sign_in');
});

router.get('/register', (req, res) => {
    res.send('register');
});


module.exports = router;