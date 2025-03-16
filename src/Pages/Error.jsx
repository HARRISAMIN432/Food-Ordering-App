import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="text-lg mt-2">This webpage is not available.</p>
      <a
        href="/"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Home
      </a>
    </div>
  );
};

export default Error;
