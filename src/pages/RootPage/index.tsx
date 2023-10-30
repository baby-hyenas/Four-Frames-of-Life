import { useState } from "react";
import { CaptureWebcam } from '@/components/Webcam';
import { ImageGallery, NavBar } from '@/components/Common';

const RootPage = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [imgs, setImgs] = useState<string[]>([]);
  //const [selectedImgs, setSelectedImgs] = useState<string[]>([]);
  return (
    <>
      <NavBar title = "Four Frames of Life"/>
      <div className="absolute top-10 left-0 bottom-0 w-full bg-black border-gray-900 items-center justify-center">
        {isCompleted ||
          <CaptureWebcam isCaptureable={true} captureCount={10} onCompleteCapture={(photos: string[]) => { setImgs(photos); setIsCompleted(true); }} />
        }
        {isCompleted &&
          <ImageGallery images={imgs} onCompletedSelect={(photos: string[]) => { console.log(photos); }} />
        }
      </div>
    </>
  );
};

export default RootPage;