const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const userDB = new Map();

app.post('/api/signup', async (req, res) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // For simplicity, we use a fixed username 'user1'
    userDB.set('user1', hashedPassword);

    return res.status(200).json({ message: 'Signup successful', userID: 'user1' });
  } catch (error) {
    return res.status(500).json({ message: 'Error hashing the password' });
  }
});

app.post('/api/login', async (req, res) => {
  const { password } = req.body;
  try {
    const userHash = userDB.get('user1');
    const isMatch = userHash ? await bcrypt.compare(password, userHash) : false;
    if (isMatch) {
      return res.json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Password incorrect' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error comparing the password' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
