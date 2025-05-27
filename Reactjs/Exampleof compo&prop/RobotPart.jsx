// TODO: Create the RobotPart Component having two props: name and material
import React from "react";

function RobotPart({name,material}){
    return <div>The robot has a {name} made of {material}.</div>;
}

export default RobotPart;