import { ReduxProvider } from "@/store/reduxProvider";
import "./globals.css";
import { PT_Serif } from "next/font/google";

const serif = PT_Serif({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Dictionary app",
  description: "dictionary web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={serif.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
