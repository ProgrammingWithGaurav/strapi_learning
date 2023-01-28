import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="absolute w-full h-screen flex items-center justify-center opacity-50 z-[100] bg-indigo-500/50">
      <ClipLoader
        color={'blue'}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
