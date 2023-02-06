import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Address.css';


const Address = () => {
  return (
    <div className='address-block'>
      
      <div className="address-block__addresses">
      <div className='address-block__address'>
        <IoLocationOutline className='address-block__location'/>
        <Link to='/'><span className='address-block__header'>Singapore</span></Link>
      <p className='address-block__paragraph'>531 Upper Cross Street, Hong Lim Complex</p>
        </div>
    
      <div className='address-block__address'>
          <IoLocationOutline className='address-block__location'/>
          <Link to='/'><span className='address-block__header'>Georgia, Tbilisi</span></Link>
      <p className='address-block__paragraph'>20 Anton Chekovi Street</p>
        </div>
      </div>
      <div className='address-block__line'></div>
      <footer className='address-block__footer'>
      <Link to='/'><AiOutlineClose className='address-block__close'/></Link>
      </footer>
    </div>
  )
}

export default Address