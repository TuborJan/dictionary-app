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
    <div className="w-full mt-10">
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="font-bold text-5xl">{word.word}</h1>
          <p className="mt-4 font-medium text-xl text-[#a75fe0]">
            {word.phonetic}
          </p>
        </div>
        {audioURL ? <AudioWord audio={audioURL} /> : <></>}
      </div>
    </div>
  );
};

export default Dictionary;
