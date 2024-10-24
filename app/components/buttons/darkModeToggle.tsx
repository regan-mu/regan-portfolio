import { useState, useContext } from "react";
import { AppContext } from "@/app/context/AppContext";
import { AppContextType } from "../types";
const DarkModeToggle = () => {
    const {setDarkMode, darkModeOn} = useContext(AppContext) as AppContextType;
    return (
        <button onClick={() => setDarkMode(!darkModeOn)} className="w-14 h-14 fixed bottom-5 text-xl right-5 z-50 p-1 rounded-full shadow-sm shadow-lightBg dark:shadow-gray-500 dark:bg-gray-800 bg-gray-300">
            {!darkModeOn ? '🌙' : '☀️'}
        </button>
    )
}

export default DarkModeToggle;