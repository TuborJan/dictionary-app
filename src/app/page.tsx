"use client";

import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { addDictionary } from "@/store/slices/wordSlices";
import axios from "axios";
import CustomInput from "@/components/CustomInput";
import Dictionary from "@/components/Dictionary";

export default function Home() {
  const dispatch = useAppDispatch();

  const hadleSubmit = (word: string) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    if (word) {
      axios
        .get(url)
        .then((response) => {
          dispatch(addDictionary(response.data[0]));
        })
        .catch((error) => {
          alert(`Enter word in English: ${error.message}`);
        });
    }
  };

  const word = useAppSelector((state) => state.wordDictionary);

  return (
    <main className="flex max-w-3xl min-h-screen m-auto p-5 flex-col items-center ">
      <CustomInput hadleSubmit={hadleSubmit} />
      {word.word !== "" ? <Dictionary word={word} /> : <></>}
    </main>
  );
}
