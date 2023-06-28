import { Meaning } from "@/store/slices/wordSlices";
import Lexis from "./Lexis";
import Meanings from "./Meanings";

interface IVerbProps {
  morphology: Meaning;
}

const Morphology = ({ morphology }: IVerbProps) => {
  console.log(morphology.definitions[0].example);

  return (
    <div className="mt-10 text-xl font-light">
      <h2 className="flex justify-between items-center italic font-bold after:block after:w-[90%] after:h-px after:bg-[#eaeaea]">
        {morphology.partOfSpeech}
      </h2>
      <Meanings meanings={morphology.definitions} />
      {morphology.synonyms && morphology.synonyms?.length !== 0 && (
        <Lexis lexis={morphology.synonyms} type={"Synonyms"} />
      )}
      {morphology.antonyms && morphology.antonyms?.length !== 0 && (
        <Lexis lexis={morphology.antonyms} type={"Antonyms"} />
      )}
    </div>
  );
};

export default Morphology;
