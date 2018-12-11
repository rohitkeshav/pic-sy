// const uuidv4 = require('uuid/v4');
const mongoCollections = require("../mongoCollections");
const userItems = mongoCollections.userItems;


const parameterCheck = function (rTitle, rIngredients, rSteps) {
    if (!rTitle) throw "You must provide a title";
    if (!rIngredients) throw "You must provide ingredients to the recipe";
    if (!rSteps) throw "You must provide steps for the recipe";
}

const parameterTypeCheck = function (title, ingredients, steps) {
    if (typeof title !== 'string')
        throw "Title should be of type string"

    if (ingredients.length === 0)
        throw "No ingredients given"

    if (!Array.isArray(ingredients)) {
        ingredients.forEach(element => {
            if (typeof element.name === undefined, typeof element.amount === undefined)
                throw "Each ingredients require 2 parameters - name and amount"
        });
    }

    if (steps.length === 0)
        throw "No steps for recipe supplied"

    if (Array.isArray(steps)) {
        steps.forEach(element => {
            if (typeof element !== 'string')
                throw "Steps must be an array of strings"
        });
    }
}


const exportMethods = {

    // async createRecipeObject(rTitle, rIngredients, rSteps) {
    //     parameterCheck(rTitle, rIngredients, rSteps);
    //     parameterTypeCheck(rTitle, rIngredients, rSteps);

    //     const retVal = {
    //         _id: uuidv4(),
    //         title: rTitle,
    //         ingredients: rIngredients,
    //         steps: rSteps
    //     }

    //     const recipeItemsCollection = await recipeItems();
    //     const insertRecipe = await recipeItemsCollection.insertOne(retVal);

    //     if (insertRecipe.insertedCount === 0)
    //         throw "Could not add recipe";

    //     const newRecipeID = insertRecipe.insertedId;

    //     const recipe = await this.getRecipe(newRecipeID);

    //     return recipe;
    // },

    async getRecipe(userId) {
        if (!recipeID)
            throw 'You must provide a recipe ID to query';

        const userItemsCollection = await userItems();

        const userObject = await userItemsCollection.findOne({ _id: userId });

        if (userObject === null)
            throw 'No recipe with ID - ${recipeID}';

        return userObject;
    },

    async getAllRecipes() {
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
