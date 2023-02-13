import './App.css'; 
import "./Stars.css";
import React, {useRef} from 'react';
import {fadeOut} from './App';





export function HomePage() {
    const fadeOutRef = useRef(null);

    const HomePageTitle = () => { return <h1>PatrickCapovilla.com</h1> };
    const HomePageStartStr = () => { return <dir className='container'>Would you like to begin?</dir> };
    const HomePageStartButton = () => { return <button className="button1" onClick={() => fadeOut(fadeOutRef)}>Let's Begin</button>};
    
  return (
    <>
    <div className='homepage' ref={fadeOutRef}>
      <HomePageTitle />
      <HomePageStartStr />
      <HomePageStartButton />
    </div></>
  );
}

export default HomePage;