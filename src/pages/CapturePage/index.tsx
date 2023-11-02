import { useState } from "react";
import { CaptureWebcam } from '@/components/Webcam';
import { ImageGallery } from '@/components/Common';
import { useNavigate } from 'react-router-dom';

const CapturePage = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [imgs, setImgs] = useState<string[]>([]);

  const navigate = useNavigate();
  const gotoResultPage = (selected: string[]) => {
    navigate('/result', {
      state: { images: selected },
    })
  }

  return (
    <>
      <div className="max-w-screen max-h-screen">
        {isCompleted ||
          <CaptureWebcam isCaptureable={true} captureCount={10} onCompleteCapture={(photos: string[]) => { setImgs(photos); setIsCompleted(true); }} />
        }
        {isCompleted &&
          <ImageGallery images={imgs} selectCount={4} onCompletedSelect={(selected: string[]) => { gotoResultPage(selected); }} />
        }
      </div>
    </>
  );
};

export default CapturePage;