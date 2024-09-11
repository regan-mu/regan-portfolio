"use client"
import { useState, createContext } from "react";
import React from "react";
import { AppContextType } from "../components/types"


export const AppContext = createContext<AppContextType | null>(null);


const ContextProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
    const [activePage, setActivePage] = useState<string>("About Me");
    const [toggleInfo, setToggleInfo] = useState<boolean>(false);

    const setPage = (page: string) => {
        setActivePage(page);
    }

    const setToggle = () => {
        setToggleInfo(!toggleInfo);
    }

    return (
        <AppContext.Provider
            value={{
                activePage,
                setPage,
                toggleInfo,
                setToggle
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const ContextWrapper:React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <ContextProvider>
            {children}
        </ContextProvider>
    )
}
