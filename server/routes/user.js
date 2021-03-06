const express = require("express");
const router = express.Router();
const data = require("../data");
const uData = data.users;



// get all recipes
router.get("/", async (req, res) => {
    try {
        const retrievedObjects = await uData.getAllUsers();
        res.json(retrievedObjects);
    } catch (e) {
        res.status(404).json({ message: e });
    }
});


// get recipe with ID
router.get("/:id", async (req, res) => {
    try {
        const retrievedObject = await uData.getUser(req.params.id);
        res.json(retrievedObject);
    } catch (e) {
        res.status(404).json({ message: "User not found" });
    }
});

// create a new user
// signup
router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const { lname, fname, password, email, uname, gender } = req.body;
        
        const newObject = await uData.createUserObject(lname, fname, password, email, uname, gender);
        res.json(newObject);
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: e });
    }
});


// // put request to recipe
// router.put("/:id", async (req, res) => {
//     try {
//         const { title, ingredients, steps } = req.body;
//         const updatedObject = await rData.putRecipe(req.params.id, title, ingredients, steps);
//         res.json(updatedObject);
//     } catch (e) {
//         res.status(404).json({ message: e });
//     }
// });


// // put request to recipe
// router.delete("/:id", async (req, res) => {
//     try {
//         await rData.removeRecipe(req.params.id);
//         res.status(200).json({ message: 'Recipe has been removed from record' });
//     } catch (e) {
//         console.log(e);
//         res.status(404).json({ message: e });
//     }
// });


// // patch request to recipe
// router.patch("/:id", async (req, res) => {
//     try {
//         const { title, ingredients, steps } = req.body;

//         const post = await rData.patchRecipe(req.params.id, title, ingredients, steps);
//         res.json(post);
//     } catch (e) {
//         res.status(404).json({ message: e });
//     }
// });


module.exports = router;
