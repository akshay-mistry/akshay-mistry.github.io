import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-scroll';


const Nav = () => {
 const [nav, setNav] = useState(false);


 const handleNav = () => {
   setNav(!nav);
 };


 useEffect(() => {
   const handleResize = () => {
     if (window.innerWidth >= 768) {
       setNav(false);
     }
   };


   window.addEventListener('resize', handleResize);


   return () => {
     window.removeEventListener('resize', handleResize);
   };
 }, []);


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
       >
         Home
       </Link>
       <Link
         to='skills'
         className='cursor-pointer p-4'
         activeClass='active'
         smooth={true}
         spy={true}
       >
         Skills
       </Link>
       <Link
         to='experience'
         className='cursor-pointer p-4'
         activeClass='active'
         smooth={true}
         spy={true}
       >
         Experience
       </Link>
       <Link
         to='projects'
         className='cursor-pointer p-4'
         activeClass='active'
         smooth={true}
         spy={true}
       >
         Projects
       </Link>
  
       <Link
         to='contact'
         className='cursor-pointer p-4'
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
        className="flex items-center cursor-pointer p-4">
          Resume <AiOutlineLink size={18} className="ml-1" />
       </a>
     </ul>
     {window.innerWidth >= 768 && (
       <div onClick={handleNav} className='block md:hidden'>
         {nav ? <AiOutlineClose size={20}/> : null}
       </div>
     )}
     {window.innerWidth >= 768 && (
       <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
         <h1 className='w-full text-3xl font-bold text-[#1111111] m-4'>Akshay Mistry</h1>
         <li className='p-4 border-b border-gray-600'>
           <Link
             to='home'
             className='cursor-pointer p-4'
             activeClass='active'
             smooth={true}
             spy={true}
           >
             Home
           </Link>
         </li>
         <li className='p-4 border-b border-gray-600'>
           <Link
             to='skills'
             className='cursor-pointer p-4'
             activeClass='active'
             smooth={true}
             spy={true}
           >
             Skills
           </Link>
         </li>
         <li className='p-4 border-b border-gray-600'>
           <Link
             to='experience'
             className='cursor-pointer p-4'
             activeClass='active'
             smooth={true}
             spy={true}
           >
             Experience
           </Link>
         </li>
         <li className='p-4 border-b border-gray-600'>
           <Link
             to='projects'
             className='cursor-pointer p-4'
             activeClass='active'
             smooth={true}
             spy={true}
           >
             Projects
           </Link>
         </li>
         <li className='p-4 border-b border-gray-600'>
           <Link
             to='resume'
             className='cursor-pointer p-4'
             activeClass='active'
             smooth={true}
             spy={true}
           >
             Resume
           </Link>
         </li>
         <li className='p-4 border-b border-gray-600'>
           <Link
             to='contact'
             className='cursor-pointer p-4'
             activeClass='active'
             smooth={true}
             spy={true}
           >
             Contact
           </Link>
         </li>
       </ul>
     )}
   </div>
 );
};


export default Nav;
