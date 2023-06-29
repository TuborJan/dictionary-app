"use client";

import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { store } from "./store";
import Header from "@/components/Header";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <Header />
        {children}
      </Provider>
    </ThemeProvider>
  );
}
