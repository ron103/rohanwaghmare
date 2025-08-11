import React, { useState, useEffect } from 'react';
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
        <Link to='#intro' smooth>
          <img src={'/rolo.png'} alt='Logo' style={{ width: '80px', height: '80px' }} className='sm:hidden'/>
          </Link>

        <div className="header-right flex items-center space-x-5">
        <Link to='#about' className='header-right-btn' smooth>
          About
        </Link>
        <Link className='header-right-btn sm:hidden' to='#skills' smooth>
          Skills
        </Link>
        <Link to='#work' className='header-right-btn' smooth>
          Work
        </Link>
        <Link to='#projects' className='header-right-btn' smooth>
          Projects
        </Link>
        <Link className='header-right-btn sm:hidden ' to='#certifications'  smooth>
          Certifications
        </Link>
        <Link to='#extracurricular' className='header-right-btn' smooth>
          Extracurricular
        </Link>
        
        <Link to='#contact' className='header-right-btn' smooth>
          Contact
        </Link>
        </div>
      </div>
    </div>

  );
}

export default Header;