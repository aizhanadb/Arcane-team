import React from 'react'
import Footer from './Footer'

const Main = () => {
  return (
    <div>
      <main  className='main-container'>
        <h2 className='main-container-text'>Web3 Solutions</h2>
        <h1 className='main-container-dynamic-text'>Smart Contracts</h1>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Main