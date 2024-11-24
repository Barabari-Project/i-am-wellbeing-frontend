import React, { useState, useEffect } from "react";

const AnimatedCounter = ({ targetCount, duration }) => {
  const [count, setCount] = useState(0);
    
  useEffect(() => {
    // Calculate the increment step based on the duration and target count
    const incrementStep = targetCount / (duration / 100); // Adjusting for 100ms intervals
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += incrementStep;
      if (currentCount >= targetCount) {
        clearInterval(interval);
        setCount(targetCount); // Ensure we set to the target count at the end
      } else {
        setCount(Math.floor(currentCount)); // Update state with the current count
      }
    }, 100); // Update every 100ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, [targetCount, duration]);

  return (
    <div className='animated-counter'>
      <h1>{count}</h1>
    </div>
  );
};

export default AnimatedCounter;
