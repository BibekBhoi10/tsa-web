import React from "react";
import Image from "next/image";

const PopupCardDemo = ({ imageSource, title, paragraph }) => {
  return (
    <div className="flex justify-center items-center h-auto">
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <Image
          className="w-full transform transition-transform duration-300 hover:-translate-y-12 focus-within:-translate-y-12"
          src={imageSource}
          alt="img"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white animate-typing overflow-hidden whitespace-nowrap ">{title}</div>
          <p className="text-blue-400 text-base">{paragraph}</p>
       
        </div>
      </div>
    </div>
  );
};

export default PopupCardDemo;
