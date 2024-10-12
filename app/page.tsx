"use client"
import { useContext } from "react";
import Sidebar from "./components/sections/sidebar";
import MainPageSection from "./components/sections/mainSection";
import Footer from "./components/sections/footer";
import { AppContextType } from "./components/types";
import { AppContext } from "./context/AppContext";
import DarkModeToggle from "./components/buttons/darkModeToggle";

export default function Home() {
  const {darkModeOn} = useContext(AppContext) as AppContextType;
  return (
    <div className={`${darkModeOn && 'dark'}`} >
      <main className="relative w-full h-auto bg-white text-darkBg dark:text-text  p-5 font-manrope max-w-screen-xl dark:bg-darkBg sm:p-10 2xl:py-10" >
        <DarkModeToggle />
        <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-10 lg:grid-rows-1" >
          <Sidebar />
          <MainPageSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
