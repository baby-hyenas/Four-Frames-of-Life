'use client';

import { Carousel } from 'flowbite-react';

type ImageCarouselProps = {
  images: string[],
  onCompletedSelect: (selected: string[]) => void;
};

const ImageCarousel: React.FC<ImageCarouselProps> = (props: ImageCarouselProps) => {
  return (
    <Carousel slide={false}>
      {props.images.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index}`} />
      ))}
    </Carousel>
  );
}

export default ImageCarousel