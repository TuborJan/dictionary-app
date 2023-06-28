import { dictionary } from "@/store/slices/wordSlices";

export const findAudio = (word: dictionary) => {
  if (word.phonetics) {
    return word.phonetics.find((phonetic) => phonetic.audio)?.audio;
  }
};
