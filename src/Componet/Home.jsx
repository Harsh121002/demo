import React, { useState } from "react";

const Home = () => {
  const [pos, setPos] = useState({ x: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    setPos({ x });
  };

  return (
    <section id="home" className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Greeting */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        Hi, I am <span className="text-yellow-400">Harsh 👋</span>
      </h1>

      {/* Big Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold mt-4 text-gray-300 leading-tight">
        Developer. <span className="text-white">Innovator.</span> Learner.
      </h2>

      {/* 3D Pixel Art */}
      <div className="mt-8 sm:mt-10" onMouseMove={handleMouseMove}>
        <img
          src="https://www.iconshock.com/3D/perspective/png/thumbnails/computer-electronic_device-electronic_machine-perspective.webp"
          alt="3D Icon"
          className="w-20 sm:w-24 md:w-28 h-auto"
          style={{
            transform: `translate(${pos.x}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      {/* Button */}
      <div className="mt-6 sm:mt-8">
        <button className="bg-neutral-900 px-5 py-3 sm:px-6 sm:py-3 rounded-full flex items-center space-x-3 border border-gray-600 hover:bg-neutral-800 transition">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
          <span>Let's work together</span>
        </button>
      </div>

      {/* Floating Decorations */}
      <div className="absolute bottom-16 left-4 w-10 h-10 sm:w-12 sm:h-12 animate-bounce">
        <img
          src="https://img.icons8.com/?size=100&id=XLYyiimvk3fV&format=png&color=000000"
          alt="Floating Icon"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute top-16 right-4 w-10 h-10 sm:w-12 sm:h-12 animate-pulse">
        <img
          src="https://ouch-prod-var-cdn.icons8.com/kv/illustrations/thumbs/F0sbqEc-UiCR0JTu.webp"
          alt="Pulse Icon"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
