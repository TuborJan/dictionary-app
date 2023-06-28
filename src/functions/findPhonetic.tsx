import { dictionary } from "@/store/slices/wordSlices";

export const findPhonetic = (word: dictionary) => {
  if (word.phonetics) {
    return word.phonetics.find((phonetic) => phonetic.text)?.text;
  }
};
