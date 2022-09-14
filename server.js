// DEPENDENCIES
require('dotenv').config();

const { PORT, MONGODB_URI } = process.env;

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const cors = require('cors');
const morgan = require('morgan');

// DATABASE CONNECTION
mongoose.connect(MONGODB_URI);
// Connection events
mongoose.connection
.on("open", () => console.log('You are connected to mongoose'))
.on("close", () => console.log('you are disconnected from mongoose'))
.on("error", (error) => console.log(error));

// CONTROLLERS
const shoeController = require('./controllers/shoe-controller');

// MIDDLEWARE
app.use(express.json()); // parse json bodies

app.use(cors());
app.use(morgan("dev"));

app.use('/shoes', shoeController);

// ROUTES

// test route
app.get('/', (req, res) => {
    res.send('hi, world')
})


// SERVER
app.listen(PORT, () => {
    console.log('listening on port 4000...')
})
