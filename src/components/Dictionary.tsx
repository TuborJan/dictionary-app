import AudioWord from "@/components/AudioWord";
import { dictionary } from "@/store/slices/wordSlices";

interface IDictionaryProps {
  word: dictionary;
}

const Dictionary: React.FC<IDictionaryProps> = ({ word }) => {
  return (
    <div>
      <h1>{word.word}</h1>
    </div>
  );
};

export default Dictionary;
