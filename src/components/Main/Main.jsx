import Typer from '../Typer/Typer';
import Footer from '../Footer/Footer';
import './Main.css';
import { useState } from 'react';


const Main = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };
  
  return ( 
    <>
      <main  className='main-block'> 
        <div className='main-block__text-wrapper'>
        <h2 className={`main-block__text ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>We develop</h2>
         <Typer/>
        </div>
      </main>
        <div className='main-block-line'></div>
      <footer className='main-block__footer-main'>
        <Footer/>
      </footer>
    </>
  )
}

export default Main