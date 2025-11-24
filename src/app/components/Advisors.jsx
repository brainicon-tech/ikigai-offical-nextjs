// components/TeamSection.jsx
'use client';

import React from 'react';
import Image from 'next/image';

// --- 1. Team Data ---
const teamMembers = [
  {
    name: "Mori Mariko",
    title: "Chief Advisor",
    image: "/images/Advisors/Mori Mariko.svg",
    education: "Masters in Food & Nutrition, B.Ed",
    profession: "Sr. Teacher & Coordinator, Gazipur Cant. Public School & College",
  },
  {
    name: "Alhamra Parvin",
    title: "Academic Advisor",
    image: "/images/Advisors/Alhamra Parvin.svg",
    education: "Masters in Education, Dhaka University",
    profession: "Curriculum Specialist & Trainer",
  },
  {
    name: "Dr. Sharmin Ali",
    title: "Medical Advisor",
    image: "/images/Advisors/Dr. Sharmin Ali.svg",
    education: "MBBS, FCPS (Pediatrics)",
    profession: "Consultant Pediatrician",
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
          unoptimized={isSvg}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          priority
        />

        {/* Hover Overlay (Same design — fixed bg color) */}
        <div
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
        </div>
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
        <div className="text-center mb-12">
          <h2 className='heading-blue'>
            <span>Our Advisors</span>
          </h2>
          <p className='para'>
            Guided by a passionate team dedicated to nurturing the potential in
            every child.
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
