"use client";

import { useState } from "react";

interface ICustomInputProps {
  hadleSubmit: (word: string) => void;
}

const CustomInput: React.FC<ICustomInputProps> = ({ hadleSubmit }) => {
  const [word, setWord] = useState("");

  return (
    <label className="w-full p-4 bg-[#f4f4f4] rounded-2xl relative flex items-center">
      <input
        className="w-full pr-10 font-bold bg-inherit focus:outline-none"
        value={word}
        type="text"
        placeholder="Type the word"
        onChange={(e) => setWord(e.target.value.replace(/\d/g, ""))}
      />
      <svg
        onClick={() => hadleSubmit(word)}
        className="w-8 h-8 absolute right-5 cursor-pointer"
        viewBox="0 -0.5 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z"
          stroke="#b98dde"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.989 15.4905L19.5 19.0015"
          stroke="#b98dde"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </label>
  );
};

export default CustomInput;
