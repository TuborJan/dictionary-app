import React from "react";

interface ISourceProps {
  sourceUrls: string[];
}

const Source = ({ sourceUrls }: ISourceProps) => {
  return (
    <div className="mt-8 pt-4 border-t-[1px] border-[#eaeaea]">
      <span className="mr-8 text-[#8f8f8f]">Source</span>
      <a className="underline" href={sourceUrls[0]} target="_blank">
        {sourceUrls}
      </a>
    </div>
  );
};

export default Source;
