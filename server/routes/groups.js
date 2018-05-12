const express = require('express');
const router = express.Router();


router.get('/create_group', (req, res) => {
    res.send('create_group');
});

router.get('/:id', (req, res) => {
    res.send('get group');
});

router.get('/delete_group', (req, res) => {
    res.send('delete_group');
});


module.exports = router;