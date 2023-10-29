'use client';

import React, {useState} from 'react'
import Webcam from 'react-webcam'
import { Button } from 'flowbite-react';

const videoConstraints = {
  width: 1280,
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
        if( newPhoto )
          setPhotos([...photos, newPhoto]);
          
      if(photos.length >= props.captureCount) {
        props.onCompleteCapture(photos);
      }
    },
    [webcamRef, photos, setPhotos]
  ); 

  return (
    <div className = "flex flex-col items-center justify-center gap-4">
      <Webcam 
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <Button size="xl" color="dark" onClick={capture}>
        Capture
      </Button>
    </div>
  );
}

export default CaptureWebcam