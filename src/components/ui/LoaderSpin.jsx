export const LoaderSpin = ({ isLoading = false }) => {
  return (
    <div className={`absolute top-0 left-0 min-h-dvh min-w-full ${isLoading ? 'flex' : 'hidden'} justify-center items-center bg-[#ddddddaa] z-5000`}>
      <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};
