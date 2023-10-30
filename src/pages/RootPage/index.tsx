import { useState } from "react";
import { CaptureWebcam } from '@/components/Webcam';
import { ImageGallery } from '@/components/Common';

const RootPage = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [imgs, setImgs] = useState<string[]>([]);
  //const [selectedImgs, setSelectedImgs] = useState<string[]>([]);
  return (
    <div>
      <div className="fixed top-0 left-0 z-50 w-full h-10 bg-purple-500 border-t border-purple-900 font-bold text-gray-950 flex items-center justify-center">
        Four frames of life
      </div>
      <div className="fixed top-10 left-0 bottom-0 w-full bg-black border-gray-900">
        {isCompleted ||
          <CaptureWebcam isCaptureable={true} captureCount={10} onCompleteCapture={(photos: string[]) => { setImgs(photos); setIsCompleted(true); }} />
        }
        {isCompleted &&
          <ImageGallery images={imgs} onCompletedSelect={(photos: string[]) => { console.log(photos); }} />
        }
      </div>
    </div>
  );
};

export default RootPage;