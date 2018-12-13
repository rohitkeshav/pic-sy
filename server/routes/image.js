//kriti
const express = require("express");
const router = express.Router();
const data = require("../data");
const iData = data.images;


// get all images
router.get("/", async (req, res) => {
    console.log("I'm Here");
    try {
        const retrievedObjects = await iData.getAllImages();
        res.json(retrievedObjects);
    } catch (e) {
        res.status(404).json({ message: e });
    }
});


// // get imageData with ID
// router.get("/:id", async (req, res) => {
//     try {
//         const retrievedObject = await iData.getImageById(req.params.id);
//         res.json(retrievedObject);
//     } catch (e) {
//         res.status(404).json({ message: "Image not found" });
//     }
// });

// get imageData with category
router.get("/:category", async (req, res) => {
    try {
        const retrievedObject = await iData.getImageByCategory(req.params.category);
        res.json(retrievedObject);
    } catch (e) {
        res.status(404).json({ message: "Image not found" });
    }
});

// // get imageData with tag
// router.get("/:tag", async (req, res) => {
//     try {
//         const retrievedObject = await iData.getImageByTag(req.params.tag);
//         res.json(retrievedObject);
//     } catch (e) {
//         res.status(404).json({ message: "Image not found" });
//     }
// });

// create a new image object
router.post("/", async (req, res) => {
    try {
        const { userId, category, tag, url } = req.body;
        const newObject = await iData.createImageData(userId, category, tag, url);
        res.json(newObject);
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: e });
    }
});


module.exports = router;
