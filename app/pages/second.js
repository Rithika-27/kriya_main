"use client";

import { useState } from "react";

export default function Page() {
  const [bulgedCard, setBulgedCard] = useState(null); // State for tracking bulged card
  const [cards, setCards] = useState([
    { title: "C1", subtitle: "(Dec - Feb)", theme: "Blockchain Era" },
    { title: "C2", subtitle: "(Mar - May)", theme: "AI Revolution" },
    { title: "C3", subtitle: "(Jun - Aug)", theme: "Cloud Computing" },
  ]);
  const cardWidth = 350; // Increased card width
  const cardSpacingX = 450; // Horizontal spacing between cards
  const cardSpacingY = 200; // Vertical spacing between cards
  const cardHeight = 350; // Reduced height of the cards
  const [flipped, setFlipped] = useState(false); // State to track page flip animation

  // Handle card click
  const handleCardClick = (index) => {
    setBulgedCard(index); // Set the clicked card as bulged
  };

  // Handle click outside cards
  const handleOutsideClick = () => {
    setFlipped(true); // Trigger page flip animation
    setBulgedCard(null); // Reset any bulged card
    // Remove cards temporarily
    setCards([]);
    setTimeout(() => {
      // Re-position cards diagonally
      setCards([
        { title: "C1", subtitle: "(Dec - Feb)", theme: "Blockchain Era" },
        { title: "C2", subtitle: "(Mar - May)", theme: "AI Revolution" },
        { title: "C3", subtitle: "(Jun - Aug)", theme: "Cloud Computing" },
      ]);
      setFlipped(false); // Reset the flip animation after the delay
    }, 300); // Delay for smoother transition
  };

  return (
    <div
      className={`relative flex flex-col items-start justify-start min-h-screen bg-gray-100 transition-transform duration-700 ${
        flipped ? "transform rotate-y-180" : "" // Apply page flip animation
      }`}
      onClick={handleOutsideClick}
    >
      {/* KRIYA 2025 WORKSHOPS in the top-right corner */}
      <h1 className="absolute top-4 right-4 text-center text-xl font-bold">
        KRIYA 2025 <br /> {/* Line break between KRIYA 2025 and WORKSHOPS */}
        <span className="text-3xl font-bold">WORKSHOPS</span> {/* Larger font for WORKSHOPS */}
      </h1>

      <div className="relative" onClick={(e) => e.stopPropagation()} style={{ transform: "translateX(100px)" }}>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)} // Handle card click
            className={`absolute w-[350px] h-[350px] bg-teal-200 text-black p-4 rounded-lg shadow-lg transform transition-transform duration-300 border-t-4 border-b-4 border-black ${
              bulgedCard === index ? "scale-110" : "" // Apply bulge effect if selected
            }`}
            style={{
              transform: `translate(${
                100 + index * cardSpacingX // Adjusted to move cards to the right
              }px, ${
                index === 0 ? 100 : index * cardSpacingY // Move the first card downwards by 100px (towards bottom)
              }px) ${bulgedCard === index ? "scale(1.1)" : ""}`,
            }}
          >
            <h1 className="text-4xl font-bold">{card.title}</h1> {/* Increased font size and bold */}
            <p className="text-2xl font-bold mt-2">{card.subtitle}</p> {/* Increased font size and bold for the months */}
            <p className="text-sm font-semibold mt-4">Theme: {card.theme}</p>
            <p className="text-xs mt-2">Winter Season</p>
            <p className="text-xs">2023 Online Lectures</p>
            <p className="text-xs mt-2">Tickets are available online</p>
            <p className="text-xs font-semibold">block.app</p>
          </div>
        ))}
      </div>
    </div>
  );
}
