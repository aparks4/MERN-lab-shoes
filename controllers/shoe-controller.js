const express = require('express');
const router = express.Router();
const { Shoes } = require('../models');

// ROUTES

router.get('/', async (req, res) => {
    try {
        res.json(await Shoes.find({}));
    } catch(err) {
        res.status(400).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        res.json(await Shoes.create(req.body));
    } catch(err) {
        res.status(400).json(err);
    }
})

module.exports = router;