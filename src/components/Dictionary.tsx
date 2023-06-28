import { dictionary } from "@/store/slices/wordSlices";
import Morphology from "./Morphology";
import Phonetic from "./Phonetic";

interface IDictionaryProps {
  word: dictionary;
}

const Dictionary = ({ word }: IDictionaryProps) => {
  console.log(word);

  return (
    <div className="w-full mt-10">
      <Phonetic word={word} />
      {word.meanings?.map((meaning) => (
        <Morphology key={meaning.partOfSpeech} morphology={meaning} />
      ))}
    </div>
  );
};

export default Dictionary;
