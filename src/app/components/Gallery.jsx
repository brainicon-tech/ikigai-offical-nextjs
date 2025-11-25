"use client";

import React, { useState } from "react";
import Image from "next/image";

const gridImages = [
  // Block 1 (9 images)
  {
    src: "/images/article01.jpg",
    title: "Art & Craft Corner",
  },
  {
    src: "/images/article02.jpg",
    title: "Science Fun Time",
  },
  {
    src: "/images/article03.jpg",
    title: "Storytelling Session",
  },
  {
    src: "/images/article04.jpg",
    title: "Outdoor Play Adventure",
  },
  {
    src: "/images/article05.jpg",
    title: "Building Blocks",
  },
  {
    src: "/images/article01.jpg",
    title: "Music & Rhythm Class",
  },
  {
    src: "/images/article02.jpg",
    title: "Puzzle Challenge",
  },
  {
    src: "/images/article03.jpg",
    title: "Group Learning Time",
  },
  {
    src: "/images/article04.jpg",
    title: "Creative Painting",
  },

  // Block 2 (9 images)
  {
    src: "/images/article05.jpg",
    title: "Library Hour",
  },
  {
    src: "/images/article01.jpg",
    title: "Math Activity",
  },
  {
    src: "/images/article02.jpg",
    title: "Classroom Projects",
  },
  {
    src: "/images/article03.jpg",
    title: "Sports Day Moments",
  },
  {
    src: "/images/article04.jpg",
    title: "Teamwork Activities",
  },
  {
    src: "/images/article05.jpg",
    title: "Handwriting Practice",
  },
  {
    src: "/images/article01.jpg",
    title: "Clay Modeling",
  },
  {
    src: "/images/article02.jpg",
    title: "Indoor Games",
  },
  {
    src: "/images/article03.jpg",
    title: "Art Display Wall",
  },
];


const GridImage = ({ src, content, onClick }) => {
  return (
    <div
      className="group relative h-full w-full cursor-pointer overflow-hidden bg-gray-800"
      onClick={onClick}
    >
      <Image
        src={src}
        alt={content?.title || "Grid content"}
        fill
        unoptimized={true} 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) "
        className="object-cover max-w-full max-h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
        onError={(e) => {
          e.target.style.display = "none";
          console.error(`Failed to load image: ${src}`);
        }}
      />
      {/* Overlay for content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end items-center bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-lg mb-4 font-bold text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {content?.title}
        </h3>
      </div>
    </div>
  );
};

// --- Click-to-Expand Modal ---
const ImageModal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm transition-all duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="relative w-auto h-auto max-h-[50vh] max-w-[60vw] lg:max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt="Expanded view"
          width={1920}
          height={1080}
          className="object-contain rounded-lg w-auto h-auto max-h-[50vh] max-w-[60vw]"
        />
      </div>
    </div>
  );
};
// --- Reusable Grid Block Component ---
const ComplexImageGrid = ({ images, onImageClick, idPrefix }) => (
  <div
    className="grid flex-shrink-0 grid-cols-5 grid-rows-2 h-[250px] md:h-[400px]"
    style={{ width: "min(140vw, 1200px)" }}
    aria-label={`Image grid ${idPrefix}`}
  >
    {/* Col 1: One images */}
    <div className="col-span-1 row-span-2">
      <GridImage
        src={images[0].src}
        content={images[0]}
        onClick={() => onImageClick(images[0].src)}
      />
    </div>

    {/* Col 2: Two images */}
    <div className="col-span-1 row-span-1">
      <GridImage
        src={images[1].src}
        content={images[1]}
        onClick={() => onImageClick(images[1].src)}
      />
    </div>
    <div className="col-span-1 row-span-1">
      <GridImage
        src={images[2].src}
        content={images[2]}
        onClick={() => onImageClick(images[2].src)}
      />
    </div>

    {/* Col 3: One wide image on top, two on bottom */}
    <div className="col-span-2 row-span-1">
      <GridImage
        src={images[3].src}
        content={images[3]}
        onClick={() => onImageClick(images[3].src)}
      />
    </div>
    <div className="col-span-1 row-span-1">
      <GridImage
        src={images[4].src}
        content={images[4]}
        onClick={() => onImageClick(images[4].src)}
      />
    </div>
    <div className="col-span-1 row-span-1">
      <GridImage
        src={images[5].src}
        content={images[5]}
        onClick={() => onImageClick(images[5].src)}
      />
    </div>

    {/* Col 4: Two images */}
    <div className="col-span-1 row-span-1">
      <GridImage
        src={images[6].src}
        content={images[6]}
        onClick={() => onImageClick(images[6].src)}
      />
    </div>
    <div className="col-span-1 row-span-1">
      <GridImage
        src={images[7].src}
        content={images[7]}
        onClick={() => onImageClick(images[7].src)}
      />
    </div>

    {/* Col 5: Full height (1 image) - THIS IS THE MISSING PART */}
    <div className="col-span-1 row-span-2">
      <GridImage
        src={images[8].src}
        content={images[8]}
        onClick={() => onImageClick(images[8].src)}
      />
    </div>

    {/* Col 6: Full height (1 image) */}
    
  </div>
);

// --- Main Slider Component ---
const InfiniteImageGridSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const gridBlock1 = gridImages.slice(0, 9);
  const gridBlock2 = gridImages.slice(9, 18);

  return (
    <div className="w-full section-padding">
      <div  data-aos="fade-up" className="section-heading">
        <h2>
          <span>Kids Activity Gallery</span>
          <p className="font-semibold pt-2">
            Capturing joyful moments of learning, play, and creativity at Ikigai
            Daycare & Preschool.
          </p>
        </h2>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .animate-scroll {
            animation: scroll 60s linear infinite;
          }
        `}
      </style>

      <div
        className="w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        role="region"
        aria-label="Infinite scrolling image gallery"
      >
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          <ComplexImageGrid
            images={gridBlock1}
            onImageClick={handleImageClick}
            idPrefix="grid-1"
          />
          <ComplexImageGrid
            images={gridBlock2}
            onImageClick={handleImageClick}
            idPrefix="grid-2"
          />
          <ComplexImageGrid
            images={gridBlock1}
            onImageClick={handleImageClick}
            idPrefix="grid-3"
          />
          <ComplexImageGrid
            images={gridBlock2}
            onImageClick={handleImageClick}
            idPrefix="grid-4"
          />
        </div>
      </div>

      <ImageModal src={selectedImage} onClose={handleCloseModal} />

      <div className="section-container text-center mt-10"> 
        <a href="#" className="btn-neumorphic border-animated inline-flex items-center color-dark-pink">View More Moments</a>
      </div>
    </div>
  );
};

// --- Component (Default Export) ---
export default function Gallery() {
  return (
    <div  data-aos="fade-up" className="w-full  flex items-center justify-center font-sans overflow-x-hidden">
      <InfiniteImageGridSlider />
    </div>
  );
}
