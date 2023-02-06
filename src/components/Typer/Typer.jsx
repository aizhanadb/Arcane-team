import React from 'react';
import './Typer.css';
import Typewriter from 'typewriter-effect';

const Typer = () => {
  return (
      <h1 className='dynamic-text'>
        <Typewriter
        options={{
        strings: ['UX/UI', 'Apps', 'Smart contarcts', 'Dapps', 'Payment Systems'],
        autoStart: true,
        loop: true,
  }}
/>
      </h1>
  )
}

export default Typer