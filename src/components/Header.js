import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll'; // Import scroller from react-scroll
import logoImg from './logos/rolo.png';
import {HashLink as Link} from 'react-router-hash-link';



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

 


  return (

    <div className={`header-container sm:py-5 ${headerHidden ? 'hidden' : ''}`}>
      <div className='header-logo p-5 bg-primary flex justify-between px-5 py-1 '>
        <a href="/">
          <img src={logoImg} alt='Logo' style={{ width: '80px', height: '80px' }} className='sm:hidden'/>
        </a>

        <div className="header-right flex items-center space-x-5">
        <Link to='#about' smooth>
          About
        </Link>
        <Link className='sm:hidden' to='#skills' smooth>
          Skills
        </Link>
        <Link to='#projects' smooth>
          Projects
        </Link>
        <Link className='sm:hidden' to='#certifications' smooth>
          Certifications
        </Link>
        <Link to='#extracurricular' smooth>
          Extracurricular
        </Link>
        
        <Link to='#contact' smooth>
          Contact
        </Link>
        </div>
      </div>
    </div>

  );
}

export default Header;