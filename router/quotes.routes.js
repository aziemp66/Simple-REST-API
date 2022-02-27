const express = require("express");

const router = express.Router();

router.get("/quote", (req, res) => {
    res.json({
        quote: "Have Unending Thirst for Knowledge",
    });
});

module.exports = router;
