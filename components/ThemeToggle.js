'use client';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  // Default is "False" (meaning NOT light mode, so Dark mode)
  const [isLightMode, setIsLightMode] = useState(false); 

  useEffect(() => {
    // Check if user previously saved 'light'
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      setIsLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    
    if (newMode) {
      // User clicked Sun to go Light
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      // User clicked Moon to go Dark (Default)
      document.body.classList.remove('light-mode');
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
      {/* If Light Mode: Show Moon. If Dark Mode: Show Sun. */}
      {isLightMode ? <FaMoon className="text-indigo-500" /> : <FaSun className="text-yellow-400" />}
    </button>
  );
}