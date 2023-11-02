import { useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { Button } from 'flowbite-react';
import html2canvas from 'html2canvas';
import FileSaver from 'file-saver';

const ResultPage = () => {
  const location = useLocation();
  const state = location.state as { images: string[] };
  const divRef = useRef<HTMLDivElement>(null);

  const onCapture = () => {
    var div = divRef.current;
    if (!div)
      return;

    html2canvas(div)
      .then((canvas) => {
        canvas.toBlob(blob => {
          if (blob !== null)
            FileSaver.saveAs(blob, "result.png");
        });
      }).catch(error => {
        console.error("Error converting div to image:", error);
      });
  };

  return (
    <>
      <div className="max-w-screen max-h-screen flex justify-center items-center p-4" ref={divRef}>
        <div className="grid grid-cols-2 h-full w-full bg-white justify-center p-1 gap-2">
          {state.images.map((url, _) => (
            <img src={url} className="flex object-contain items-center p-1" />
          ))}
        </div>
        <div className="absolute bottom-10">
          <Button pill size="xl" gradientDuoTone="purpleToPink" onClick={onCapture}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default ResultPage;