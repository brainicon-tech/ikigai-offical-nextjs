'use client';
import React from 'react';
import { BookOpen, Palette } from 'lucide-react'; 
import { Heart, Globe, MessageSquare } from 'lucide-react'; 
import Image from 'next/image';

const learningModelData = [
  {
    icon: Palette,
    iconColor: 'text-orange-500',
    title: 'Montessori Elements',
    description: 'We embrace the Montessori focus on child-led exploration, using hands-on materials that encourage independence, concentration, and a deep respect for the learning process.',
  },
  {
    icon: BookOpen,
    iconColor: 'text-sky-500',
    title: 'Cambridge Framework',
    description: 'We integrate the Cambridge system’s structured learning milestones, ensuring children develop strong foundational skills in literacy, numeracy, and global awareness, fully preparing them for primary school.',
  },
];

const ModelCard = ({ icon: Icon, iconColor, title, description }) => (
  // Attractive Card styling with box shadow, padding, and rounded corners
  <div className="bg-white-50 p-4 md:p-6 rounded-3xl t flex flex-col items-center text-center h-full transition hover:-translate-y-2 hover:shadow-custom-hover">
    <div className={`p-4 rounded-full bg-gray-50 mb-4 inline-flex items-center justify-center`}>
      {/* Dynamic Icon */}
      <Icon className={`w-8 h-8 ${iconColor}`} strokeWidth={1.5} />
    </div>
    
    <h3 className="text-xl font-bold tracking-tight mb-3 color-h1-blue">
      {title}
    </h3>
    
    <p className="text-sm md:text-md color-gray-dark ">
      {description}
    </p>
  </div>
);

const contextPoints = [
  {
    icon: Heart,
    color: 'text-red-500',
    label: 'Cultural Integration',
    description: 'We weave stories from our own poets, celebrate national holidays like Pohela Boishakh, and instill the values that are core to our Bangladeshi heritage.',
  },
  {
    icon: MessageSquare,
    color: 'text-purple-500',
    label: 'Bilingual Environment',
    description: 'Children are comfortably immersed in both Bangla and English, building fluency and confidence in both languages from an early age.',
  },
  {
    icon: Globe,
    color: 'text-green-500',
    label: 'Local Context',
    description: 'Lessons about nature, food, and community are grounded in our local context, using examples of familiar fruits, animals, and places to make learning more relevant and tangible.',
  },
];

const ContextListItem = ({ icon: Icon, color, label, description }) => (
  <div className="flex space-x-4 items-start">
    {/* Removed BookOpenCheck from imports since it wasn't used, and replaced with MessageSquare */}
    <div className={`flex-shrink-0 pt-1`}> 
      <Icon className={`w-5 h-5 ${color}`} />
    </div>
    <div>
      <h4 className="font-semibold color-blue-h1 flex items-center">
        {label}
      </h4>
      <p className="text-sm md:text-md color-gray-dark">{description}</p>
    </div>
  </div>
);


export default function CurriculumModel() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <header className="text-center mb-12">
          <h2 className="heading-blue">
            Our Unique Learning Model
          </h2>
          <p className="text-md color-gray-dark max-w-2xl mx-auto">
            We blend the world's best educational philosophies and adapt them with a Bangladeshi heart.
          </p>
        </header>

        {/* Two-part Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {learningModelData.map((item, index) => (
            <ModelCard key={index} {...item} />
          ))}
        </div>
        <div className='mt-24 bg-white-50 p-4 md:p-6 rounded-3xl shadow-xl  flex flex-col items-center text-center h-full transition hover:-translate-y-2 hover:shadow-custom-hover'>
          <div className="px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Text Content */}
          <div className="space-y-4 text-left">
            <h2 className="heading-blue">
              With a Bangladeshi Heart
            </h2>
            <p className="text-sm md:text-md color-gray-dark">
              A global curriculum is only effective when it resonates with a child's own culture and identity. We thoughtfully localize our blended model to create a learning environment that is both world-class and deeply familiar.
            </p>
            
            {/* Context Points List */}
            <div className="space-y-6 pt-4">
              {contextPoints.map((item, index) => (
                <ContextListItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-64 lg:h-full rounded-3xl shadow-2xl overflow-hidden">
  <Image
    src="/images/curriculum.jpg"
    alt="Children participating in local cultural learning activities"
    fill
    className="object-cover w-full h-full transition duration-500 hover:scale-[1.05]"
  />
</div>
        </div>
      </div>
      </div>
    </section>
  );
}