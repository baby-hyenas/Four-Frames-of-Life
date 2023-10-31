import { ImageGalleryItem } from ".";

type ImageGalleryProps = {
  images: string[],
  onCompletedSelect: (selected: string[]) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = (props: ImageGalleryProps) => {
  const chunkedImages: Array<string[]> = props.images.reduce((result: Array<string[]>, _, index) => {
    if (index % 2 === 0) {
      result.push(props.images.slice(index, index + 2));
    }
    return result;
  }, []);


  return (
    <div className="flex flex-col w-full h-full">
      {chunkedImages.map((urls, index) => (
        <div key={index} className="flex flex-row w-full h-1/5 justify-center">
          <ImageGalleryItem imageUrl={urls[0]}/>
          <ImageGalleryItem imageUrl={urls[1]}/>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery