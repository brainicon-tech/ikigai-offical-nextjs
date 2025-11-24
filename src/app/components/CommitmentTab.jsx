'use client';
import React, { useState } from 'react';
import { ChevronUp, ChevronDown, CheckCircle } from 'lucide-react'; 

// Data structure for the accordion items
const accordionData = [
  {
    title: 'Health & Hygiene Precautions',
    content: (
      <ul className="list-disc ml-6 space-y-2 text-gray-600">
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className='para'>Regular handwashing and daily sanitization of toys and surfaces.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className='para'>Strict policy for handling illness to minimize infection spread.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className='para'>Food safety checks and updated immunization records.</span>
        </li>
      </ul>
    ),
  },
  {
    title: 'Parent Communication & Involvement',
    content: (
       <ul className="list-disc ml-6 space-y-2 text-gray-600">
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className='para'>Daily reports on your child’s activities, meals, and behavior.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className='para'>Regular parent-teacher meetings to discuss progress.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className='para'>Open door policy for feedback and suggestions.</span>
        </li>
      </ul>
    ),
  },
  {
    title: 'Behavioral Guidance',
    content: (
      <ul className="list-disc ml-6 space-y-2 text-gray-600">
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className='para'>Positive reinforcement to encourage good behavior.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className='para'>Strict no-corporal-punishment policy.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className='para'>Teaching conflict resolution, problem-solving, and empathy.</span>
        </li>
      </ul>
    ),
  },
  {
    title: 'Admission & Enrollment',
    content: (
      <ul className="list-disc ml-6 space-y-2 text-gray-600">
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className='para'>Clear age requirements for different groups.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className='para'>Simple application process with all required information.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
          <span className='para'>Transparent fee structure and payment policies.</span>
        </li>
      </ul>
    ),
  },
];

const CommitmentTab= () => {
  // State to track the active index. 0 is active initially, matching the image.
  const [activeIndex, setActiveIndex] = useState(0); 

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-padding">
      <div className="section-container">
        
        {/* Main Header */}
        <h2 className="heading-blue text-center">
          Our Commitment to a Safe & Collaborative Environment
        </h2>
        
        {/* Accordion List */}
        <div className="max-w-5xl mx-auto bg-white-50 rounded-lg shadow-xl overflow-hidden divide-y divide-gray-200">
          {accordionData.map((item, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div key={index}>
                {/* Accordion Header/Button */}
                <button
                  className={`w-full text-left p-6 flex justify-between items-center transition-colors duration-300 ${
                    isOpen ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50 color-blue-h1'
                  }`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${index}`}
                >
                  <span className="text-lg font-semibold">{item.title}</span>
                  {/* Icon based on state */}
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 text-gray-500" />
                  )}
                </button>
                
                {/* Accordion Content */}
                <div
                  id={`accordion-content-${index}`}
                  role="region"
                  aria-labelledby={`accordion-header-${index}`}
                  // Uses standard CSS transition classes for a smooth slide effect
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'
                  }`}
                >
                  {/* Content wrapper ensures correct padding */}
                  <div className={`pt-4 ${isOpen ? 'border-t border-gray-100' : ''}`}>
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default CommitmentTab;