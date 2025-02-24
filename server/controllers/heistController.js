const Heists = require('../models/heistModel');

// Create a GET async function to get all Heists using the heist model schema
const getHeist = async (req, res) => {
    const heist = await Heists.find();
    res.status(200).json(heist);
}

// Create a POST async function to add a heist using the heist model schema
const postHeist = async (req, res) => {
    const { location, startDate, endDate, planEntry } = req.body;

    if (!location || !startDate || !planEntry) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    if (end && start > end) {
        return res.status(400).json({ error: 'End date must be after start date' });
    }
    else {
        const newHeist = await Heists.create(req.body);
        res.status(200).json(newHeist);
    }
}

module.exports = { getHeist, postHeist };
