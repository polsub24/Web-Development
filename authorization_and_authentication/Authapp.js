const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;
const tokenStore = ['secretToken1', 'secretToken2'];

// Login route: generates a new token and sends it to client
app.post('/api/login', (req, res) => {
  const newToken = 'token_' + Math.random().toString(36).substr(2, 10);
  tokenStore.push(newToken);
  res.json({ token: newToken });
});

// Secret data route: validates token from Authorization header
app.get('/api/secret-data', (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1]; // Expecting format: Bearer <token>

  if (!tokenStore.includes(token)) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }

  res.json({ secret: '🌌 Interstellar coordinates: 42.5, -17.3, Sector Z' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});