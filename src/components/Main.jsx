import React, {useEffect} from 'react';
import Footer from './Footer';
import { useState } from 'react';
import Typer from './Typer';


const Main = () => {
  const words = [ 'Blockchain', 'Smart contarcts', 'Web3 Women'];
  // const [loopNum, setLoopNum] = useState(0);
  // const fullText = words[loopNum];

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     if(loopNum > words.length ) {
  //       setLoopNum(0)
  //     }else {
  //       setLoopNum(loopNum+1)
  //     }
  //   }, 2500);

  //   // if(loopNum > words.length ) {
  //   //   clearInterval(interval)
  //   // }
  // })
  
  return (
    
    <>
      <main  className='main-container'>
        <div className='text-wrapper'>
        <h2 className='main-container-text'>Web3 Solutions</h2>
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