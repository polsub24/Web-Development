import RobotPart from './RobotPart';

function App() {
  // TODO: Create the robot structure using the RobotPart component
  // Hint: The robot has a Head made of Steel, Arms made of Aluminum, and Legs made of Titanium
  return (
    <div>
    <RobotPart name="Head" material="Steel" />
    <RobotPart name="Arms" material="Aluminium" />
    <RobotPart name="Legs" material="Titanium" />
    </div>
  );
}

export default App;