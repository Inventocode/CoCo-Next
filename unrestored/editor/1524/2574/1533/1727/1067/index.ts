var r = require("./630").match(/AppleWebKit\/(\d+)\./);
module.exports = !!r && +r[1];