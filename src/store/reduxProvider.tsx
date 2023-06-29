"use client";

import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { store } from "./store";
import Header from "@/components/Header";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <Header />
        {children}
      </ThemeProvider>
    </Provider>
  );
}
