var r = require("./1225/630").match(/firefox\/(\d+)/i);
module.exports = !!r && +r[1];