import React from "react";

const Chart = () => {
  const data = [
    {
      topText: "Reflective Thinking",
      bottomText: "Creative Application",
    },
    {
      topText: "Problem Solving",
      bottomText: "Perspective Taking",
    },
    {
      topText: "Critical Analysis",
      bottomText: "Concept Clarity",
    },
    {
      topText: "Holistic Understanding",
      bottomText: "Decision Making",
    },
  ];

  return (
    <div className="bg-yellow-400 min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-5xl">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black"></div>

        {/* Chart Items */}
        <div className="flex justify-between items-center">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-6">
              {/* Top Text */}
              <p className="text-black font-semibold text-lg text-center">
                {item.topText}
              </p>

              {/* Vertical Line (Up) */}
              <div className="h-16 w-[2px] bg-black"></div>

              {/* Blue Rectangle */}
              <div className="w-8 h-4 bg-teal-600"></div>

              {/* Vertical Line (Down) */}
              <div className="h-16 w-[2px] bg-black"></div>

              {/* Bottom Text */}
              <p className="text-black font-medium text-lg text-center">
                {item.bottomText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
