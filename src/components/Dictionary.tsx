import { dictionary } from "@/store/slices/wordSlices";
import Meanings from "./Meanings";
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
        <Meanings key={meaning.partOfSpeech} meaning={meaning} />
      ))}
    </div>
  );
};

export default Dictionary;
