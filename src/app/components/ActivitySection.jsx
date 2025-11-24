import Image from 'next/image';

// Data for the activity cards, now included directly in the component file
const activities = [
    {
      "id": 1,
      "title": "Montessori Playgroups",
      "description": "Engage your child in guided play that fosters independence, creativity, and a love for learning in a prepared environment.",
      "imageUrl": "/images/IMG_7334.JPG",
      "altText": "Children playing with Montessori materials",
      "link": "#",
      "rating": 4.8,
      "reviewCount": 950,
      "location": "Dhaka, Banani",
      "timeSlots": ["3:00 PM", "5:00 PM", "7:00 PM", "9:00 PM"]
    },
    {
      "id": 2,
      "title": "Outdoor Exploration",
      "description": "Adventure awaits! Our outdoor programs encourage discovery, physical development, and connection with nature through fun activities.",
      "imageUrl": "/images/IMG_7853.JPG",
      "altText": "Kids playing in a lush outdoor setting",
      "link": "#",
      "rating": 4.9,
      "reviewCount": 1200,
      "location": "Dhaka, Gulshan",
      "timeSlots": ["4:00 PM", "6:00 PM", "8:00 PM"]
    },
    {
      "id": 3,
      "title": "Creative Arts & Crafts",
      "description": "Unleash imagination with painting, sculpting, and crafting. Develop fine motor skills and artistic expression in a vibrant studio.",
      "imageUrl": "/images/IMG_8523.JPG",
      "altText": "Child painting with bright colors",
      "link": "#",
      "rating": 4.7,
      "reviewCount": 750,
      "location": "Dhaka, Uttara",
      "timeSlots": ["3:30 PM", "5:30 PM", "7:30 PM", "9:30 PM"]
    },
    {
      "id": 4,
      "title": "Storytelling & Drama",
      "description": "Dive into magical worlds! Our sessions enhance language skills, confidence, and empathy through engaging stories and theatrical play.",
      "imageUrl": "/images/IMG_9137.JPG",
      "altText": "Children gathered around an adult reading a story",
      "link": "#",
      "rating": 4.6,
      "reviewCount": 580,
      "location": "Dhaka, Mirpur",
      "timeSlots": ["4:00 PM", "6:00 PM", "8:00 PM"]
    },
    {
      "id": 5,
      "title": "Science Explorers",
      "description": "Spark curiosity and creativity! Hands-on experiments and interactive activities help students understand scientific concepts while having fun.",
      "imageUrl": "/images/play.JPG",
      "altText": "Children conducting a fun science experiment",
      "link": "#",
      "rating": 4.9,
      "reviewCount": 1500,
      "location": "Dhaka, Mohakhali",
      "timeSlots": ["3:00 PM", "5:00 PM", "7:00 PM"]
    },
    {
      "id": 6,
      "title": "Art & Craft Workshop",
      "description": "Unleash imagination! Our art sessions develop creativity, fine motor skills, and self-expression through painting, crafting, and design projects.",
      "imageUrl": "/images/preplay.JPG",
      "altText": "Children painting and crafting together",
      "link": "#",
      "rating": 4.7,
      "reviewCount": 820,
      "location": "Dhaka, Old Town",
      "timeSlots": ["4:30 PM", "6:30 PM", "8:30 PM"]
    }
];

// Helper function to render stars based on rating
const renderStars = (rating) => {
    // Generates a string of full stars (max 5)
    const fullStars = '★'.repeat(Math.round(rating));
    // Generates a string of empty stars
    const emptyStars = '★'.repeat(5 - Math.round(rating));
    
    return (
        <>
            <span className="text-yellow-400">{fullStars}</span>
            <span className="text-gray-300">{emptyStars}</span>
        </>
    );
};


export default function ActivitySection() {
  return (
    <section className="section-padding "> 
      <div className="section-container">
        
        <div className="section-heading ">
          <h2 className="">
            <span>Discover Our Engaging Activities</span>
          </h2>
          <p className="">
            Inspiring activities that foster collaboration, skill-building, and a love for learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white-50 group rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={activity.imageUrl}
                  alt={activity.altText}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-3xl transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                
                <h3 className="text-2xl font-bold color-h1-blue mb-2 leading-snug">
                  {activity.title}
                </h3>
                
                {/* DYNAMIC RATING & LOCATION */}
                <div className="text-sm color-gray-dark mb-4 flex items-center">
                    {renderStars(activity.rating)}
                    <span className="ml-2 text-xs">({(activity.reviewCount / 1000).toFixed(1)}K)</span>
                    <span className="ml-4 text-sm font-semibold color-gray-dark">| {activity.location}</span>
                </div>

                {/* Description */}
                <p className="para mb-6  flex-grow">
                  {activity.description}
                </p>

                {/* DYNAMIC TIME SLOTS */}
                <div className="mt-2 mb-6">
                    <p className="text-sm font-semibold color-h1-blue mb-2">Available Sessions:</p>
                    <div className="flex flex-wrap gap-2">
                        {activity.timeSlots.map((time) => (
                            <button
                                key={time}
                                // Example: Highlighting the 3rd time slot (index 2) as selected
                                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors duration-150 
                                            ${time === activity.timeSlots[2] ? 'bg-dark-pink text-color-white  shadow-sm' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Booking Button */}
                <a
                  href={activity.link}
                  className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent font-bold rounded-xl shadow-md text-color-white bg-dark-pink"
                >
                  Book Session
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}