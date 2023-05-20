import React, { useState } from 'react';

const ResumeItem = ({ title, location, position, date, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="resume-item">
      <div className="resume-item-header" onClick={handleToggleExpand}>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
      {expanded && (
        <div className="resume-item-details">
          <h4>{position}</h4>
          <h5>{location}</h5>
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Resume = () => {
  const resumeData = [
    {
      title: "Money Buddy, Hack South Brunswick",
      location: "South Brunswick, NJ",
      position: "Full-Stack Developer",
      date: "May 2022",
      description: [
        "Utilized React.js for the front-end with Python and Flask for the back-end to extract analytics from images of shopping receipts.",
        "Employed OpenCV and OCR libraries to gather data on the types of items purchased and the amounts spent in combination with the Pandas library to construct Matplotlib data visualizations.",
        "Optidmized budget planning efficiency by 80% to help save time in money management and develop wise spending habits."
      ]
    },
    {
      title: "Code Ninjas",
      location: "Kendall Park, NJ",
      position: "Game Design & Programming Instructor",
      date: "June 2021 - Nov 2021",
      description: [
        "Taught various game design elements (Scratch, JavaScript, Roblox, Unity) to young students exploring computer science.",
        "Targeted individual needs, provided feedback to parents, cooperated with colleagues, and created a positive environment."
      ]
    }
  ];

  return (
    <div className="resume" id="resume">
      {/* {resumeData.map((item, index) => (
        <ResumeItem
          key={index}
          title={item.title}
          location={item.location}
          position={item.position}
          date={item.date}
          description={item.description}
        />
      ))} */}
    </div>
  );
};

export default Resume;