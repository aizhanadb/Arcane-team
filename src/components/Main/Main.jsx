import React, {useEffect} from 'react';
import { useState } from 'react';
import Typer from '../Typer/Typer';
import Footer from '../Footer/Footer';
import './Main.css';



const Main = () => {
  // const words = [ 'UX/UI', 'Apps', 'Smart contarcts', 'Dapps', 'Payment Systems' ];
  
  return (
    
    <>
      <main  className='main-block'> 
        <div className='main-block__text-wrapper'>
        <h2 className='main-block__text'>We develop</h2>
         <Typer/>
        </div>
      </main>
      <footer className='footer-main'>
        <div className='main-block-line'></div>
        <Footer/>
      </footer>
    </>
  )
}

export default Main