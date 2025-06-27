import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [newPlanet, setNewPlanet] = useState({});
  useEffect(() => {
    const addPlanet = async () => {
      const response = await axios.post('/api/add-planet', {
        name: 'Pluto',
        size: 'Small',
        mass: 0.00218,
        distanceFromSun: '5.9 billion km'
      });
      setNewPlanet(response.data);
    };
    addPlanet();
  }, []);

  return (
    <div>
      <h1>Newly Discovered Planet</h1>
      <div>Name: {newPlanet.name}</div>
      <div>Size: {newPlanet.size}</div>
      <div>Mass: {newPlanet.mass}</div>
      <div>Distance: {newPlanet.distanceFromSun}</div>
    </div>
  );
}
export default App;