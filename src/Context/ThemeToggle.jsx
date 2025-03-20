import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // State to track whether the dark theme is enabled
  const [theme, setTheme] = useState('dark');

  // Toggle the theme and store it in localStorage
  const toggleTheme = () => {
    setTheme(!theme);
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to light theme
      setTheme("light");
    }
  }, []);
  // Check for saved theme preference in localStorage and set it on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Save the current theme to localStorage
  // useEffect(() => {
  //   if (theme) {
  //     localStorage.setItem('theme', 'dark');
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     localStorage.setItem('theme', 'light');
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="items-center">
      {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Responsive Theme Toggle</h1> */}
      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-800 w-1 mr-4 focus:outline-none"
      >
        {theme == "light" ? (
            <span className="text-yellow-500">🌙</span> // Sun icon
        ) : (
            <span className="text-yellow-500">☀️</span> // Moon icon
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
