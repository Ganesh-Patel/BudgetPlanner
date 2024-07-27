import React from 'react';
import style from './Footer.module.css';

function Footer() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.section}>
          <h3>Contact Us</h3>
          <p>Email: contact@Goodbudget.com</p>
          <p>Phone: (123) 456-7890</p>
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
