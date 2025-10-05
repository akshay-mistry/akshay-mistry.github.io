import React from 'react';
import Tilt from 'react-parallax-tilt';
import AI from '../assets/AI.png';
import map from '../assets/original.png';
import digit from '../assets/digit.png';
import math from '../assets/math.jpeg';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';

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
    <div className='section-modern' id='projects'>
      <div className='container mx-auto px-4'>
        <div className="text-center mb-16">
          <h2 className="mb-6 text-gradient">Featured Projects</h2>
          <p className="max-w-3xl mx-auto mb-8">
    
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/akshay-mistry" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-modern btn-sm"
            >
              <AiOutlineGithub size={20} className="mr-2" />
              GitHub Profile
            </a>
            <a 
              href="https://devpost.com/akshaymistry" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-modern btn-outline btn-sm"
            >
              <AiOutlineLink size={20} className="mr-2" />
              Devpost Profile
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {information.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => window.open(project.project_link, '_blank')}
                    className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 glass p-4 rounded-full"
                  >
                    <AiOutlineLink size={32} className="text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white mb-4 group-hover:text-gradient transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={`${project.name}-${tag.name}-${tagIndex}`}
                      className="px-3 py-1 bg-gradient-to-r from-gray-200 to-white text-black text-sm font-medium rounded-full"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => window.open(project.project_link, '_blank')}
                  className="w-full btn-modern"
                >
                  View Project
                  <AiOutlineLink size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects; 