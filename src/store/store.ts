import { configureStore } from "@reduxjs/toolkit";
import wordDictionary from "./slices/wordSlices";

export const store = configureStore({
  reducer: {
    wordDictionary,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
