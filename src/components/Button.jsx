import React from 'react';

const Button = ({ text, onClick, bg = 'bg-[#f4f8f7]', border = 'border border-black' }) => {
  return (
    <button
      onClick={onClick}
      className={`${bg} ${border} w-40 rounded-md py-10 text-black text-center block`}
    >
      {text}
    </button>
  );
};

export default Button;
