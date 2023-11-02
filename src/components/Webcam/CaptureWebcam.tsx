import React, { useState, useRef, useCallback, useEffect } from 'react'
import Webcam from 'react-webcam'
import { Button } from 'flowbite-react';

const videoConstraints = {
  width: 720,
  height: 540,
  facingMode: "user"
};

type CaptureWebcamProps = {
  isCaptureable: boolean;
  captureCount: number;
  onCompleteCapture: (photos: string[]) => void;
};

const CaptureWebcam: React.FC<CaptureWebcamProps> = (props: CaptureWebcamProps) => {
  const webcamRef = useRef<Webcam>(null);
  const photosRef = useRef<string[]>([]);
  const [anmCapture, setAnmCapture] = useState<boolean>(false);

  const capture = useCallback(() => {
    const newPhoto = webcamRef.current?.getScreenshot();
    if (!newPhoto)
      return;

    setAnmCapture(true);
    photosRef.current = [...photosRef.current, newPhoto];
    if (photosRef.current.length >= props.captureCount) {
      props.onCompleteCapture(photosRef.current);
    }
  }, [webcamRef, photosRef, anmCapture, setAnmCapture]);

  useEffect(() => {
    if (anmCapture) {
      setTimeout(() => {
        setAnmCapture(false);
      }, 100);
    }
  }, [anmCapture, setAnmCapture]);

  return (
    <>
      <div className={anmCapture ? "brightness-200 contrast-50" : ""}>
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
            <Button pill size="xl" gradientDuoTone="purpleToPink" onClick={capture}>
              Capture
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaptureWebcam