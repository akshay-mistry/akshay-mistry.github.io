import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import amazon from '../assets/amazon.png';
import bny from '../assets/bny.jpeg';
import gt from '../assets/tecg.png';
import at from '../assets/at.png';
import gset from '../assets/gset.jpeg';
import sb from '../assets/VIKING_LOGO.jpg';
import cn from '../assets/code-ninjas.webp';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const information = [
  {
    place: "Amazon",
    title: "Software Development Engineer Intern",
    location: "San Francisco, CA",
    date: "May 2024 - Aug 2024",
    description: [
      "Engineered core features for an ultra-low latency, fault-tolerant, intelligent Amazon Music search engine API built on Java+AWS.",
      "Developed a GenAI “Trending Now” search assistant using an end-to-end RAG Agent workflow, vector embedding, Redis caching, and Elasticsearch cataloging to guide 82+ million users to tailored music news and content based on high-velocity search queries.",
      "Engineered a production-level LLM-based code reviewer for 3.6+ million repositories in Amazon’s Code Browser, leveraging extensive coding guidelines and historical reviews to provide feedback using Amazon Bedrock, Lambda, and Notification Services.",
      "Reduced Lambda function invocation latency by 66% through the use of parallel programming in Java for concurrent task execution."
    ],
    icon: amazon,
    iconBg: "#FFFFFF"
  },
  {
    place: "Bank of New York Mellon",
    title: "Software Engineering Intern",
    location: "New York, NY",
    date: "June 2023 - Present",
    description: [
      "Developed deep learning risk management models to automate capacity planning algorithms for 200 stakeholders in the bank.",
      "Predicted 350 over/underutilized Oracle database nodes with 0.95 RMS error using data processing pipelines with Apache Spark.",
      "Constructed Pytorch LSTM recurrent neural networks for 90-day CPU forecasting & tuned hyperparameters to reduce error by 73%.",
      "Created a Flask+AngularJS web app for Plotly Dash interface, automating scripts to update time-series daily with SQLAlchemy."
    ],
    icon: bny,
    iconBg: "#FFFFFF"
  },
  {
    place: "Georgia Institute of Technology",
    title: "Bachelor of Science in Computer Science, Minor in Mathematics",
    location: "Atlanta, GA",
    date: "Aug 2022 - May 2026",
    description: [
      "GPA: 4.00/4.00, Faculty Honors",
      "Concentrations: Artificial Intelligence & Information Internetworks",
      "Courses: Automated Algorithm Design Project Team, Graduate Machine Learning, Graduate Computer Vision, Computer Networking, Algorithms, AI, Systems & Networks, Data Structures, Objects & Design, Database Systems, Combinatorics, Probability Theory, Statistics, Linear Algebra, Discrete Math",
      "Activities: Data Science Club Executive Board, Agency AI/ML Club, Web Dev Club, Startup Exchange, GT Qurbani Dance Team"
    ],
    icon: gt,
    iconBg: "#FFFFFF"
  },
  {
    place: "Accelerate Tutors",
    title: "Founder, President, & Lead Tutor",
    location: "South Brunswick, NJ",
    date: "June 2020 - Present",
    description: [
      "Founded and led a 501(c)(3) nonprofit organization providing instruction in math, science, English, CS, and test prep.",
      "Generated a cumulative yield of over 300 students for a total of over 1500 hours of tutoring.",
      "Developed infrastructure for Accelerate Tutors by designing the website and class booking services, analyzing data for system optimization, establishing a media presence, managing operations for over 30 employees, and tutoring over 50 students myself.",
      "Visit http://acceleratetutors.us for more information!"
    ],
    icon: at,
    iconBg: "#FFFFFF"
  },

  {
    place: "New Jersey Governor's School of Engineering and Technology at the Rutgers School of Engineering",
    title: "Artificial Intelligence Research Intern, New Jersey Governor's Scholar",
    location: "New Brunswick, NJ",
    date: "June 2021 - Feb 2022",
    description: [
      "Engaged in a selective research program and connected with industry professionals who delivered insightful keynotes.",
      "Studied Modern Physics, Micro and Nanofabrication, Game Design, Robotics; gained proficiency in Unity and Webot.",
      "Composed a formal research paper titled \"Effects of Presure on Acoustic Hand Biometric Authentication\" and presented it in a symposium setting.",
      "Earned recognition as a top 5 research paper at the MIT Undergraduate Research Technology Conference and was published in the IEEE Xplore Digital Library."
    ],
    icon: gset,
    iconBg: "#1d1836"
  },
  {
    place: "Code Ninjas",
    title: "Game Design & Programming Instructor",
    location: "Kendall Park, NJ",
    date: "June 2021 - Nov 2021",
    description: [
      "Taught various game design elements (Scratch, JavaScript, Roblox, Unity) to young students exploring computer science.",
      "Targeted individual needs, provided feedback to parents, cooperated with colleagues, and created a positive environment."
    ],
    icon: cn,
    iconBg: "#FFFFFF"
  },
  {
    place: "South Brunswick High School",
    title: "Valedictorian",
    location: "South Brunswick, NJ",
    date: "Sep 2018 - June 2022",
    description: [
      "GPA: 4.68/4.00",
      "Activities: Valedictorian, Varsity Boys Volleyball (Captain), Science Olympiad, Robotics, Junior State of America Club-Media & Marketing, Computer Science Club, Chemistry Olympics Club, Asian Cultural Club, National Honor Society, English Honor Society, Math Honor Society, Science Honor Society, Computer Science Honor Society, Marching Band"
    ],
    icon: sb,
    iconBg: "#FFFFFF"
  }
];

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleDescription = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <div className='section' id='experience'>
      <div className='flex justify-center flex-wrap max-w-screen-lg'>
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold">Experience</h2>
          <p className="text-2x1 text-gray-500  lg:block mt-4">Here is a timeline of my professional experience and education.</p>
        </div>
        <VerticalTimeline>
          {information.map((entry, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: '#1d1836', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #232631' }}
              date={entry.date}
              iconStyle={{ background: entry.iconBg, color: '#F9F9F9'}}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={entry.icon}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
            >
              
              <h3 className='text-white text-[24px]'>{entry.place}</h3>
              <h4 className='vertical-timeline-element-subtitle'>{entry.title}</h4>
              <h4 className='vertical-timeline-element-subtitle'>{entry.location}</h4>

              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {entry.description.map((item, descriptionIndex) => (
                  <li
                    key={`experience-point-${index}-${descriptionIndex}`}
                    className={`text-white-100 text-[14px] pl-1 tracking-wider ${
                      expandedItems.includes(index) ? 'visible' : 'hidden'
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <button
                className='text-white-100 text-5x1 tracking-wider mt-0 absolute right-4 bottom-4'
                onClick={() => toggleDescription(index)}
              >
                {expandedItems.includes(index) ? <AiOutlineMinusCircle size={40}></AiOutlineMinusCircle> : <AiOutlinePlusCircle size={40}></AiOutlinePlusCircle>}
              </button>
           
 </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default Experience;