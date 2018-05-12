'use strict';

var express = require('express');
var router = express.Router();

router.get('/create_group', function (req, res) {
    res.send('create_group');
});

router.get('/:id', function (req, res) {
    res.send('get group');
});

router.get('/delete_group', function (req, res) {
    res.send('delete_group');
});

module.exports = router;