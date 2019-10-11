const mongoose = require('mongoose');
const config = require('config');
const databaseConfiguration = config.get('database');

const database = {
  connect: async () => {
    try {
      //console.log(database);
      await mongoose.connect(
        databaseConfiguration.uri,
        databaseConfiguration.options
      );
      console.log('MongoDB Connected');
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
};

module.exports = database;
