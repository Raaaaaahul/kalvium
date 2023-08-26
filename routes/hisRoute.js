const express = require("express");
const router = express.Router();
const operations = require('../models/Schema')

router.get('/', async (req, res) => {
    try {
        const history = await operations.find()
            .sort({ _id: -1 })
            .limit(20)
            .select('question answer -_id'); 
        res.json(history);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching history' });
    }
});

module.exports = router;