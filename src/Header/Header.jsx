import React from 'react';
import style from './Header.module.css';
import { MyContext } from '../MyContext';
import { useContext } from 'react';


function Header() {
  const {isDarkMode, toggleTheme}=useContext(MyContext)
  return (
    <header className={style.header}>
        <div className={style.leftNav}>
      <div className={style.brand}>
        <h2 className={style.appName}>Goodbudget</h2>
      </div>
      <nav className={style.navbar}>
        <a href="#home" className={style.navLink}>Home</a>
        <a href="#about" className={style.navLink}>About</a>
        <a href="#contact" className={style.navLink}>Contact</a>
      </nav>
      </div>
      <div className={style.themeToggle}>
       
        <input
          type="checkbox"
          id="theme-toggle"
          className={style.checkbox}
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <label htmlFor="theme-toggle" className={style.checkboxLabel}>
          <span className={style.ball}></span>
          <i className={`fas fa-sun ${style.icon}`}></i>
          <i className={`fas fa-moon ${style.icon}`}></i>
        </label>
        <span className={style.themeText}>
          {isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
        </span>
      </div>
    </header>
  );
}

export default Header;
