'use client';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(false); // Default is now Dark (Black)

  useEffect(() => {
    // Check if user previously selected Light Mode
    const isLight = localStorage.getItem('theme') === 'light';
    if (isLight) {
      document.body.classList.add('dark-mode'); // Note: 'dark-mode' class now applies Light styles
      setIsLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    
    if (newMode) {
      // User wants Light Mode
      document.body.classList.add('dark-mode'); 
      localStorage.setItem('theme', 'light');
    } else {
      // User wants Dark/Black Mode
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button 
      onClick={toggleTheme} 
      id="theme-toggle"
      aria-label="Toggle Theme"
      style={{ cursor: 'pointer' }} 
    >
      {/* If isLightMode (White bg), show Moon. If Dark/Black bg, show Sun. */}
      {isLightMode ? <FaMoon className="text-indigo-500" /> : <FaSun className="text-yellow-400" />}
    </button>
  );
}