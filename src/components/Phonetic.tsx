import AudioWord from "@/components/AudioWord";
import { findPhonetic } from "@/functions/findPhonetic";
import { findAudio } from "@/functions/findAudion";
import { dictionary } from "@/store/slices/wordSlices";

interface IPhoneticProps {
  word: dictionary;
}

const Phonetic = ({ word }: IPhoneticProps) => {
  const audioURL = findAudio(word);

  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <h1 className="font-bold text-6xl">{word.word}</h1>
        <p className="mt-4 font-medium text-xl text-[#a75fe0]">
          {word.phonetic ? word.phonetic : findPhonetic(word)}
        </p>
      </div>
      {audioURL ? <AudioWord audio={audioURL} /> : <></>}
    </div>
  );
};

export default Phonetic;
