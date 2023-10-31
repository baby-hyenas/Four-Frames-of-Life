import React from "react";
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const RootPage = () => {
  const navigate = useNavigate();

  const autoCapture = () => {
    navigate('/capture');
  }


  return (
    <React.Fragment>
      <div className="flex flex-col w-full h-full items-center gap-4">
        <img
          src="assets/images/grlogo.png"
          alt="나의 네컷 "
          width={480}
          height={72}
          className="object-contain max-w-screen max-h-[70%]"
        />
        {/* <div className="absolute top-[70%] font-bold text-gray-50 bg-black text-center">
          인생네컷 시작하기
        </div> */}
        <div className="absolute bottom-0 h-16 flex items-center justify-center gap-4">
          <Button pill size="xl" gradientDuoTone="purpleToPink" onClick={autoCapture}>
            Auto Capture
          </Button>
          <Button pill size="xl" gradientDuoTone="purpleToPink" onClick={autoCapture}>
            Manual Capture
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RootPage;