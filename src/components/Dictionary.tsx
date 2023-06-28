import AudioWord from "@/components/AudioWord";
import { findAudio } from "@/functions/findAudion";
import { dictionary } from "@/store/slices/wordSlices";

interface IDictionaryProps {
  word: dictionary;
}

const Dictionary: React.FC<IDictionaryProps> = ({ word }) => {
  const audioURL = findAudio(word);
  console.log(word);

  return (
    <div>
      {word.phonetics && audioURL ? <AudioWord audio={audioURL} /> : <></>}
      <h1>{word.word}</h1>
    </div>
  );
};

export default Dictionary;
