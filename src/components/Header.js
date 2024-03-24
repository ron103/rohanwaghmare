import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // You might not need this for internal links anymore
import { scroller } from 'react-scroll'; // Import scroller from react-scroll
import logoImg from './logos/rolo.png';

function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerHidden, setHeaderHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  // Function to handle the smooth scroll
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className={`header-container ${headerHidden ? 'hidden' : ''}`}>
      <div className='header-logo p-5 bg-primary flex justify-between px-5 py-1'>
        <a href="/">
          <img src={logoImg} alt='Logo' style={{ width: '80px', height: '80px' }} />
        </a>

        <div className="header-right flex items-center space-x-5">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="t1">About</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="t1">Projects</a>
          <a href="#extracurricular" onClick={(e) => { e.preventDefault(); scrollToSection('extracurricular'); }} className="t1">Extracurricular</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="t1">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;