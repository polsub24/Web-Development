// import the library needed for rendering the JSX element
import React from "react";
import {createRoot} from "react-dom/client";
const currentDate = new Date().toDateString(); // gets the current date as a string
const para = <p>{currentDate}</p>;
// TODO: Create a JSX element that represents a paragraph displaying the current date
const root = createRoot(document.getElementById("root"));
root.render(para);
// TODO: Render the welcome message with today's date in the 'root' element