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
    { icon: FaJava, name: 'Java' },
    { icon: FaPython, name: 'Python' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaHtml5, name: 'HTML' },
    { icon: FaCss3Alt, name: 'CSS' },
    { icon: SiLatex, name: 'LaTeX' },
    { icon: FaCode, name: 'MATLAB' },
    { icon: FaSwift, name: 'Swift' },
    { icon: SiC, name: 'C' },
    { icon: SiMysql, name: 'SQL' },
    { icon: FaAndroid, name: 'Android App Dev' },
    { icon: FaApple, name: 'iOS App Dev' },
    { icon: SiPandas, name: 'Pandas' },
    { icon: SiOpencv, name: 'OpenCV' },
    { icon: FaRaspberryPi, name: 'Raspberry Pi' },
    { icon: SiArduino, name: 'Arduino' },
    { icon: SiUnity, name: 'Unity Game Dev' },
    { icon: SiAutodesk, name: 'CAD' },
    { icon: FaGit, name: 'Git' },
    { icon: SiVisualstudiocode, name: 'VS Code' },
    { icon: SiJupyter, name: 'Jupyter Notebook' },
    { icon: SiEclipseide, name: 'Eclipse' },
    { icon: SiPycharm, name: 'PyCharm' },
    { icon: SiIntellijidea, name: 'Intellij' },
  ];

  return (
    <div className="section px-4 md:px-0" id="skills">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-gray-500 mb-6 text-lg text-center lg:w-3/4">
          Below are the programming languages, frameworks, and tools that I am proficient in.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 max-w-max mx-auto lg:mx-0 skills-container">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center w-1/7">
            {React.createElement(tech.icon, { size: 44, className: 'skill-icon' })}
            <span className="mt-2">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
