import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-blue-50 flex flex-col overflow-hidden">
      {/* First Section: Event and Strategies */}
      <div className="w-full h-1/4 overflow-hidden relative">
        <div className="flex animate-loop space-x-16 absolute inset-0">
          {[...Array(40)].map((_, idx) => (
            <React.Fragment key={idx}>
              <h1 className="text-[9vw] font-semibold text-violet-700 whitespace-nowrap">Event</h1>
              <Image
                src="/images/image1.jpeg"
                alt="Image 1"
                width={1000}
                height={1000}
                className="rounded-lg"
              />
              <h1 className="text-[9vw] font-semibold text-violet-700 whitespace-nowrap">Strategies</h1>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Second Section: Marketing and Image */}
      <div className="w-full h-1/4 overflow-hidden relative">
        <div className="flex animate-loop-reverse space-x-16 absolute inset-0">
          {[...Array(40)].map((_, idx) => (
            <React.Fragment key={idx}>
              <h1 className="text-[9vw] font-semibold text-violet-700 whitespace-nowrap">Marketing</h1>
              <Image
                src="/images/image2.jpeg"
                alt="Image 2"
                width={250}
                height={250}
                className="rounded-lg"
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Third Section: Culture and Image */}
      <div className="w-full h-1/4 overflow-hidden relative">
        <div className="flex animate-loop space-x-16 absolute inset-0">
          {[...Array(40)].map((_, idx) => (
            <React.Fragment key={idx}>
              <h1 className="text-[9vw] font-semibold text-violet-700 whitespace-nowrap">Culture</h1>
              <Image
                src="/images/image3.jpeg"
                alt="Image 3"
                width={9000}
                height={9000}
                className="rounded-lg"
              />
            </React.Fragment>
          ))}
        </div>
      </div>




      <div className="w-full h-1/4 overflow-hidden relative">
        <div className="flex animate-loop-reverse space-x-16 absolute inset-0">
          {[...Array(40)].map((_, idx) => (
            <React.Fragment key={idx}>
              <h1 className="text-[9vw] font-semibold text-violet-700 whitespace-nowrap">Engagement</h1>
              <Image
                src="/images/image4.jpeg"
                alt="Image 4"
                width={250}
                height={250}
                className="rounded-lg"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
