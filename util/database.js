const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "ngocdung209", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
