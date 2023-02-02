import React, {useEffect} from 'react';
import Footer from './Footer';
import { useState } from 'react';
import Typer from './Typer';


const Main = () => {
  const words = [ 'UX/UI', 'Apps', 'Smart contarcts', 'Dapps', 'Payment Systems' ];
  
  return (
    
    <>
      <main  className='main-container'>
        <div className='text-wrapper'>
        <h2 className='main-container-text'>We develop</h2>
          <Typer
          dataText={words}/>
        </div>
      </main>
      <footer className='footer-main'>
        <div className='line'></div>
        <Footer/>
      </footer>
    </>
  )
}

export default Main