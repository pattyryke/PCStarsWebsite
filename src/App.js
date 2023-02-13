import './App.css'; 
import "./Stars.css";
import React, {useState, useEffect} from 'react';
import CreateStars from './Stars';
import HomePage from './HomePage';


export const fadeOut = (element) => {
  element.current.style.opacity = 1;
  
  setTimeout(() => {
    element.current.style.transition = "opacity 2s ease-out";
    element.current.style.opacity = 0;
  }, 500);
};


function App() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(CreateStars(150));
  }, []);

  return (
    <>
      {stars}
      <HomePage />
    </>
  );
};
//Make the stars go light speed when button is clicked.
//Label what the balls is going on
//Stupid... >:(

export default App;