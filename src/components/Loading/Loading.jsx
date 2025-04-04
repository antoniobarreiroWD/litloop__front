import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-322px)]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
    </div>
  );
};

export default Loading;
