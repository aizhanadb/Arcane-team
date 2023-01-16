import React, { useEffect } from 'react';
import Footer from './Footer';
import { useState } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';



const Main = () => {
  const word = "Smart Contarcts";
  const [words, setWords] = useState(word[0]);
  const index = React.useRef(0);

  
  useEffect(() => {
     function tick() {
      index.current++;
      setWords((prev) => prev + word[index.current])
     }
     if(index.current < word.length - 1) {
      let addChar = setInterval(tick(), 1000);
      return () => clearInterval(addChar)
     }
  }, [words, word])
  return (
    <div>
      <main  className='main-container'>
        <h2 className='main-container-text'>Web3 Solutions</h2>
        <h1 className='main-container-dynamic-text'>
        <TypeWriterEffect
        startDelay={1000}
        cursorColor="#3F3D56"
        multiText={[
          'Smart contarcts',
          'Blockcain',
          'Swap'
        ]}
        multiTextDelay={100}
        typeSpeed={200}
      />
          </h1>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Main