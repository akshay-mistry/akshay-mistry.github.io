import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";




import Image from '../assets/img.png'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';




const Home = () => {


 const particlesInit = useCallback(async (engine) => {
   await loadFull(engine);
 }, []);




 const options = {
   particles: {
     number: {
       value: 20,
       density: {
         enable: true,
         area: 1000
       }
     },
     color: {
       value: ["#FFFFFF"]
     },
     shape: {
       type: "circle"
     },
     opacity: {
       value: 0.3
     },
     size: {
       value: { min: 1, max: 8 }
     },
     links: {
       enable: true,
       distance: 150,
       color: "#808080",
       opacity: 0.4,
       width: 1
     },
     move: {
       enable: true,
       speed: 5,
       direction: "none",
       random: false,
       straight: false,
       outModes: "out"
     }
   },
   interactivity: {
     events: {
       onHover: {
         enable: true,
         mode: "grab"
       },
       onClick: {
         enable: true,
         mode: "push"
       }
     },
     modes: {
       grab: {
         distance: 140,
         links: {
           opacity: 1
         }
       },
       push: {
         quantity: 3
       }
     }
   }
 };


 return (
  <section className='section min-h-[85vh] lg:min-h[78vh] flex items-center sm:px-4 overflow-x-hidden' id='home'>
  <div className="container mx-auto">
       <div className='particles-container'>
         <Particles options={options} init={particlesInit} />
       </div>
       <div className='flex flex-row gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        
         <div className='flex-1 text-center p-10 font-secondary lg:text-left'>
           <motion.h1
             variants={fadeIn('up', 0.4)}
             initial="hidden"
             whileInView={'show'}
             viewport={{once:false, amount: 0.7}}
             className='text-white text-[48px] font-bold leading-[0.8] lg:text-[56px]'>
             AKSHAY <span>MISTRY</span>
           </motion.h1>


           <motion.div
             variants={fadeIn('up', 0.4)}
             initial="hidden"
             whileInView={'show'}
             viewport={{once:false, amount: 0.7}}
             className='mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'>
             <span className='mr-4'>I am a</span>
             <TypeAnimation
               sequence={ [
                 'Student',
                 2000,
                 'Developer',
                 2000,
                 'Leader',
                 2000
               ]}
               speed={50}
               className='text-accent'
               wrapper='span'
               repeat={Infinity}
             />
           </motion.div>


           <motion.p
             variants={fadeIn('up', 0.4)}
             initial="hidden"
             whileInView={'show'}
             viewport={{once:false, amount: 0.7}}
             className='mb-8 max-w-screen-sm mx-auto lg:mx-0 sm:max-w-full'>
             Hey, I'm Akshay! I'm an undergraduate student at Georgia Tech studying CS and math, seeking new opportunities to learn and expand my abilities as a developer. I'm interested in full-stack development, machine learning, and data science, and I love to innovate and solve problems. Browse through my site to view my portfolio of work, including my research and some of my favorite personal projects!
           </motion.p>
          
           <div className='flex max-w-lg mb-12 mx-auto lg:mx-0'>
             <motion.button
               variants={fadeIn('up', 0.4)}
               initial="hidden"
               whileInView={'show'}
               viewport={{once:false, amount: 0.7}}
               className='btn1 btn-lg'>
               <a href="https://drive.google.com/file/d/1AwZ03kIYMqgSIV7p6-CRoCFmZF9McoaB/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</a>
             </motion.button>


             <motion.button
               variants={fadeIn('up', 0.4)}
               initial="hidden"
               whileInView={'show'}
               viewport={{once:false, amount: 0.7}}
               className='btn2 btn-lg'>
               <Link
                 to='contact'
                 className='cursor-pointer p-4'
                 activeClass='active'
                 smooth={true}
                 spy={true}
               >Contact</Link>
             </motion.button>
           </div>
          
           <motion.div
             variants={fadeIn('up', 0.4)}
             initial="hidden"
             whileInView={'show'}
             viewport={{once:false, amount: 0.7}}
             className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
             <a href="mailto:akshay.mistry@gmail.com" target="_blank" rel="noopener noreferrer">
               <AiOutlineMail size={44} />
             </a>
             <a href="https://linkedin.com/in/akshaymistry-" target="_blank" rel="noopener noreferrer">
               <AiOutlineLinkedin size={44} />
             </a>
             <a href="https://github.com/akshay-mistry" target="_blank" rel="noopener noreferrer">
               <AiOutlineGithub size={44} />
             </a>
           </motion.div>
        


         </div>
         <motion.div
           variants={fadeIn('up', 0.4)}
           initial="hidden"
           whileInView={'show'}
           viewport={{once:false, amount: 0.7}}
           className='hidden lg:flex flex-1 max-w-[300px] lg:max-w-[400px]'>
           <img src={Image} alt='' />
         </motion.div>
       </div>
     </div>
   </section>
 );
};


export default Home;

