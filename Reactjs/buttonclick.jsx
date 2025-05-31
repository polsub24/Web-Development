import { useState } from 'react';

function TreasureCounter(){
    const [treasures,setTreasures] = useState(0);
    return(
        <button onClick={() => setTreasures(treasures+1)}>Treasure Count: {treasures}</button>
    )
}

export default TreasureCounter;