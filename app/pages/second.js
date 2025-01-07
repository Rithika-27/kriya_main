"use client";

import { useState } from "react";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(0); // State to track the current page
  

  // Pages of cards
  const pages = [
    [
      { image: "/images/image1.jpeg", title: "Spatial AI in Mobile Robotics", number: "W1" },
      { image: "/images/image2.jpeg", title: "Blockchain Era", number: "W2" },
      { image: "/images/image3.jpeg", title: "AI Revolution", number: "W3" },
    ],
    [
      { image: "/images/image4.jpeg", title: "Cybersecurity", number: "W4" },
      { image: "/images/image5.jpg", title: "Quantum Computing", number: "W5" },
      { image: "/images/images6.avif", title: "Data Science", number: "W6" },
    ],
    [
      { image: "/path-to-image-7.jpg", title: "IoT Revolution", number: "W7" },
      { image: "/path-to-image-8.jpg", title: "Green Technology", number: "W8" },
      { image: "/path-to-image-9.jpg", title: "Space Tech", number: "W9" },
    ],
  ];

  // Handle navigation
  const handleNextPage = (e) => {
    e.stopPropagation(); // Prevent background click
    if (currentPage < pages.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1); // Move to the next page
    }
  };

  const handlePreviousPage = (e) => {
    e.stopPropagation(); // Prevent background click
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1); // Move to the previous page
    }
  };
  const handleCardFlip = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index]; // Toggle the flipped state of the clicked card
    setFlippedCards(newFlippedCards);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      {/* KRIYA 2025 WORKSHOPS in the top-right corner */}
      <h1 className="absolute top-4 right-4 text-center text-xl font-bold">
        KRIYA 2025 <br />
        <span className="text-3xl font-bold">WORKSHOPS</span>
      </h1>

      <div className="relative flex justify-center items-center gap-12">
  {pages[currentPage].map((card, index) => (
    <div
      key={index}
      className={`relative w-[300px] h-[400px] bg-white text-black p-4 rounded-lg shadow-lg transition-transform duration-300 flex flex-col items-center ${index === 0 ? 'translate-y-[-25px]' : ''} ${index === 2 ? 'translate-y-[25px]' : ''}`}
    >
      {/* Image */}
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-[60%] object-cover rounded-md"
      />
      {/* Title and Number */}
      <div className="w-full flex justify-between items-center mt-4">
        <h1 className="text-lg">{card.title}</h1>
        <span className="text-7xl font-bold bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {card.number}
        </span>
      </div>
      {/* Explore Button */}
      <button className="absolute left-3 bottom-3 text-sm bg-purple-700 text-white px-3 py-1 rounded-md hover:bg-purple-800 transition">
        Explore more
      </button>
    </div>
  ))}
</div>




      {/* Navigation Arrows */}
      {currentPage > 0 && (
        <button
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
          onClick={handlePreviousPage}
        >
          ←
        </button>
      )}
      {currentPage < pages.length - 1 && (
        <button
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
          onClick={handleNextPage}
        >
          →
        </button>
      )}
    </div>
  );
}
