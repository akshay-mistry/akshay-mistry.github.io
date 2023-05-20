import React from 'react';
import Tilt from 'react-parallax-tilt';
import AI from '../assets/AI.png';
import map from '../assets/original.png';
import digit from '../assets/digit.png';
import math from '../assets/math.jpeg';
import { AiOutlineLink } from 'react-icons/ai';

const information = [
  { 
    name: "\"Effects of Pressure on Acoustic Hand Biometric Authentication\" - Top 5 MIT URTC Research Paper",
    description: "Collaborated with researchers and professors to prototype a novel grip-based authentication method employing acoustics. Applied machine learning models to distinguish between different hands holding a mobile device with 82% accuracy. Employed Python scripts and MATLAB Classification Learner to train and test neural networks and support vector machines. Classified users from features contained in 200 distorted chirp audio files for each hand holding the phone. Manipulated training and testing sets to explore how changing hand grip strength affects the accuracy of the existing models. Presented research in a symposium and placed in the top 5 at the 2021 MIT Undergraduate Research Technology Conference. Published research in the Institute of Electrical and Electronics Engineers (IEEE) Xplore digital library.",
    tags: [
      {
        name: "Python"
      },
      {
        name: "MATLAB"
      },
      {
        name: "Machine Learning"
      }
    ],
    image: AI,
    project_link: "https://ieeexplore.ieee.org/document/9701647",
    size: 920
  },

  { 
    name: "MapFit - \"Most Advanced Method\” Winner at NHacks VI",
    description: "Engineered an Android application to help users meet new people while staying active and tracking their workouts. Employed the Google Maps SDK and Google Play Fused Location Provider API to update users’ locations in real time. Operated the Firebase Realtime Database to enable users to see others engaged in different activities through icons. Composed an automated email to join the workout upon clicking an icon, encouraging users to develop healthier lifestyles.",
    tags: [
      {
        name: "Java"
      },
      {
        name: "Firebase"
      },
      {
        name: "Google API Library"
      }
    ],
    image: map,
    project_link: "https://devpost.com/software/mapfit-qdonyr",
    size: 920
  
  },

  { 
    name: "Digit Doorbell - Hack Junior Achievement",
    description: "Designed a Raspberry Pi-based intelligent video doorbell that applies facial recognition to secure homes and businesses. Implemented OpenCV libraries to classify individuals from a dataset of facial images using supervised machine learning. Deployed the Mailgun API to send the user an automated email with the name and image of the person at the door.",
    tags: [
      {
        name: "Raspberry Pi",
      },
      {
        name: "Python"
      },
      {
        name: "OpenCV"
      },
      {
        name: "Mailgun"
      }
    ],
    image: digit,
    project_link: "https://devpost.com/software/digit-blck5e",
    size: 500
  
  },
  { 
    name: "Upper-Level Mathematics - Independent Research",
    description: "Completed independent research on various upper-level mathematics topics over a span of three years. Enhanced understanding of multivariable calculus, linear algebra, differential equations, complex analysis, and real numerical analysis through a proof-based approach. Composed comprehensive notes documents through LaTeX typesetting, wrote original test documents and completed the questions, and reviewed my work to ensure retention of new material.",
    tags: [
      {
        name: "LaTeX",
      },
      {
        name: "MCLA"
      },
      {
        name: "DECA"
      },
      {
        name: "Analysis"
      }
    ],
    image: math,
    project_link: "https://drive.google.com/drive/folders/1EOmJeSLCRYQ5iUx1Uu6IPGmpFTw2rxHA?usp=share_link",
    size: 500
  },
]


const Projects = () => {
  return (
    <div className='section px-4 md:px-0' id='projects'>
      <div className='flex justify-center flex-wrap max-w-screen-lg'>
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="text-2x1 text-gray-500  lg:block mt-4">Check out some of my favorite projects! Visit my Github and Devpost profiles for more!</p>
          <p className="text-2x1 text-gray-500  lg:block mt-4 underline">
          <a href="https://github.com/akshay-mistry" target="_blank" rel="noopener noreferrer">
          https://github.com/akshay-mistry
              </a>
              </p>
          <p className="text-2x1 text-gray-500  lg:block mt-4 underline">
          <a href="https://devpost.com/akshaymistry" target="_blank" rel="noopener noreferrer">
          https://devpost.com/akshaymistry
              </a>
              </p>
        </div>
        {information.map((project, index) => (
          <div key={index} className='m-2'>
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 500,
              }}
              className='tile p-5 rounded-2xl sm:w-[450px] w-full ]' // Added fixed height
            >
              <div className='relative w-full h-[320px]'>
                <img
                  onClick={() => window.open(project.project_link, '_blank')}
                  src={project.image}
                  alt='project_image'
                  className='w-full h-full object-contain rounded-2xl'
                />

                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                  <div
                    onClick={() => window.open(project.project_link, '_blank')}
                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                  >
                    <div className='tile rounded-full'>
                      <AiOutlineLink size={70} color='gray-400' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>
                  {project.name}
                </h3>
                <p className='mt-2 text-white text-[14px]'>
                  {project.description}
                </p>
              </div>

              <div className='mt-4 flex flex-wrap gap-2'>
                {project.tags.map((tag) => (
                  <p
                    key={`${project.name}-${tag.name}`}
                    className='text-[14px] text-white font-bold bg-gray-600 rounded-full px-2 py-1'
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 