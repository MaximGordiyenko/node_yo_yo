const express = require('express');
const router = express.Router();
const pages = require("../data/pages");

// method: GET, path: /pages
router.get('/', (req, res) => {
    res.json(pages);
});

module.exports = router;