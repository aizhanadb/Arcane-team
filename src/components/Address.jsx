import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Address = () => {
  return (
    <div className='address-container'>
      <div className="addresses">
      <div>
        <IoLocationOutline className='location-adresses '/>
        <span className='address-header'>Singapore</span>
        </div>
      <p className='address-paragraph'>531 Upper Cross Street, Hong Lim Complex</p>


      <div>
        <span>
          <IoLocationOutline className='location-adresses'/>
          <span className='address-header'>Georgia, Tbilisi</span>
          </span> 
        </div>

      <p className='address-paragraph'>20 Anton Chekovi Street</p>
      </div>
      <footer className='address-footer'>
      <Link to='/'><AiOutlineClose className='close'/></Link>
      </footer>
    </div>
  )
}

export default Address