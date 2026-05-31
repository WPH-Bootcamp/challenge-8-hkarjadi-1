import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || savedTheme === null;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <button
      onClick={toggleDarkMode}
      className='absolute top-20 md:top-20 right-5 text-white bg-linear-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5'
    ></button>
  );
}
