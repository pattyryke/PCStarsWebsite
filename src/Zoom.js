import './App.css'; 
import "./Stars.css";
import React, {useState, useEffect} from 'react';
import {Star, CreateStars} from './Stars';


function Zoom() {
    const [stars, setStars] = useState('lightspeed');

    useEffect(() => {
      setStars(CreateStars(150));
    }, []);
    
  return (

    <div style={{backgroundColor: "#131316", padding: "20px"}}>
      {stars.map((star, index) => (
        <Star key={index} x={star.x} y={star.y} delay={star.delay} />
    ))}
    </div>
  );
};
//MAKE STARS THAT WIGGLE IN THE BLACK SKY

export default App;