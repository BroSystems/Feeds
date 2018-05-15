'use strict';

var express = require('express');
var router = express.Router();

router.get('/login', function (req, res) {
    res.send('login');
});

router.get('/signin', function (req, res) {
    res.send('sign_in');
});

router.get('/register', function (req, res) {
    res.send('register');
});

module.exports = router;