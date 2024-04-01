import React, { useState, useEffect } from 'react';
import image1 from '../../assets/iphone_1.jpg';
import image2 from '../../assets/iphone_2.jpg';
import image3 from '../../assets/iphone_3.jpg';
import image4 from '../../assets/iphone_4.jpg';
const Phoneimg = () => {
  const images = [
    image1,
    image2,
    image3,
    image4
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={images[currentImageIndex]} 
        alt={`Image ${currentImageIndex + 1}`} 
        height={250}
        width={250}
      />
    </div>
  );
};

export default Phoneimg;