import React, { useState } from 'react'
import Webcam from 'react-webcam'
import { Button } from 'flowbite-react';

const videoConstraints = {
  width: 960,
  height: 720,
  facingMode: "user"
};

type CaptureWebcamProps = {
  isCaptureable: boolean;
  captureCount: number;
  onCompleteCapture: (photos: string[]) => void;
};

const CaptureWebcam: React.FC<CaptureWebcamProps> = (props: CaptureWebcamProps) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const webcamRef = React.useRef<Webcam>(null);
  const capture = React.useCallback(
    () => {
      const newPhoto = webcamRef.current?.getScreenshot();
      if (newPhoto)
        setPhotos([...photos, newPhoto]);

      if (photos.length >= props.captureCount) {
        props.onCompleteCapture(photos);
      }
    },
    [webcamRef, photos, setPhotos]
  );

  return (
    <>
      <div className="flex h-full w-full justify-center">
        <div className="flex-wrap max-h-[80vh] max-w-screen object-contain">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </div>
        <div className="absolute bottom-10 justify-center items-center">
          <Button pill size="xl" gradientDuoTone="purpleToPink" onClick={() => capture()}>
            Capture
          </Button>
        </div>
      </div>
    </>
  );
}

export default CaptureWebcam