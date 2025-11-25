// components/TeamSection.jsx
'use client';

import React from 'react';
import Image from 'next/image';

// --- 1. Team Data ---
const teamMembers = [
  {
      name: "Md. Jakaria Julfiquar",
      title: "CEO",
      image: "/images/Md. Jakaria Julfiquar.svg", // Placeholder image path
      education: "BBA, MBA",
      profession: "Former Head of Marketing, PRAN-RFL Group & CBO, Omni StrateG",
      specialization: "ECCD, Early Childhood & Ikigai Implication Specialist",
    },
    {
      name: "Elora Parvin",
      title: "Managing Director",
      image: "/images/Elora Parvin.svg", // Placeholder image path
      education: "Masters in Management, CA (CC)",
      profession: null, // No explicit profession listed; can be left null or removed
      specialization: "ECCD, Early Childhood & Ikigai Implication Specialist",
    },
    {
      name: "Dipa Rani Saha",
      title: "Director (Gulshan Branch)",
      image: "/images/Dipa Rani Saha.svg", // Placeholder image path
      education: "Master’s in Finance",
      profession: null,
      specialization: "ECCD specialist",
    },
    
    {
      name: "Shahinoor Zeenia",
      title: "Director, Operation",
      image: "/images/Shahinoor Zeenia.svg", // Placeholder image path
      education: "Masters in Arts",
      profession: null,
      specialization: "ECCD & Day Care Specialist",
    },
];

// --- 2. Team Card Component ---
const TeamCard = ({ member }) => {
  const isSvg = member.image.toLowerCase().endsWith(".svg");

  return (
    <div className="group bg-white-50 relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">

      {/* Image Container */}
      <div className="relative h-85 w-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          unoptimized={true} 
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          priority
        />

        {/* Hover Overlay (Same design — fixed bg color) */}
        {/* <div
          className="   
            absolute inset-0 
            flex flex-col justify-end 
            text-left 
            bg-blue-300/50 
            translate-y-full group-hover:translate-y-0 group-hover:rounded-2xl group-hover:m-2 group-hover:mt-4
            transition-transform duration-500 ease-in-out 
            px-4 py-6
            z-10
          "
        >
          <p className="text-base font-semibold mb-1">Education</p>
          <p className="text-sm mb-4">{member.education}</p>

          <p className="text-base font-semibold mb-1">Profession</p>
          <p className="text-sm">{member.profession}</p>
        </div> */}
      </div>

      {/* Text */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm">{member.title}</p>
      </div>
    </div>
  );
};

// --- 3. Main Component ---
const Advisors = () => {
  return (
    <section className="section-padding">
      <div className="section-container">

        {/* Section Heading */}
        <div className="secondary-heading">
          <h2 className=''>
            <span>Board of Directors</span>
          </h2>
          <p className=''>
            Providing strategic leadership to ensure every decision aligns with our core values.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Advisors;
