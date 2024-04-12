import React, { useState, useEffect } from 'react';
import image1 from '../../assets/Loader/pic1.jpg';
import image2 from '../../assets/Loader/pic2.jpg';
import image3 from '../../assets/Loader/pic3.jpg';
import image4 from '../../assets/Loader/pic4.jpg';

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
      className='object-contain '
    >
      <img 
        src={images[currentImageIndex]} 
        alt={`Image ${currentImageIndex + 1}`} 
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default Phoneimg;