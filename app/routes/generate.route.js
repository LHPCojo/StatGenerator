module.exports = (app) => {
    var router = require("express").Router();
    var generate = require("../controllers/generate.controller");

    router.get("/", generate.generator);

    app.use("/api/generate", router);
}