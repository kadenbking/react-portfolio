import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeContext";
import NavigationWrapper from "../components/NavigationWrapper";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Kaden King Portfolio",
  description: "Personal portfolio website of Kaden King",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition-all bg-white dark:bg-extraDarkBlue min-h-screen`}>
        <ThemeProvider>
          <NavigationWrapper>{children}</NavigationWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
