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
  <section className='section px-4 md:px-0' id='home'>
    <div className='flex justify-center flex-wrap max-w-screen-lg'>
      <div className='particles-container'>
        <Particles options={options} init={particlesInit} />
      </div>
      <div className='text-center mb-6 max-w-lg w-full'>
        <div className='flex-1 text-center mb-6 font-secondary lg:text-left'>
          <motion.h1
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='text-white text-[48px] font-bold leading-[0.8] lg:text-[56px]'>
            AKSHAY <span>MISTRY</span>
          </motion.h1>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='mr-4'>I am a</span>
            <TypeAnimation
              sequence={[
                'Student',
                2000,
                'Developer',
                2000,
                'Leader',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0 text-[14px] lg:text-[18px]'>
            Hey, I'm Akshay! I'm an undergraduate student at Georgia Tech studying CS and math, seeking new opportunities to learn and expand my abilities as a developer. I'm interested in full-stack development, machine learning, and data science, and I love to innovate and solve problems. Browse through my site to view my portfolio of work, including my research and some of my favorite personal projects!
          </motion.p>

          <div className='flex max-w-lg mb-12 mx-auto lg:mx-0'>
            <motion.button
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='btn1 btn-lg'>
              <a href='https://drive.google.com/file/d/1Awgg1x8RSmZjgxEACvRfl3h22kW7H7Rm/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                <AiOutlineLink className='mr-2' />
                Resume
              </a>
            </motion.button>
            <motion.button
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='btn2 btn-lg'>
              <Link to='projects' smooth={true} duration={1000}>
                My Work
              </Link>
            </motion.button>
          </div>

          <div className='flex justify-center max-w-xs mx-auto'>
            <motion.a
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              href='mailto:example@example.com'
              className='social-icon mr-3'>
              <AiOutlineMail />
            </motion.a>
            <motion.a
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon mr-3'>
              <AiOutlineLinkedin />
            </motion.a>
            <motion.a
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'>
              <AiOutlineGithub />
            </motion.a>
          </div>
        </div>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
          className='hidden lg:flex flex-1 max-w-[300px] lg:max-w-[400px]'>
          <img src={Image} alt='' />
        </motion.div>
      </div>
    </div>
  </section>
);
};

export default Home;