"use client";

import { useState } from "react";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(0); // State to track the current page
  const [flippedCards, setFlippedCards] = useState({}); // State to track flipped cards

  // Pages of cards
  const pages = [
    [
      { image: "https://www.alxtel.com/wp-content/uploads/2022/09/AIOps-IT-Operations.webp", title: "AI in Mobile Robotics", number: "W1", content: "Details about Spatial AI." },
      { image: "https://st4.depositphotos.com/1001599/40602/v/600/depositphotos_406026508-stock-illustration-supply-chain-analytics-abstract-concept.jpg", title: "Blockchain Era", number: "W2", content: "Details about Blockchain Era." },
      // { image: "https://m.media-amazon.com/images/G/31/bizzopedia/blog63/Blog_63_Image_1_Banner.jpg", title: "Blockchain Era", number: "W2", content: "Details about Blockchain Era." },
      { image: "https://th.bing.com/th/id/OIP._Bmx6Zxo8eCWiC63J9iOKwHaHa?w=626&h=626&rs=1&pid=ImgDetMain", title: "AI Revolution", number: "W3", content: "Details about AI Revolution." },
    ],
    [
      { image: "/images/image4.jpeg", title: "Cybersecurity", number: "W4", content: "Details about Cybersecurity." },
      { image: "/images/image5.jpg", title: "Quantum Computing", number: "W5", content: "Details about Quantum Computing." },
      { image: "/images/images6.avif", title: "Data Science", number: "W6", content: "Details about Data Science." },
    ],
    [
      { image: "/path-to-image-7.jpg", title: "IoT Revolution", number: "W7", content: "Details about IoT Revolution." },
      { image: "/path-to-image-8.jpg", title: "Green Technology", number: "W8", content: "Details about Green Technology." },
      { image: "/path-to-image-9.jpg", title: "Space Tech", number: "W9", content: "Details about Space Tech." },
    ],
  ];

  // Handle navigation
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1); // Move to the next page
      setFlippedCards({}); // Reset flipped cards
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1); // Move to the previous page
      setFlippedCards({}); // Reset flipped cards
    }
  };

  // Handle card flip
  const handleCardFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the flipped state
    }));
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
      {/* KRIYA 2025 WORKSHOPS in the top-right corner */}
      <h1 className="absolute top-4 right-4 text-center text-xl font-bold">
        KRIYA 2025 <br />
        <span className="text-3xl font-bold">WORKSHOPS</span>
      </h1>

      {/* Cards Container */}
      <div className="relative flex justify-center items-center gap-12">
        {pages[currentPage].map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardFlip(index)} // Handle card flip
            className={`relative w-[300px] h-[400px] rounded-lg shadow-lg transition-transform duration-500`}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
              // Apply diagonal vertical offset
              transform: `
                translateY(${index === 0 ? "-50px" : index === 2 ? "50px" : "0px"})
                rotateY(${flippedCards[index] ? 180 : 0}deg)
              `,
            }}
          >
            {/* Front Side */}
            <div
              className="absolute inset-0 bg-customPink p-4 rounded-lg flex flex-col items-center"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(0deg)",
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[60%] object-cover rounded-md"
              />
              <div className="w-full flex justify-between items-center mt-4">
                <h1 className="text-lg font-extrabold bg-white bg-clip-text text-transparent">{card.title}</h1>
                <span className="text-7xl font-bold bg-white bg-clip-text text-transparent">
                  {card.number}
                </span>
              </div>
              <button className="absolute left-3 bottom-3 text-sm bg-white text-black px-3 py-1 rounded-md hover:bg-purple-800 transition">
                Explore more
              </button>
            </div>

            {/* Back Side */}
            <div
              className="absolute inset-0 bg-customPink text-white p-4 rounded-lg flex flex-col items-center justify-center"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="text-center mt-2">{card.content}</p>
              {/* <button
                className="mt-4 bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 transition"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent propagation
                  handleCardFlip(index);
                }}
              >
                Go Back
              </button> */}
            </div>
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
