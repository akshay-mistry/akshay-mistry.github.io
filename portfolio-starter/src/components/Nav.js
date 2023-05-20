import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-accent'>Akshay Mistry</h1>
      <ul className='hidden md:flex'>
        <Link
          to='home' 
          className='cursor-pointer p-4'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          >Home</Link>
        <Link
          to='skills' 
          className='cursor-pointer p-4'
          activeClass='active'
          smooth={true}
          spy={true}
          >Skills</Link>
        <Link
          to='experience' 
          className='cursor-pointer p-4'
          activeClass='active'
          smooth={true}
          spy={true}
          >Experience</Link>
        <Link
          to='projects' 
          className='cursor-pointer p-4'
          activeClass='active'
          smooth={true}
          spy={true}
          >Projects</Link>
        <Link
          to='awards' 
          className='cursor-pointer p-4'
          activeClass='active'
          smooth={true}
          spy={true}
          >Awards</Link>
        <Link
          to='resume' 
          className='cursor-pointer p-4'
          activeClass='active'
          smooth={true}
          spy={true}
          >Resume</Link>
        <Link
          to='contact' 
          className='cursor-pointer p-4'
          activeClass='active'
          smooth={true}
          spy={true}
          >Contact</Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#1111111] m-4'>Akshay Mistry</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Skills</li>
          <li className='p-4 border-b border-gray-600'>Experience</li>
          <li className='p-4 border-b border-gray-600'>Projects</li>
          <li className='p-4 border-b border-gray-600'>Awards</li>
          <li className='p-4 border-b border-gray-600'>Resume</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
      </ul>
    </div>
  );
};

export default Nav;