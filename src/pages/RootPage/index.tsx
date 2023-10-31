import React, { useState } from "react";
import { CaptureWebcam } from '@/components/Webcam';
import { ImageGallery, NavBar } from '@/components/Common';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const RootPage = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [imgs, setImgs] = useState<string[]>([]);
  //const [selectedImgs, setSelectedImgs] = useState<string[]>([]);
  const navigate = useNavigate();

  const autoCapture = () => {
    navigate('/capture');
  }


  return (
    <React.Fragment>
      <div className="flex-col">
        <img
          src="assets/images/grlogo.png"
          alt="나의 네컷 "
          width={480}
          height={72}
        />
        <div>인생네컷 시작하기</div>
        <div className="flex items-center justify-center">
          <Button pill size="xl" gradientDuoTone="purpleToPink" onClick={autoCapture}>
            Auto Capture
          </Button>
          <Button pill size="xl" gradientDuoTone="purpleToPink" onClick={autoCapture}>
            수동 Capture
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RootPage;