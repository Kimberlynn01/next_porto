"use client";

import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import { Menu, X, Columns2 } from "lucide-react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className={isDarkMode ? "bg-zinc-950" : "bg-white"}>
        <div className="flex h-screen overflow-hidden relative">
          <div
            className={`
            fixed inset-y-0 left-0 z-50 transform 
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            transition-transform duration-300 ease-in-out
            md:relative md:translate-x-0 flex-none
          `}
          >
            <Sidebar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          </div>

          {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />}

          <main className="flex-1 overflow-y-auto bg-white dark:bg-zinc-950 relative">
            <div className="md:hidden p-4 flex items-center bg-white dark:bg-zinc-950 border-b dark:border-zinc-800">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-zinc-600 dark:text-zinc-400">
                {isSidebarOpen ? <X size={24} /> : <Columns2 size={24} />}
              </button>
            </div>

            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
