import { dictionary } from "@/store/slices/wordSlices";

interface IArguments {
  word: dictionary;
}

export const findAudio = (word: dictionary) => {
  if (word.phonetics) {
    return word.phonetics.find((phonetic) => phonetic.audio)?.audio;
  }
};
