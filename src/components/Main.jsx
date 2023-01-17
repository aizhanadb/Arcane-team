import React, { useEffect } from 'react';
import Footer from './Footer';
import { useState } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';



const Main = () => {
  
  return (
    <div>
      <main  className='main-container'>
        <h2 className='main-container-text'>Web3 Solutions</h2>
        <h1 className='main-container-dynamic-text'>
        <TypeWriterEffect
         textStyle={{
          fontWeight: 500,
          // fontSize: '1.5em',
        }}
        startDelay={1000}
        cursorColor="#3F3D56"
        multiText={[
          'Blockcain',
          'Smart contarcts'
        ]}
        multiTextDelay={100}
        typeSpeed={200}
      />
          </h1>
      </main>
      <footer className='footer-main'>
        <Footer/>
      </footer>
    </div>
  )
}

export default Main