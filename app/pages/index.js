import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-blue-50 flex flex-col overflow-hidden space-y-4"> {/* Vertical spacing */}
      {/* First Section: Event and Strategies (Right Scroll) */}
      <div className="w-full h-1/4 overflow-hidden relative bg-blue-50 flex items-center justify-center">
        <div className="flex animate-marquee-right space-x-8 items-center"> {/* Horizontal spacing */}
          {[...Array(2)].map((_, repeatIdx) => (
            <div key={repeatIdx} className="flex space-x-8 items-center"> {/* Horizontal spacing */}
              {[...Array(20)].map((_, idx) => (
                <React.Fragment key={idx}>
                  <h1 className="text-[8vw] font-semibold bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap">
                    Event
                  </h1>
                  <div className="flex items-center">
                    <Image
                      src="/images/images6.avif"
                      alt="Image 1"
                      width={190}
                      height={130}
                      className="rounded-lg"
                    />
                  </div>
                  <h1 className="text-[7vw] font-semibold bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text text-transparent  whitespace-nowrap">
                    Strategies
                  </h1>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Second Section: Marketing (Left Scroll) */}
      <div className="w-full h-1/4 overflow-hidden relative bg-blue-50 flex items-center justify-center">
        <div className="flex animate-marquee-left space-x-8 items-center"> {/* Horizontal spacing */}
          {[...Array(2)].map((_, repeatIdx) => (
            <div key={repeatIdx} className="flex space-x-8 items-center"> {/* Horizontal spacing */}
              {[...Array(20)].map((_, idx) => (
                <React.Fragment key={idx}>
                  <h1 className="text-[8vw] font-semibold bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap">
                    Marketing
                  </h1>
                  <div className="flex items-center space-x-4"> {/* Adjust horizontal spacing */}
                    <Image
                      src="/images/image2.jpeg"
                      alt="Image 2"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <Image
                      src="/images/image5.jpg"
                      alt="Image 5"
                      width={120}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Third Section: Culture (Right Scroll) */}
      <div className="w-full h-1/4 overflow-hidden relative bg-blue-50 flex items-center justify-center">
        <div className="flex animate-marquee-right space-x-8 items-center"> {/* Horizontal spacing */}
          {[...Array(2)].map((_, repeatIdx) => (
            <div key={repeatIdx} className="flex space-x-8 items-center"> {/* Horizontal spacing */}
              {[...Array(20)].map((_, idx) => (
                <React.Fragment key={idx}>
                  <h1 className="text-[8vw] font-semibold bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap">
                    Culture
                  </h1>
                  <div className="flex items-center">
                    <Image
                      src="/images/image3.jpeg"
                      alt="Image 3"
                      width={120}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Fourth Section: Engagement (Left Scroll) */}
      <div className="w-full h-1/4 overflow-hidden relative bg-blue-50 flex items-center justify-center">
        <div className="flex animate-marquee-left space-x-8 items-center"> {/* Horizontal spacing */}
          {[...Array(2)].map((_, repeatIdx) => (
            <div key={repeatIdx} className="flex space-x-8 items-center"> {/* Horizontal spacing */}
              {[...Array(20)].map((_, idx) => (
                <React.Fragment key={idx}>
                  <h1 className="text-[8vw] font-semibold bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap">
                    Engagement
                  </h1>
                  <div className="flex items-center">
                    <Image
                      src="/images/image4.jpeg"
                      alt="Image 4"
                      width={130}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}