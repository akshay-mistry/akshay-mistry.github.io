import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Image from '../assets/github ghibili.jpeg'
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
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden' id='home'>
      {/* Particles Background */}
      <div className='absolute inset-0 z-0'>
        <Particles options={options} init={particlesInit} />
      </div>
      
      <div className='container mx-auto px-4 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          {/* Content */}
          <div className='flex-1 text-center lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount: 0.7}}
              className='mb-6 text-gradient'
            >
              AKSHAY <span className='text-white'>MISTRY</span>
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount: 0.7}}
              className='mb-8 text-2xl lg:text-3xl'
            >
              <span className='mr-4 text-white font-medium'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Student',
                  2000,
                  'Developer',
                  2000,
                  'Leader',
                  2000,
                  'Innovator',
                  2000
                ]}
                speed={50}
                className='text-gradient font-semibold'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount: 0.7}}
              className='mb-12 max-w-2xl mx-auto lg:mx-0'
            >
              Hey, I'm Akshay! I'm an undergraduate student at Georgia Tech studying CS and math, 
              seeking new opportunities to learn and expand my abilities as a developer. I'm interested 
              in full-stack development, machine learning, and data science, and I love to innovate and solve problems.
            </motion.p>
            
            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start'>
              <motion.a
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once:false, amount: 0.7}}
                href="https://drive.google.com/file/d/1AwZ03kIYMqgSIV7p6-CRoCFmZF9McoaB/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className='btn-modern'
              >
                View Resume
              </motion.a>

              <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once:false, amount: 0.7}}
              >
                <Link
                  to='contact'
                  className='btn-modern btn-outline'
                  smooth={true}
                  spy={true}
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
            
            {/* Social Links */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount: 0.7}}
              className='flex justify-center lg:justify-start gap-6'
            >
              <a 
                href="mailto:akshay.mistry@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className='p-3 glass rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg'
              >
                <AiOutlineMail size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/akshaymistry-" 
                target="_blank" 
                rel="noopener noreferrer"
                className='p-3 glass rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg'
              >
                <AiOutlineLinkedin size={24} />
              </a>
              <a 
                href="https://github.com/akshay-mistry" 
                target="_blank" 
                rel="noopener noreferrer"
                className='p-3 glass rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg'
              >
                <AiOutlineGithub size={24} />
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount: 0.7}}
            className='flex-1 max-w-md lg:max-w-lg flex items-center justify-center'
          >
            <div className='relative group'>
              <div className='absolute inset-0 bg-gradient-to-r from-white to-gray-300 rounded-full blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300'></div>
              <img 
                src={Image} 
                alt='Akshay Mistry' 
                className='relative w-128 h-128 rounded-full object-cover border-2 border-white border-opacity-30 shadow-2xl group-hover:scale-105 transition-transform duration-300'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
 );
};


export default Home;

