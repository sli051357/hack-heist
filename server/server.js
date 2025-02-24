const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/server');
const router = require('./routes/heistRoutes');


// Create an Express server
const server = express();

server.use(cors());
server.use(express.json());

// Mount /api onto our server
server.use('/api', router);

// Connect to MongoDB database
mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

server.listen(config.PORT, () => {
    console.log("Server started on PORT " + config.PORT);
});