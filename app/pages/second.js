"use client";

import { useState } from "react";

export default function Page() {
  const [bulgedCard, setBulgedCard] = useState(null); // State for tracking bulged card
  const [currentPage, setCurrentPage] = useState(0); // State to track the current page

  // Pages of cards
  const pages = [
    [
      { title: "C1", subtitle: "(Dec - Feb)", theme: "Blockchain Era" },
      { title: "C2", subtitle: "(Mar - May)", theme: "AI Revolution" },
      { title: "C3", subtitle: "(Jun - Aug)", theme: "Cloud Computing" },
    ],
    [
      { title: "C4", subtitle: "(Sep - Nov)", theme: "Cybersecurity" },
      { title: "C5", subtitle: "(Dec - Feb)", theme: "Quantum Computing" },
      { title: "C6", subtitle: "(Mar - May)", theme: "Data Science" },
    ],
    [
      { title: "C7", subtitle: "(Jun - Aug)", theme: "IoT Revolution" },
      { title: "C8", subtitle: "(Sep - Nov)", theme: "Green Technology" },
      { title: "C9", subtitle: "(Dec - Feb)", theme: "Space Tech" },
    ],
  ];

  // Handle card click
  const handleCardClick = (index) => {
    setBulgedCard(index); // Set the clicked card as bulged
  };

  // Handle navigation
  const handleNextPage = (e) => {
    e.stopPropagation(); // Prevent background click
    if (currentPage < pages.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1); // Move to the next page
      setBulgedCard(null); // Reset bulged card
    }
  };

  const handlePreviousPage = (e) => {
    e.stopPropagation(); // Prevent background click
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1); // Move to the previous page
      setBulgedCard(null); // Reset bulged card
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      {/* KRIYA 2025 WORKSHOPS in the top-right corner */}
      <h1 className="absolute top-4 right-4 text-center text-xl font-bold">
        KRIYA 2025 <br />
        <span className="text-3xl font-bold">WORKSHOPS</span>
      </h1>

      {/* Cards Container */}
      <div
        className="relative flex justify-center items-center gap-12"
        onClick={(e) => e.stopPropagation()} // Prevent background click handler
      >
        {pages[currentPage].map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)} // Handle card click
            className={`relative w-[330px] h-[330px] bg-teal-200 text-black p-4 rounded-lg shadow-lg transition-transform duration-300 border-t-4 border-b-4 border-black ${bulgedCard === index ? "scale-110" : ""
              }`}
            style={{
              transform: `translateY(${index === 0
                ? -50 // Raise the first card
                : index === 2
                  ? 50 // Lower the third card
                  : 0 // Keep the second card at default
                }px)`,
            }}
          >
            <h1 className="text-4xl font-bold">{card.title}</h1>
            <p className="text-2xl font-bold mt-2">{card.subtitle}</p>
            <p className="text-sm font-semibold mt-4">Theme: {card.theme}</p>
            <p className="text-xs mt-2">Winter Season</p>
            <p className="text-xs">2023 Online Lectures</p>
            <p className="text-xs mt-2">Tickets are available online</p>
            <p className="text-xs font-semibold">block.app</p>
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
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
          onClick={handleNextPage}
        >
          →
        </button>
      )}
    </div>
  );
}
