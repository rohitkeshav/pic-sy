//kriti
const uuid = require('uuid');
const mongoCollections = require("../mongoCollections");
const imageItems = mongoCollections.imageItems;

/* exporting controllers apis */
let imageControllers = {
    /**
     * @returns {Object} An object of image
     */
    getImageByEmail: async function(email) {
        if (!email) throw "Please provide a user id";
        const imageCollection = await imageItems();
        const imageInfo = await imageCollection.find({ userId: email }).toArray();
        if (imageInfo === null) {
            throw "Server issue in fetching image data by user id";
        }
        return imageInfo;
    }
};

for(let key in imageControllers) {
    module.exports[key] = imageControllers[key];
}