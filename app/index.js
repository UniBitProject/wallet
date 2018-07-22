module.exports = require("./lib/rpccall.js");
const bluebird = require("bluebird");
const multichain = bluebird.promisifyAll(require("../index.js")(connection), {suffix: "Method"});
