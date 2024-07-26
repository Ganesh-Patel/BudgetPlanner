import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import './App.css'; // Import global styles

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      {/* Other components */}
    </div>
  );
}

export default App;