import React from "react";

const StatusBar = ({ message }) => {
  return (
    <div className="bg-gray-500 text-white p-2.5 text-center fixed bottom-0 left-80 right-0 text-sm z-50">
      {message}
    </div>
  );
};

export default StatusBar;
