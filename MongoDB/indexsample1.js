const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const initialDBSetup = require('./initialDBSetup');

// Create a new express app
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1/myDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('connected');
    // initialize DB
    await initialDBSetup();
  });

// Define the schema for planets
const {Schema} =mongoose;
// TODO: Define a mongoose schema for planets with properties: name(string), size(string), mass(number), distanceFromSun(string)
const planetSchema = new Schema({
  name: String,
  size: String,
  mass: Number,
  distanceFromSun: String
});
// TODO: Compile the planet schema into a model
const Planet = mongoose.model('Planet', planetSchema); 
app.post('/api/add-planet', async (req, res) => {
  try {
    const addPlanet = new Planet({
      name: req.body.name,
      size: req.body.size,
      mass: req.body.mass,
      distanceFromSun: req.body.distanceFromSun
    });
    const result = await addPlanet.save();
    res.status(201).json(result); // ✅ Send created planet as response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Set up the POST route for adding a new planet
// TODO: Create an asynchronous POST route handler for '/api/add-planet' that will add a new planet to the database and return the newly created object. Take the name, size, mass, and distance from the request body.

// Start the Express server
// TODO: Define the server port (use environment variable with default), and have the app listen on that port
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});