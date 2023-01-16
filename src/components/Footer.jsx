import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { RxEnvelopeClosed } from "react-icons/rx";
import { TbBrandTelegram } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-text-container'>
        <h2 className='footer-text'>Arcane Team</h2>
        <p className='footer-text2'>© Arcane team, 2023</p>
        </div>
        <div className="footer-icons-container">
            <Link className='link-to-address' to="/address">
            <IoLocationOutline className='location'/>
            </Link>
            <a href="mailto:hello@arcane.team"> <RxEnvelopeClosed className='envelope'/></a> 
            <a href="@ArcaneTeamRobot"> <TbBrandTelegram className='telegram'/></a> 
        </div>
    </div>
  )
}

export default Footer