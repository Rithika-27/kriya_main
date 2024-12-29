import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center overflow-hidden">
      <div className="space-y-10 py-10">
        {/* First Line (Circular Scrolling) */}
        <div className="flex items-center space-x-10 animate-scroll">
          <h1 className="text-6xl font-extrabold text-blue-700">Event</h1>
          <Image
            src="/images/image1.jpeg"
            alt="Image 1"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <h1 className="text-6xl font-extrabold text-blue-700">Strategy</h1>
        </div>

        {/* Second Line (Circular Scrolling) */}
        <div className="flex items-center space-x-10 animate-scroll-reverse">
          <Image
            src="/images/image2.jpeg"
            alt="Image 2"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <h1 className="text-6xl font-extrabold text-blue-700">Marketing</h1>
        </div>

        {/* Third Line (Circular Scrolling) */}
        <div className="flex items-center space-x-10 animate-scroll">
          <h1 className="text-6xl font-extrabold text-blue-700">Culture</h1>
          <Image
            src="/images/image3.jpeg"
            alt="Image 3"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <h1 className="text-6xl font-extrabold text-blue-700">Cu</h1>
        </div>

        {/* Last Line (Circular Scrolling) */}
        <div className="flex items-center space-x-10 animate-scroll-reverse">
          <h1 className="text-6xl font-extrabold text-blue-700">Ent</h1>
          <Image
            src="/images/image4.jpeg"
            alt="Image 4"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <h1 className="text-6xl font-extrabold text-blue-700">Engagement</h1>
        </div>
      </div>
    </div>
  );
}
