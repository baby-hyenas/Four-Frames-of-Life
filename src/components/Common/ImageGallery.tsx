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
    <div className="grid grid-rows-5 w-auto h-auto items-center p-2 gap-2">
      {chunkedImages.map((urls, index) => (
        <div key={index} className="flex flex-row h-[15vh] justify-center items-center gap-4">
          <ImageGalleryItem imageUrl={urls[0]}/>
          <ImageGalleryItem imageUrl={urls[1]}/>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery