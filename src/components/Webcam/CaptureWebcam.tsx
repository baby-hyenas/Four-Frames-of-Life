import React, {useState} from 'react'
import Webcam from 'react-webcam'

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
      if ( webcamRef && webcamRef.current ) {
        const newPhoto = webcamRef.current?.getScreenshot();
        if( newPhoto )
          setPhotos([...photos, newPhoto]);
      }

      if(photos.length >= props.captureCount) {
        props.onCompleteCapture(photos);
      }
    },
    [webcamRef, photos, setPhotos]
  ); 

  return (
    <div className="fixed top-16 left-0 bottom-16 w-full bg-black border-gray-900 flex-col items-center justify-center">
      <div>
      <Webcam 
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      </div>
      <div>
        <button onClick={capture}>Capture</button>
      </div>
    </div>
  );
}


export default CaptureWebcam