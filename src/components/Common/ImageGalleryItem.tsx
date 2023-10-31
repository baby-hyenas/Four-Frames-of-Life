'use client';

import React, { useState } from 'react';
import { HiCheckCircle } from 'react-icons/hi';

interface ImageGalleryItemProps {
  imageUrl: string;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({ imageUrl }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleImageClick = () => {
    setIsSelected(!isSelected);
    console.log("hit!");
  };

  return (
    <div onClick={handleImageClick} className="relative object-cover p-2">
      <img src={imageUrl}/>
      {isSelected && (
        <div className='text-green-400'>
          <HiCheckCircle className="absolute top-4 left-4 w-8 h-8"/>
        </div>
      )}
    </div>
  );
}

export default ImageGalleryItem;