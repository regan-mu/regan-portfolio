"use client"
import { useState, createContext } from "react";
import React from "react";
import { AppContextType } from "../components/types"



export const AppContext = createContext<AppContextType | null>(null);


const ContextProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
    const [activePage, setActivePage] = useState<string>("About Me");
    const setPage = (page: string) => {
        setActivePage(page);
    }
    return (
        <AppContext.Provider
            value={{
                activePage,
                setPage
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
