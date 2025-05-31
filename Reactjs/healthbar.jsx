import { useState } from 'react';

function HealthBar() {
  // TODO: Initialize the health state to represent the player's health at the start of the game.
  // TODO: Create a div styled as a green bar to represent the current health. The width of the bar should match the health.
  const [health,setHealth] = useState(100);
   return (
    <div style={{ width: '200px', height: '25px', border: '2px solid #000', backgroundColor: '#ccc' }}>
      <div
        style={{
          width: `${health}%`,
          height: '100%',
          backgroundColor: 'green',
          transition: 'width 0.3s ease',
        }}
      ></div>
    </div>
  );
}

export default HealthBar;

