import { useState } from "react";
import { CaptureWebcam } from '@/components/Webcam';
import { ImageGallery } from '@/components/Common';

const CapturePage = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [imgs, setImgs] = useState<string[]>([]);


  return (
    <>
      {isCompleted ||
        <CaptureWebcam isCaptureable={true} captureCount={10} onCompleteCapture={(photos: string[]) => { setImgs(photos); setIsCompleted(true); }} />
      }
      {isCompleted &&
        <ImageGallery images={imgs} onCompletedSelect={(photos: string[]) => { console.log(photos); }} />
      }
    </>
  );
};

export default CapturePage;