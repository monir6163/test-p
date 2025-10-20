const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-white/30"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
