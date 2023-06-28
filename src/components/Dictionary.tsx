import { dictionary } from "@/store/slices/wordSlices";
import Morphology from "./Morphology";
import Phonetic from "./Phonetic";
import Source from "./Source";

interface IDictionaryProps {
  word: dictionary;
}

const Dictionary = ({ word }: IDictionaryProps) => {
  return (
    <div className="w-full mt-10">
      <Phonetic word={word} />
      {word.meanings.map((meaning, index) => (
        <Morphology key={index} morphology={meaning} />
      ))}
      <Source sourceUrls={word.sourceUrls} />
    </div>
  );
};

export default Dictionary;
