import React from 'react';

// The color definitions are based on the screenshot:
const VISION_COLOR = 'text-indigo-800'; 
const VISION_BG_COLOR = 'bg-indigo-800'; 
const MISSION_COLOR = 'text-pink-600'; 
const MISSION_BG_COLOR = 'bg-pink-600'; 

const VisionMissionSection = () => {
  // Data structure for the two cards
  const visionData = [
    "Inspire children to uncover their unique purpose.",
    "Create a world where early learning is joyful and mindful.",
    "Develop a learning environment rooted in the ikigai philosophy.",
    "Encourage emotionally intelligent and socially responsible individuals.",
  ];

  const missionData = [
    "Provide a safe, loving, and inclusive environment.",
    "Integrate play-based learning with thoughtful structure.",
    "Support holistic growth through purpose-driven activities.",
    "Partner closely with parents for collaborative development.",
  ];

  // Reusable Card Component
  const Card = ({ title, data, color, bgColor }) => (
    <div className="relative p-6 sm:p-8 bg-white-50 rounded-2xl shadow-xl overflow-hidden h-full transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_-5px_rgb(0_0_0/0.08),_0_4px_10px_-4px_rgb(0_0_0/0.05)]">
      
      {/* Dynamic Border/Ribbon Effect on the Left */}
      <div 
        className={`absolute top-0 left-0 bottom-0 w-2 ${bgColor} rounded-l-2xl`}
      ></div>
      
      {/* Header */}
      <div className={`flex items-center space-x-3 mb-6 pl-4 ${color} `}>
        {/* Icon (Using a simple clock for Vision and Target for Mission as placeholders) */}
        <svg 
          className="w-8 h-8" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {title === 'Our Vision' ? (
             // Clock icon (Vision)
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" 
              clipRule="evenodd" 
            />
          ) : (
            // Target/Bullseye icon (Mission)
            <path 
              fillRule="evenodd" 
              d="M9.047 3.328a1.5 1.5 0 011.906 0l1.791 1.075a1.5 1.5 0 001.442.062l1.967-1.124a1.5 1.5 0 012.043 1.492l-.125 2.21a1.5 1.5 0 00.573 1.343l1.834 1.258a1.5 1.5 0 010 2.478l-1.834 1.258a1.5 1.5 0 00-.573 1.343l.125 2.21a1.5 1.5 0 01-2.043 1.492l-1.967-1.124a1.5 1.5 0 00-1.442.062l-1.791 1.075a1.5 1.5 0 01-1.906 0l-1.791-1.075a1.5 1.5 0 00-1.442-.062l-1.967 1.124a1.5 1.5 0 01-2.043-1.492l.125-2.21a1.5 1.5 0 00-.573-1.343l-1.834-1.258a1.5 1.5 0 010-2.478l1.834-1.258a1.5 1.5 0 00.573-1.343l-.125-2.21a1.5 1.5 0 012.043-1.492l1.967 1.124a1.5 1.5 0 001.442-.062l1.791-1.075zM10 13a3 3 0 100-6 3 3 0 000 6z" 
              clipRule="evenodd" 
            />
          )}
        </svg>
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
      </div>

      {/* List Items */}
      <ul className="space-y-4 pl-4">
        {data.map((item, index) => (
          <li key={index} className="flex items-start text-gray-700">
            {/* Checkmark Icon */}
            <svg 
              className={`flex-shrink-0 w-5 h-5 mr-3 mt-1 ${color}`} 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
            <p className="leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    // Section container with padding and background
    <section className="pb-[100px]">
      <div className="section-container">
        
        {/* Grid for the two cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <Card
            title="Our Vision" 
            data={visionData} 
            color={VISION_COLOR} 
            bgColor={VISION_BG_COLOR} 
            
          />
          
          {/* Mission Card */}
          <Card 
          
            title="Our Mission" 
            data={missionData} 
            color={MISSION_COLOR} 
            bgColor={MISSION_BG_COLOR} 
          />
          
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;