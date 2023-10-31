var generator = require("../generator");

exports.generator = (req, res) => {
    res.send(generator.generateIntegerStat("test-stat"));
}