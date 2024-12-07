const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Summary = require('../models/summary')
const Report = require('../models/report')

router.get('/summary', auth, async (req, res) => {
    const data = await Summary.find()
    res.json(data[0].data);
});

router.get('/reports', auth, async (req, res) => {
    const data = await Report.find()
    res.json(data[0].data);
});

module.exports = router;