const express = require('express');
const cors = require('cors');

// Create a new express app
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = 5000;

// Hardcoded list of users with their roles for demonstration purposes
const users = [
  { username: 'astroJane', role: 'Scientist' },
  { username: 'cosmoPilot', role: 'Astronaut' },
  { username: 'spaceBoss', role: 'Admin' },
];

function isScientist(req, res, next) {
  const { username } = req.query;
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (user.role === 'Scientist') {
    return next(); // ✅ User has access
  } else {
    return res.status(403).json({ message: 'Access denied: Only Scientists can access this data' });
  }
}

// Protect the space experiments data route with the isScientist middleware
app.get('/api/space-experiments', isScientist, (req, res) => {
  res.send('Welcome to the space experiments data!');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
