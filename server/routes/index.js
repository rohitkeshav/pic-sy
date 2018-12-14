const imageRoutes = require("./image");
const userRoutes = require("./user");
const authRoutes = require("./login");

const constructorMethod = app => {
    app.use("/auth", authRoutes);
    app.use("/api/image", imageRoutes);
    app.use("/api/user", userRoutes);
    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;
