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
          <img src={urls[0]} className="object-cover p-2"/>
          <img src={urls[1]} className="object-cover p-2"/>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery