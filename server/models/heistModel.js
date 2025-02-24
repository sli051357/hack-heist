const mongoose = require('mongoose');

// Creating a schema–a "blueprint" for our data
const Heistschema = new mongoose.Schema({
  location: { type: String }, 
  startDate:{ type: Date },
  endDate: { type: Date },
  planEntry: { type: String }, 
});

// Create a model for our Heists based on the schema
const Heists = mongoose.model('Heists', Heistschema);

module.exports = Heists;