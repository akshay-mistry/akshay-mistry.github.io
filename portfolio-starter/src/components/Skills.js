import React from 'react';
import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaApple,
  FaSwift,
  FaCode,
  FaAndroid,
  FaRaspberryPi,
  FaGit,
  FaFileCode
} from 'react-icons/fa';
import {
  SiC,
  SiLatex,
  SiMatlab,
  SiSwift,
  SiCpp,
  SiMysql,
  SiPandas,
  SiOpencv,
  SiArduino,
  SiUnity,
  SiAutodesk,
  SiVisualstudiocode,
  SiJupyter,
  SiEclipseide,
  SiPycharm,
  SiIntellijidea
} from 'react-icons/si';
import { IoLogoMatlab } from 'react-icons/io5';
import mat from '../assets/matlab.png';

const Skills = () => {
  const technologies = [
    { icon: FaJava, name: 'Java', category: 'Programming' },
    { icon: FaPython, name: 'Python', category: 'Programming' },
    { icon: FaJs, name: 'JavaScript', category: 'Programming' },
    { icon: FaHtml5, name: 'HTML', category: 'Web' },
    { icon: FaCss3Alt, name: 'CSS', category: 'Web' },
    { icon: SiLatex, name: 'LaTeX', category: 'Documentation' },
    { icon: FaCode, name: 'MATLAB', category: 'Programming' },
    { icon: FaSwift, name: 'Swift', category: 'Mobile' },
    { icon: SiC, name: 'C', category: 'Programming' },
    { icon: SiMysql, name: 'SQL', category: 'Database' },
    { icon: FaAndroid, name: 'Android', category: 'Mobile' },
    { icon: FaApple, name: 'iOS', category: 'Mobile' },
    { icon: SiPandas, name: 'Pandas', category: 'Data Science' },
    { icon: SiOpencv, name: 'OpenCV', category: 'Computer Vision' },
    { icon: FaRaspberryPi, name: 'Raspberry Pi', category: 'Hardware' },
    { icon: SiArduino, name: 'Arduino', category: 'Hardware' },
    { icon: SiUnity, name: 'Unity', category: 'Game Dev' },
    { icon: SiAutodesk, name: 'CAD', category: 'Design' },
    { icon: FaGit, name: 'Git', category: 'Version Control' },
    { icon: SiVisualstudiocode, name: 'VS Code', category: 'IDE' },
    { icon: SiJupyter, name: 'Jupyter', category: 'Data Science' },
    { icon: SiEclipseide, name: 'Eclipse', category: 'IDE' },
    { icon: SiPycharm, name: 'PyCharm', category: 'IDE' },
    { icon: SiIntellijidea, name: 'IntelliJ', category: 'IDE' },
  ];

  const categories = [...new Set(technologies.map(tech => tech.category))];

  return (
    <div className="section-modern" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-gradient">Skills & Technologies</h2>
          <p className="max-w-3xl mx-auto">
            A comprehensive overview of the programming languages, frameworks, and tools 
            that I use to bring ideas to life.
          </p>
        </div>

        <div className="skills-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="skill-item group">
              <div className="skill-icon text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {React.createElement(tech.icon)}
              </div>
              <h3 className="text-white mb-1 font-medium">{tech.name}</h3>
              <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded-full font-medium">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-modern text-center">
            <div className="text-4xl font-bold text-gradient mb-2">24+</div>
            <div className="text-gray-300">Technologies Mastered</div>
          </div>
          <div className="card-modern text-center">
            <div className="text-4xl font-bold text-gradient mb-2">8+</div>
            <div className="text-gray-300">Categories Covered</div>
          </div>
          <div className="card-modern text-center">
            <div className="text-4xl font-bold text-gradient mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
