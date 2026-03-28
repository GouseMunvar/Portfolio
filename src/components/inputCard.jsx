// InputCard.jsx
import React from 'react';

const InputCard = () => {
  return (
    <div className="w-[500px] flex flex-col items-center gap-4">
      <input
        type="text"
        placeholder="Name"
        className="w-[80%] bg-white border border-black py-3 px-4 outline-none rounded-md"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-[80%] bg-white border border-black py-3 px-4 outline-none rounded-md"
      />
      <textarea
        placeholder="Message"
        rows="4"
        className="w-[80%] bg-white border border-black py-3 px-4 resize-none outline-none rounded-md"
      />
      <div className="w-[80%] flex justify-end">
        <button className="bg-yellow-400 px-6 py-2 font-semibold hover:bg-yellow-500 transition rounded-md">
          Send
        </button>
      </div>
    </div>
  );
};

export default InputCard;
