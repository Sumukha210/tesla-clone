import { useState } from "react";

const useLoopedCarousel = (imageCollection: any[]) => {
  const [currentEleNum, setCurrentEleNum] = useState(0);

  const handleNextArrow = () => {
    if (currentEleNum >= imageCollection.length - 1) {
      setCurrentEleNum(0);
    } else {
      setCurrentEleNum(currentEleNum + 1);
    }
  };

  const handlePrevArrow = () => {
    if (currentEleNum <= 0) {
      setCurrentEleNum(imageCollection.length - 1);
    } else {
      setCurrentEleNum(currentEleNum - 1);
    }
  };

  return {
    currentEleNum,
    setCurrentEleNum,
    handlePrevArrow,
    handleNextArrow,
  };
};

export default useLoopedCarousel;
