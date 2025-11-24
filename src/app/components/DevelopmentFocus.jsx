// components/DevelopmentalFocus.js

import React from 'react';


// Define the data for the focus areas
const focusAreas = [
  { 
    name: 'Gross Motor', 
    icon: '🏃', // Replicating the running person icon
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  { 
    name: 'Fine Motor', 
    icon: '✂️', // Using a scissor/cross symbol emoji for fine motor skills
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  { 
    name: 'Cognitive', 
    icon: '🧠', // Replicating the brain icon
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  { 
    name: 'Speech', 
    icon: '💬', // Replicating the speech bubbles icon
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  { 
    name: 'Social', 
    icon: '💛', // Replicating the heart icon
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
];

const DevelopmentFocus = () => {
  return (
    <section className="section-padding ">
      <div className="section-container text-center">
        
        {/* --- Header Section --- */}
        <div className='mb-8'>
          <h2 className="heading-blue">
          Our Core Developmental Focus
        </h2>
        <p className="para max-w-4xl mx-auto">
          We are dedicated to nurturing every aspect of your child's growth. Our programs are specially designed to explore each child's inner potential with care.
        </p>
        </div>
        
        {/* --- Cards Container --- */}
        <div className="flex flex-wrap justify-center gap-2">
          {focusAreas.map((focus) => (
            <div
              key={focus.name}
              className="w-full max-w-[220px] p-2" 
            >
              <div
                className="bg-white-50 p-6 rounded-xl shadow-lg 
                           hover:shadow-2xl transition-shadow duration-300 
                           h-full flex flex-col justify-center items-center"
              >
              
                <div className={`text-4xl mb-4 p-3 rounded-full ${focus.bgColor}`}>
                    
                    <span className={focus.color}>
                      {focus.icon}
                    </span>
                </div>
                
                {/* Focus Name */}
                <h3 className=" font-semibold color-blue-h1">
                  {focus.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default DevelopmentFocus;