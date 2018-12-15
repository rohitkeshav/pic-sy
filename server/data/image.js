//kriti
const uuid = require('uuid');
const mongoCollections = require("../mongoCollections");
const imageItems = mongoCollections.imageItems;

/* exporting controllers apis */
let imageControllers = {
    /**
     * @returns {Object} An object of image
     */
    getImageById: async function(id) {
        if (!id) throw "Please provide a id";
        const imageCollection = await imageItems();
        const imageInfo = await imageCollection.findOne({ _id: id });
        if (imageInfo === null) {
            throw "Server issue in fetching image data by id";
        }
        return imageInfo;
    },

    /**
     * @returns {Object} An object of image
     */
    getImageByCategory: async function(category) {
        if (!category) throw "Please provide a category";
        const imageCollection = await imageItems();
        const imageInfo = await imageCollection.find({ category: category }).toArray();
        if (imageInfo === null) {
            throw "Server issue in fetching image data by category name";
        }
        return imageInfo;
    },

    /**
     * @returns {Object} An object of image
     */
    searchImage: async function (query) {
        const imageCollection = await imageItems();
        const imageInfo = await imageCollection.find({"$text": {"$search": query}}).toArray();
        
        console.log('Hey');
        
        if (imageInfo === null) {
            throw "Server Issue";
        }
        return imageInfo;
    },

    // /**
    //  * @returns {Object} An object of image
    //  */
    // getImageByTag: async function(tag) {
    //     if (!tag) throw "Please provide a tag";
    //     const imageCollection = await imageItems();
    //     const imageInfo = await imageCollection.findOne({ tag: tag }).toArray();
    //     if (imageInfo === null) {
    //         throw "Server issue in fetching image data by tag";
    //     }
    //     return imageInfo;
    // },

    /**
     * @param {String} userId
     * @param {String} category
     * @param {Object} tag
     * @param {String} url
     */
    createImageData: async function(userId, category, tag, url) {
        console.log("category, tag, url", category, tag, url)
        if(!userId || !category || !tag || !url) throw "Insufficient data provided";
        // if(!userId) userId = "1";
        
        let imageInfo = {
            _id: uuid.v4(), 
            userId: userId,
            category: category,
            tag: tag,
            url: url
        };

        try {
            const imageCollection = await imageItems();
            const insertImageData = await imageCollection.insertOne(imageInfo);
    
            if (insertImageData.insertedCount === 0)
                throw "Could not add data";
    
            const newImageID = insertImageData.insertedId;
            const image = await this.getImageById(newImageID);

            return image;

        } catch (error) {
            throw error; 
        }
    },
    
    /**
     * @returns {Object} An object of image
     */
    getAllImages: async function() {
        const imageCollection = await imageItems();
        const allImages = await imageCollection.find({}).toArray();
        return allImages;
    },
};

for(let key in imageControllers) {
    module.exports[key] = imageControllers[key];
}