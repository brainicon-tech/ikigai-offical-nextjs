import React from 'react';
import Image from 'next/image';

const BALL_PIT_IMAGE_PATH = '/images/about-us-cover.JPG';
const CHILDREN_ON_FLOOR_IMAGE_PATH = '/images/daycare.JPG';

const AboutUs = () => {
    return (
        <section className="section-padding bg-white">
            <div className="section-container">
                <div className='section-heading'>
                    <h2>
                        <span>Discover Our Ikigai</span>
                    </h2>
                    <p>More than a daycare, we are a place to grow, discover, and find joy in learning.</p>
                </div>
                
                {/* --- Top Section: About Ikigai Concept & Child Image --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    
                    {/* Left Column: Text Content */}
                    <div className="lg:pr-8">
                        <h2 className="heading-blue">
                            About Us
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            At Ikigai, we see childhood as a journey of joyful discovery. Our 
                            approach is inspired by the **Japanese concept of Ikigai** (
                            <span className="whitespace-nowrap">生き甲斐</span>) — a reason for 
                            being. We believe every child holds a unique spark, and our purpose 
                            is to nurture it.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            By blending play-based learning with emotional intelligence, we create a **safe, inclusive, and wondrous space** where little minds find what they love, discover what they're good at, and begin a lifelong adventure filled with purpose.
                        </p>
                    </div>
                    
                    {/* Right Column: Image of child in ball pit (CONSTRAINED HEIGHT FIX) */}
                    {/* We replaced lg:h-full with a constrained height for reliability */}
                    <div className="relative w-full h-80 sm:h-96 lg:h-[400px] overflow-hidden rounded-xl shadow-2xl">
                        <Image
                            src={BALL_PIT_IMAGE_PATH}
                            alt="Child in ball pit"
                            fill={true} 
                            className="object-cover  transition duration-300 hover:scale-[1.05]" 
                            placeholder="blur" 
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYGD4DwAEMgG/o8I4lAAAAABJRU5ErkJggg=="
                        />
                    </div>
                </div>
                
                {/* --- Bottom Section: Our Story & Group Image --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column: Image of children sitting on the floor (Correct fill method maintained) */}
                    <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-xl shadow-2xl lg:order-1">
                       <Image
                            src={CHILDREN_ON_FLOOR_IMAGE_PATH}
                            alt="Children sitting on the floor"
                            fill={true}
                            className="object-cover  transition duration-300 hover:scale-[1.05]" 
                            placeholder="blur" 
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYGD4DwAEMgG/o8I4lAAAAABJRU5ErkJggg=="
                        />
                    </div>
                    
                    {/* Right Column: Story Text */}
                    <div className="lg:pl-8 lg:order-2">
                        <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 mb-2">
                            Our Story
                        </p>
                        <h3 className="heading-blue">
                            Born from Passion <span className="text-pink-600">♥</span>
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Ikigai Day Care & Preschool, founded in February 2024, was born out of 
                            a passion to create a **joyful, nurturing, and developmentally rich 
                            environment** for children.
                        </p>
                        
                        <div className="border-l-4 border-pink-600 pl-4 py-1">
                            <p className="italic text-gray-700 font-medium">
                                Guided by the principles of purpose-driven learning, we combine 
                                international best practices with local values to **prepare children 
                                not just for school—but for life.**
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;