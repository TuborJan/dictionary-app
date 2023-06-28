import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type dictionary = {
  word: string;
  phonetic?: string;
  phonetics?: Phonetic[];
  origin?: string;
  meanings?: Meaning[];
};

type Phonetic = {
  text: string;
  audio?: string;
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
};

type Definition = {
  definition: string;
  example: string;
  synonyms: any[];
  antonyms: any[];
};

const initialState = {
  word: "",
} as dictionary;

export const wodrDictionary = createSlice({
  name: "wordDictionary",
  initialState,
  reducers: {
    addDictionary: (_, action: PayloadAction<dictionary>) => {
      return action.payload;
    },
  },
});

export const { addDictionary } = wodrDictionary.actions;
export default wodrDictionary.reducer;
