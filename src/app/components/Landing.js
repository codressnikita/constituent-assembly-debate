// components/Landing.js
"use client";

import Hero from "./Hero";

export default function Landing({
  handleArchiveClick,
  handleConstituentClick,
}) {
  return (
    <div className="relative h-screen">
      <Hero videoSrc={"/indian_parliament.mp4"} />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold mb-8">Welcome</h1>
        <div className="flex space-x-6">
          <div
            className="bg-blue-500 text-white p-6 rounded cursor-pointer"
            onClick={handleConstituentClick}
          >
            Constituents
          </div>
          <div
            className="bg-green-500 text-white p-6 rounded cursor-pointer"
            onClick={handleArchiveClick}
          >
            Archive
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-5" />
    </div>
  );
}
