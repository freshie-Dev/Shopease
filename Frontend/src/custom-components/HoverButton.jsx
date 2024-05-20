import React from 'react';

const CustomButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`my-2 text-2xl font-bold p-2 mx-4 bg-transparent border-2 border-black hover:bg-[#000] hover:text-[#d9a470] rounded-md duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

const CustomButton2 = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`my-2 text-2xl font-bold p-2 mx-4 rounded-md duration-300 bg-[#d9a470] text-black  hover:bg-[black] hover:text-[#d9a470] hover:border-2 hover:border-[#d9a470]  ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
export  {CustomButton2};
