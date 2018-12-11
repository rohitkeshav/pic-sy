// const imageRoutes = require("./image");
const userRoutes = require("./user");

const constructorMethod = app => {
    // app.use("/image", imageRoutes);
    app.use("/api/user", userRoutes);

    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;
