const mongoose = require('mongoose');

// Creating a schemaz–a "blueprint" for our data
const crewSchema = new mongoose.Schema({
  heist: { type: mongoose.Schema.Types.ObjectId, ref: 'Heists' }, 
  crewMember: { type: String }, 
  rating:{ type: String },
  profile: { type: String }
});

// Create a model for our Heists based on the schema
const Crew = mongoose.model('Crew', crewSchema);

module.exports = Crew;