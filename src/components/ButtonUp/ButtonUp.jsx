import { Up } from './ButtonUp.styled';
import React, { useState, useEffect } from 'react';

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const threshold = 200; // Мінімальна відстань від верху сторінки, при якій кнопка стає видимою

    setIsVisible(scrollTop > threshold);
  };
  return (
    <Up
      to="home"
      smooth={true}
      duration={500}
      style={{ display: isVisible ? 'inline-flex' : 'none' }}
    >
      <p>🔝</p>
    </Up>
  );
};

export default ButtonUp;
