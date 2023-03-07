import React, { useState } from 'react';
import './Typer.css';
import Typewriter from 'typewriter-effect';

const Typer = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };
  
  return (
      <h1 className={`dynamic-text ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
        <Typewriter
        options={{
        strings: ['UX/UI', 'Apps', 'Smart contracts', 'Dapps', 'Payment Systems'],
        autoStart: true,
        loop: true,
  }}
/>
      </h1>
  )
}

export default Typer