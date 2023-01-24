import React, {useEffect} from 'react';
import Footer from './Footer';
import { useState } from 'react';

const TYPING_SPEED = 150;
const DELETING_SPEED = 30;

const Main = () => {
  const words = ['Blockchain', 'Smart contarcts', 'hello'];
  const loopNum = 0;
  const fullText = words[loopNum];

  useEffect(() => {
    words.leng
  },[])
  setTimeout
  return (
    
    <div>
      <main  className='main-container'>
        <h2 className='main-container-text'>Web3 Solutions</h2>
        <h1 className='main-container-dynamic-text'>{fullText}</h1>
      </main>
      <footer className='footer-main'>
        <Footer/>
      </footer>
    </div>
  )
}

export default Main