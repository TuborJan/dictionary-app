import { Meaning } from "@/store/slices/wordSlices";

interface IVerbProps {
  meaning: Meaning;
}

const Meanings = ({ meaning }: IVerbProps) => {
  console.log();

  return (
    <div className="mt-10 text-xl font-light">
      <h2 className="flex justify-between items-center italic font-bold after:block after:w-[90%] after:h-px after:bg-[#eaeaea]">
        {meaning.partOfSpeech}
      </h2>
      {meaning.synonyms && meaning.synonyms?.length !== 0 && (
        <div className="flex gap-2 mt-8 ">
          <h3 className="mr-8">Synonyms</h3>
          {meaning.synonyms.map((synonym: string) => (
            <p key={synonym} className="text-[#a75fe0]">
              {synonym}
            </p>
          ))}
        </div>
      )}
      {meaning.antonyms && meaning.antonyms?.length !== 0 && (
        <div className="flex gap-2 mt-8 ">
          <h3 className="mr-8">Antonyms</h3>
          {meaning.antonyms.map((antonym: string) => (
            <p key={antonym} className="text-[#a75fe0]">
              {antonym}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Meanings;
