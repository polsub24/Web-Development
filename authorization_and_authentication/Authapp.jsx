import axios from 'axios';
import { useState } from 'react';

export default function App() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login'); // ✅ Use POST
      const tokenFromServer = response.data.token;     // ✅ Extract token correctly
      localStorage.setItem('authToken', tokenFromServer);
      setToken(tokenFromServer);
      setMessage('Logged in successfully!');
    } catch (error) {
      setMessage('Login failed!');
    }
  };

  const fetchSecretData = async () => {
    try {
      const response = await axios.get('/api/secret-data', {
        headers: {
          Authorization: `Bearer ${token}` // ✅ Send token in correct format
        }
      });
      setMessage(`Secret data: ${response.data.secret}`);
    } catch (error) {
      setMessage('Error fetching secret data!');
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={fetchSecretData}>Get Secret Data</button>
      <p>{message}</p>
    </div>
  );
}