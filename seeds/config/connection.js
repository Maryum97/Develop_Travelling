const Sequelize = require('sequelize');
// Loading your environment variables is a one-liner here:
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  // JawsDB is an add-on for providing a fully functional MySQL Database server for use with your Heroku application
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;