import React from "react";

export default function SliderSection() {
  return (
    <div className="slider-container w-full max-w-lg">
      <input
        type="range"
        className="slider w-full h-2 bg-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        min="0"
        max="100"
        step="1"
      />
    </div>
  );
}