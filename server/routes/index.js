const imageRoutes = require("./image");
const userRoutes = require("./user");
const authRoutes = require("./login");
const dashboardRoutes = require("./dashboard");

const constructorMethod = app => {
    app.use("/auth", authRoutes);
    app.use("/api/image", imageRoutes);
    app.use("/api/user", userRoutes);
    app.use("/api/dashboard", dashboardRoutes);
    app.use("*", (req, res) => {
        res.status(404).json({ error: "not found" });
    });
};

module.exports = constructorMethod;
