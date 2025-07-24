import axios from 'axios';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleAccessSpaceData = (username) => {
    axios.get('/api/space-experiments', { params: { username: username } })
      .then(response => setMessage(response.data))
      .catch(error => {
        const errorMessage = (error.response && error.response.data) ? error.response.data : 'An error occurred!';
        setMessage(errorMessage);
      });
  };

  return (
    <div>
      <button onClick={() => handleAccessSpaceData('astroJane')}>
        Access Space Experiments Data as astroJane
      </button>
      <button onClick={() => handleAccessSpaceData('cosmoPilot')}>
        Access Space Experiments Data as cosmoPilot
      </button>
      <div>{message}</div>
    </div>
  );
}

export default App;