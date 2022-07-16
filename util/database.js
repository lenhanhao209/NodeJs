const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "admin",
  database: "node-complete",
  password: "pass",
});

module.exports = pool.promise();
