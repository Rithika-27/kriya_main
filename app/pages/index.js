import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col overflow-hidden">
      {/* First Line: Right Scroll */}
      <div className="flex items-center space-x-10 animate-scroll h-1/4">
        <h1 className="text-[8vw] font-extrabold text-blue-700">Event</h1>
        <Image
          src="/images/image1.jpeg"
          alt="Image 1"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <h1 className="text-[8vw] font-extrabold text-blue-700">Strategies</h1>
      </div>

      {/* Second Line: Left Scroll */}
      <div className="flex items-center space-x-10 animate-scroll-reverse h-1/4">
        <Image
          src="/images/image2.jpeg"
          alt="Image 2"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <h1 className="text-[8vw] font-extrabold text-blue-700">Marketing</h1>
      </div>

      {/* Third Line: Right Scroll */}
      <div className="flex items-center space-x-10 animate-scroll h-1/4">
        <h1 className="text-[8vw] font-extrabold text-blue-700">Culture</h1>
        <Image
          src="/images/image3.jpeg"
          alt="Image 3"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>

      {/* Fourth Line: Left Scroll */}
      <div className="flex items-center space-x-10 animate-scroll-reverse h-1/4">
        <h1 className="text-[8vw] font-extrabold text-blue-700">Engagement</h1>
        <Image
          src="/images/image4.jpeg"
          alt="Image 4"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
