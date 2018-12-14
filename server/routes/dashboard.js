//kriti
const express = require("express");
const router = express.Router();
const data = require("../data");
const dData = data.dashboard;

// router.get("/", async (req, res) => {
//     res.redirect('/api/dashboard');
// });

// get images per user with userId
router.get("/:email", async (req, res) => {
    try {
        console.log("req.cookies", req.cookies);
        const retrievedObject = await dData.getImageByEmail(req.params.email);
        res.json(retrievedObject);
    } catch (e) {
        res.status(404).json({ message: "Image not found" });
    }
});

module.exports = router;
