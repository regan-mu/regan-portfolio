import { useState, useContext } from "react";
import { AppContext } from "@/app/context/AppContext";
import { AppContextType } from "../types";
const DarkModeToggle = () => {
    const {setDarkMode, darkModeOn} = useContext(AppContext) as AppContextType;
    return (
        <button onClick={() => setDarkMode(!darkModeOn)} className="fixed bottom-5 text-xl right-5 z-50 p-2 rounded-full shadow-sm shadow-lightBg dark:shadow-light dark:bg-gray-800 bg-gray-300">
            {!darkModeOn ? '🌙' : '☀️'}
        </button>
    )
}

export default DarkModeToggle;