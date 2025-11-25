import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Heart, Share2 } from "lucide-react";

// Data for the reels
const REELS_DATA = [
  {
    id: 1,
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1091262553049834%2F&show_text=false&width=267&t=0",
    title: "Trending Moment",
    views: "1.2M",
  },
  {
    id: 2,
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FIkigai121%2Fvideos%2F1023344259929492%2F&show_text=false&width=267&t=0",
    title: "Ikigai Vibes",
    views: "850K",
  },
  {
    id: 3,
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1409446550430096%2F&show_text=false&width=267&t=0",
    title: "Daily Inspiration",
    views: "2.4M",
  },
  {
    id: 4, // Added ID 4 for completeness
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1624544388257841%2F&show_text=false&width=267&t=0",
    title: "Weekend Mood",
    views: "3.1M",
  },
  {
    id: 5,
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F557372924020412%2F&show_text=false&width=267&t=0",
    title: "Quick Tips",
    views: "120K",
  },
  {
    id: 6,
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1624544388257841%2F&show_text=false&width=267&t=0",
    title: "Deep Dive",
    views: "500K",
  },
];

const ReelCard = ({ src, title, views }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative group flex-shrink-0 snap-center">
      {/* Card Container - Use a consistent, slightly increased width for mobile UX */}
      <div className="w-[280px] h-[500px] rounded-2xl overflow-hidden shadow-2xl relative ">
        {/* Skeleton Loader (visible while iframe loads) */}
        {isLoading && (
          <div className="absolute inset-0 animate-pulse flex flex-col items-center justify-center z-10">
            <Play className="w-12 h-12 text-gray-700 opacity-50" />
            <p className="mt-4 text-gray-500 text-sm font-medium">
              Loading {title}...
            </p>
          </div>
        )}

        {/* Iframe for Reel embedding */}
        <iframe
          // IMPORTANT: The iframe dimensions must match the container for best results
          src={src}
          width="280"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="yes"
          frameBorder="0"
          // Keep allowFullScreen and media permissions for the video content
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          title={title}
        ></iframe>

        {/* Overlay Gradient for contrast */}
        <div className="absolute inset-x-0 bottom-0 h-36  from-black/80 to-transparent pointer-events-none" />

        {/* Fake UI Elements for Aesthetic */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white pointer-events-none">
          <div>
            <p className="font-semibold text-lg drop-shadow-lg">{title}</p>
            <div className="flex items-center text-xs text-gray-300 drop-shadow-md mt-1">
              <Play className="w-3 h-3 mr-1" />
              {views}
            </div>
          </div>
          {/* Example engagement icons (non-functional) */}
          <div className="flex flex-col space-y-3 pointer-events-auto opacity-70 group-hover:opacity-100 transition-opacity">
            <Heart className="w-5 h-5 cursor-pointer hover:fill-red-500 hover:text-red-500" />
            <Share2 className="w-5 h-5 cursor-pointer hover:text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ReelsSection = () => {
  const scrollRef = useRef(null);
  // Set initial state based on assumption that we can scroll right
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  // Scroll function using card width + gap for smooth jumps
  const CARD_WIDTH = 280; // Card width in px
  const GAP = 24; // Tailwind gap-6 is 24px

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = CARD_WIDTH + GAP;
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      // Show left button if scrolled past the start
      setShowLeftBtn(scrollLeft > 5); // 5px buffer

      // Show right button if there is scrollable content remaining
      // Buffer of 10px handles floating point arithmetic in scrollWidth
      setShowRightBtn(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      // Initial check when component mounts
      checkScrollPosition();
      // Add event listener for real-time check when user scrolls
      ref.addEventListener("scroll", checkScrollPosition);
    }
    return () => {
      // Clean up the event listener
      if (ref) {
        ref.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="section-container">
      {/* Carousel Container */}
      <div className="relative group/carousel">
        {/* Left Button (Desktop/Tablet Only) */}
        {showLeftBtn && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-xl border border-gray-100 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-500 "
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Scrollable Area (Mobile/Desktop) - IMPORTANT: uses horizontal padding on the container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none px-4"
        >
          {REELS_DATA.map((reel) => (
            <ReelCard key={reel.id} {...reel} />
          ))}
        </div>

        {/* Right Button (Desktop/Tablet Only) */}
        {showRightBtn && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full
             shadow-xl border border-gray-100 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-500 "
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Mobile Indicator */}
        <p className="md:hidden text-center text-sm text-gray-500 mt-2">
          Swipe to see more reels.
        </p>
      </div>
    </div>
  );
};

// Main App Component to simulate the webpage
const Reel = () => {
  return (
    <>
      <div className="section-padding bg-white-50   items-center">
        {/* Hero Section Placeholder */}
        <div className="section-container">
          <div className="section-heading">
            <h2 className="">
              <span> Engage with Video Content</span>
            </h2>
            <p className="">
              Seamlessly integrate social media highlights directly into your
              website using a responsive, manual slider carousel.
            </p>
          </div>

          {/* The Perfected Reels Component */}
          <ReelsSection />

          <div className="text-center mt-10">
            <a
              href="#"
              className="btn-neumorphic border-animated inline-flex items-center color-dark-pink "
            >
              View More Reels
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reel;
