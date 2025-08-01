var r = require("./1225/630").match(/AppleWebKit\/(\d+)\./);
module.exports = !!r && +r[1];