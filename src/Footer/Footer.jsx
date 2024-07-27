import React from 'react';
import style from './Footer.module.css';

function Footer() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.section}>
          <h3>Contact Us</h3>
          <p>Email: contact@textutils.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className={style.section}>
          <h3>Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className={style.section}>
          <h3>Follow Us</h3>
          <div className={style.socialIcons}>
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
