// const uuidv4 = require('uuid/v4');
const mongoCollections = require("../mongoCollections");
const userItems = mongoCollections.userItems;
const uuidv4 = require('uuid/v4');


const exportMethods = {

    async createUserObject(lname, fname, password, email, uname, gender) {
        // parameterCheck(lname, fname, password, email, uname, gender);

        const retVal = {
            _id: uuidv4()
            , fname: fname
            , lname: lname
            , password: password
            , email: email
            , uname: uname
            , gender: gender
        }

        const userItemsCollection = await userItems();
        const insertUser = await userItemsCollection.insertOne(retVal);

        if (insertUser.insertedCount === 0)
            throw "Could not add user";

        const newUserID = insertUser.insertedId;

        const user = await this.getUser(newUserID);

        return user;
    },

    async getUser(userId) {
        if (!userId)
            throw 'You must provide a user ID to query';

        const userItemsCollection = await userItems();

        const userObject = await userItemsCollection.findOne({ _id: userId });

        if (userObject === null)
            throw 'No user with ID - ${userID}';

        return userObject;
    },

    async getAllUsers() {
        const userItemsCollection = await userItems();

        const allUsers = await userItemsCollection.find({}, { title: 1 }).toArray();

        return allUsers;
    },

    // async removeRecipe(recipeID) {
    //     if (!recipeID)
    //         throw 'You must provide an ID to query';

    //     const recipeItemsCollection = await recipeItems();

    //     const checkRecipe = await this.getRecipe(recipeID);
    //     const allRecipes = await recipeItemsCollection.find({}).toArray();
    //     const deletionInfo = await recipeItemsCollection.removeOne({ _id: recipeID });

    //     if (deletionInfo.deletedCount === 0)
    //         throw 'Could not delete recipe with ID - ${recipeID}';
    // },

    // async patchRecipe(recipeID, rTitle, rIngredients, rSteps) {
    //     if (!recipeID)
    //         throw 'You must provide a recipe ID to query';

    //     const updateObject = {};

    //     if (!rTitle && !rIngredients && !rSteps)
    //         throw 'No change detected i.e no parameter submitted';

    //     if (rTitle)
    //         updateObject.title = rTitle;

    //     if (rIngredients)
    //         updateObject.ingredients = rIngredients;

    //     if (rSteps)
    //         updateObject.steps = rSteps;

    //     const checkRecipe = await this.getRecipe(recipeID);
    //     const recipeItemsCollection = await recipeItems();

    //     const updateInfo = await recipeItemsCollection.updateOne({ _id: recipeID }, { $set: updateObject });

    //     if (updateInfo.modifiedCount === 0)
    //         throw 'Could not update recipe with ID - ${recipeID}';

    //     return await this.getRecipe(recipeID)
    // },

    // // update possibly, after professor's reply
    // async putRecipe(recipeID, rTitle, rIngredients, rSteps) {
    //     if (!recipeID) throw 'You must provide a recipe ID to query';

    //     parameterCheck(rTitle, rIngredients, rSteps);
    //     parameterTypeCheck(rTitle, rIngredients, rSteps);

    //     const checkRecipe = await this.getRecipe(recipeID);
    //     const recipeItemsCollection = await recipeItems();

    //     const updateInfo = await recipeItemsCollection.updateOne({ _id: recipeID }, { $set: { title: rTitle, ingredients: rIngredients, steps: rSteps } });

    //     if (updateInfo.modifiedCount === 0)
    //         throw 'Could not update task with ID - ${recipeID}';

    //     return await this.getRecipe(recipeID)
    // }
}


module.exports = exportMethods;
