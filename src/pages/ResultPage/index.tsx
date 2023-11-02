import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const state = location.state as { images: string[] };
  return (
    <>
      <div className="max-w-screen max-h-screen justify-center items-center p-4">
        <div className="grid grid-cols-2 h-full w-full bg-white justify-center p-1 gap-2">
          {state.images.map((url, _) => (
            <img src={url} className="flex object-contain items-center p-1" />
          ))}
        </div>
      </div>
    </>
  );
};

export default ResultPage;