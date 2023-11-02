import React, { useState } from 'react';
import { HiCheckCircle } from 'react-icons/hi';

type ImageGalleryItemProps = {
  imageUrl: string,
  selected: string[],
  setSelected: (selected: string[]) => void,
  maxSelectedCount: number
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = (props: ImageGalleryItemProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleImageClick = () => {
    if (!isSelected) {
      if (props.selected.length >= props.maxSelectedCount)
        return;
      props.setSelected([...props.selected, props.imageUrl]);
    }
    else {
      props.setSelected(props.selected.filter(selectedUrl => selectedUrl !== props.imageUrl));
    }
    setIsSelected(!isSelected);
  };

  return (
    <div onClick={handleImageClick} className="relative flex max-w-[90%] max-h-[90%] justify-center bg-black">
      {isSelected ||
        <img src={props.imageUrl} className="object-contain items-center py-1" />
      }
      {isSelected &&
        <>
          <img src={props.imageUrl} className="object-contain items-center py-3" />
          <div className='text-green-400'>
            <HiCheckCircle className="absolute top-4 left-4 w-8 h-8" />
          </div>
        </>
      }
    </div>
  );
}

export default ImageGalleryItem;