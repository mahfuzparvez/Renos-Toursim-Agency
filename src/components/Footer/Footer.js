import React from 'react';
import './Footer.css';
import { BsFacebook, BsMessenger, BsTwitter, BsWhatsapp } from "react-icons/bs";
const Footer = () => {
    return (
        <div id="footer">
            <div>
                <img className='footerlogo' src="https://i.postimg.cc/ZYjn4gTx/icon1-removebg-preview-1.png" alt="" /><br />
                <small id='hiden'>©Touring with Renos. All rights reserved</small>
            </div>
            <div className='py-2'>
                <p>About</p>
                <p>Contact</p>
                <p>Career</p>
                <div id='icon'>
                    <p><BsFacebook /></p>
                    <p className='ms-4'><BsMessenger /></p>
                    <p className='ms-4'>< BsTwitter /></p>
                    <p className='ms-4'><BsWhatsapp /></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;