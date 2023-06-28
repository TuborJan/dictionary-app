import { Definition } from "@/store/slices/wordSlices";
import React from "react";

interface IMeaningProps {
  meanings: Definition[];
}

const Meanings = ({ meanings }: IMeaningProps) => {
  return (
    <div className="mt-8">
      <h3 className="text-[#8f8f8f]">Meaning</h3>
      <ul className="list-disc list-inside pl-8">
        {meanings.map((defenition, index) => (
          <li className="mt-4 marker:text-[#8940c2]" key={index}>
            {defenition.definition}
            {defenition.example && (
              <p className="mt-3 text-[#8f8f8f]">"{defenition.example}"</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meanings;
