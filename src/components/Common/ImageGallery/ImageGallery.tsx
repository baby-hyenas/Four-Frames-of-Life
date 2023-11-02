import React, { useState } from 'react'
import { Button } from 'flowbite-react';
import ImageGalleryItem from './ImageGalleryItem';

type ImageGalleryProps = {
  selectCount: number,
  images: string[],
  onCompletedSelect: (selected: string[]) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = (props: ImageGalleryProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const chunkedImages: Array<string[]> = props.images.reduce((result: Array<string[]>, _, index) => {
    if (index % 2 === 0) {
      result.push(props.images.slice(index, index + 2));
    }
    return result;
  }, []);

  const make = React.useCallback(
    () => {
      if (selected.length == props.selectCount) {
        props.onCompletedSelect(selected);
      }
    },
    [selected, setSelected]
  );

  return (
    <div className="flex h-full w-full justify-center">
      <div className="grid grid-rows-5 w-auto h-auto items-center p-2 gap-2">
        {chunkedImages.map((urls, index) => (
          <div key={index} className="flex flex-row h-[15vh] justify-center items-center gap-4">
            <ImageGalleryItem imageUrl={urls[0]} selected={selected} setSelected={setSelected} maxSelectedCount={props.selectCount} />
            <ImageGalleryItem imageUrl={urls[1]} selected={selected} setSelected={setSelected} maxSelectedCount={props.selectCount} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 justify-center items-center">
        <Button pill size="xl" gradientDuoTone="purpleToPink" onClick={() => make()}>
          Make
        </Button>
      </div>
    </div>
  );
}

export default ImageGallery;