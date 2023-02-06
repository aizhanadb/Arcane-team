import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { RxEnvelopeClosed } from "react-icons/rx";
import { TbBrandTelegram } from "react-icons/tb";
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-block'>
        <div className='footer-block__text-container'>
        <h2 className='footer-block__text'>Arcane Team</h2>
        <p className='footer-block__text2'>© Arcane team, 2023</p>
        </div>
        <div className="footer-block__icons-container">
            <Link to="/address">
            <IoLocationOutline className='footer-block__location'/>
            </Link>
            <a href="mailto:hello@arcane.team"> <RxEnvelopeClosed className='footer-block__envelope'/></a> 
            <a target="_blank" href="https://t.me/ArcaneTeamRobot"> <TbBrandTelegram className='footer-block__telegram'/></a> 
        </div>
    </div>
  )
}

export default Footer;