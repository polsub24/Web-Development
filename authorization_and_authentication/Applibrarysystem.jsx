import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [signupPassword, setSignupPassword] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupStatus, setSignupStatus] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  
  const handleSignup = () => {
    axios.post('/api/signup', { password: signupPassword })
      .then(response => {
        setSignupStatus(response.data.message);
      })
      .catch(error => {
        setSignupStatus('Signup failed: ' + error.response.data.message);
      });
  };

  const handleLogin = () => {
    axios.post('/api/login', { password: loginPassword })
      .then(response => {
        setLoginStatus(response.data.message);
      })
      .catch(error => {
        setLoginStatus('Login failed: ' + error.message);
      });
  };

  return (
    <div>
      <div>
        <input
          type="password"
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
          placeholder="Create Password"
        />
        <button onClick={handleSignup}>Sign Up</button>
        <p>{signupStatus}</p>
      </div>
      <div>
        <input
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button onClick={handleLogin}>Login</button>
        <p>{loginStatus}</p>
      </div>
    </div>
  );
}