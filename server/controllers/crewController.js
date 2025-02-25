const mongoose = require('mongoose');
const Crew = require("../models/crewModel");

// Create a GET async function to get all crew using the crew model schema
const getCrew = async (req, res) => {
    const crew = await Crew.find().populate('heist', 'location');
    res.status(200).json(crew);
}

// Create a POST async function to add an crew using the crew model schema
const postCrew = async (req, res) => {
    const { heist, crewMember, rating, profile } = req.body;

    if (!heist || !crewMember || !rating) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    const heistId = mongoose.Types.ObjectId.createFromHexString(heist);

    const newCrew = await Crew.create({
        heist: heistId,
        crewMember,
        rating,
        profile
    });
    res.status(200).json(newCrew);
}

module.exports = { getCrew, postCrew };