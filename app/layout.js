import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "./components/navbar";
import ThemeProvider from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Darana",
  description: "Fullstack web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
