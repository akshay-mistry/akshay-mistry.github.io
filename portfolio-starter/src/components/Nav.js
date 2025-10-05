import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
      scrolled ? 'nav-modern' : 'bg-transparent'
    }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link
              to='home'
              className='text-2xl font-bold text-gradient cursor-pointer'
              smooth={true}
              spy={true}
            >
              Akshay Mistry
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <Link
                to='home'
                className='nav-link'
                activeClass='active'
                smooth={true}
                spy={true}
                offset={-100}
              >
                Home
              </Link>
              <Link
                to='experience'
                className='nav-link'
                activeClass='active'
                smooth={true}
                spy={true}
              >
                Experience
              </Link>
              <Link
                to='projects'
                className='nav-link'
                activeClass='active'
                smooth={true}
                spy={true}
              >
                Projects
              </Link>
              <Link
                to='contact'
                className='nav-link'
                activeClass='active'
                smooth={true}
                spy={true}
              >
                Contact
              </Link>
              <a
                href="https://drive.google.com/file/d/1AwZ03kIYMqgSIV7p6-CRoCFmZF9McoaB/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern btn-sm flex items-center"
              >
                Resume <AiOutlineLink size={16} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={handleNav}
              className='text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out'
            >
              {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        nav ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className='glass-strong mx-4 mt-2 rounded-2xl p-6'>
          <div className='space-y-1'>
            <Link
              to='home'
              className='block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-10 transition duration-150 ease-in-out'
              onClick={() => setNav(false)}
              smooth={true}
              spy={true}
            >
              Home
            </Link>
            <Link
              to='experience'
              className='block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-10 transition duration-150 ease-in-out'
              onClick={() => setNav(false)}
              smooth={true}
              spy={true}
            >
              Experience
            </Link>
            <Link
              to='projects'
              className='block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-10 transition duration-150 ease-in-out'
              onClick={() => setNav(false)}
              smooth={true}
              spy={true}
            >
              Projects
            </Link>
            <Link
              to='contact'
              className='block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-10 transition duration-150 ease-in-out'
              onClick={() => setNav(false)}
              smooth={true}
              spy={true}
            >
              Contact
            </Link>
            <a
              href="https://drive.google.com/file/d/1AwZ03kIYMqgSIV7p6-CRoCFmZF9McoaB/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-10 transition duration-150 ease-in-out"
              onClick={() => setNav(false)}
            >
              Resume <AiOutlineLink size={16} className="inline ml-2" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;