const RootPage = () => {
  return (
    <div className="flex flex-col">
      <div className="fixed top-0 left-0 z-50 w-full h-16 bg-purple-500 border-t border-purple-900 font-bold text-gray-950 flex items-center justify-center">
        Four frames of life
      </div>
      <div className="fixed top-16 left-0 bottom-16 w-full bg-black border-gray-900 flex items-center justify-center">
        {/* <Webcam /> */}
      </div>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-purple-500 border-t border-purple-900 font-bold flex items-center justify-center">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
          <button type="button" className="inline-flex flex-col items-center justify-center px-10 hover:bg-purple-800 group">
            <span className="font-bold text-gray-950 group-hover:text-gray-50">Home</span>
          </button>
          <button type="button" className="inline-flex flex-col items-center justify-center px-10 hover:bg-purple-800 group">
            <span className="font-bold text-gray-950 group-hover:text-gray-50">Capture</span>
          </button>
          <button type="button" className="inline-flex flex-col items-center justify-center px-10 hover:bg-purple-800 group">
            <span className="font-bold text-gray-950 group-hover:text-gray-50">Settings</span>
          </button>
        </div>
      </div>
    </div>

  );
};

export default RootPage;