import React from "react";
import "./Stars.css";

const findQuadrant = ({x, y}) => {
    if (x>=50 && y>=50) { return 4; }
    else if (y>=50)     { return 3; }
    else if (x>=50)     { return 2; }
    else                { return 1; }
}

//THIS IS THE STAR OBJECT AND IT'S PROPERTIES

export const Star = ({x, y, delay}) => {
    const starStyle = {
        backgroundColor: "#fff8a9",
        borderRadius: "50%",
        width: "2px",
        height: "2px",
        display: "inline-block",
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        quadrant: `${findQuadrant(x,y)}`,
    };

    return <div style={starStyle} className="twinkle-animation" />;
};



//CREATE X STARS AND AT RANDOM COORDS IN THE BACKGROUND

export const CreateStars = (amount) => {
    let stars = [];

    for (let i = 0; i < amount; i++) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        const delay = Math.random()*10;
        stars.push({ x, y, delay });
    }
    
    return (
        <div style={{backgroundColor: "#131316", padding: "20px"}}>
        {stars.map((star, index) => (
        <Star key={index} 
                x={star.x} 
                y={star.y} 
                delay={star.delay} 
        />))}
        </div>
    );
};

export default CreateStars;









