const mongoose = require('mongoose');

// Creating a schema–a "blueprint" for our data
// TODO: Name each of the fields for the heist and their types
  // HINT: Look at server/models/crewModel.js if you're stuck!
const Heistschema = new mongoose.Schema({
  // ...
});

// Create a model for our Heists based on the schema
const Heists = mongoose.model('Heists', Heistschema);

module.exports = Heists;