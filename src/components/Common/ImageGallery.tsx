'use client';

import { Avatar } from 'flowbite-react';

type ImageGalleryProps = {
  images: string[],
  onCompletedSelect: (selected: string[]) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = (props: ImageGalleryProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center align-center">
      {props.images.map((url, index) => (
        <div key={index} className="w-1/2 h-1/5">
          <Avatar img={url} size="xl" />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery