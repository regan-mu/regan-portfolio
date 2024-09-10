"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useContext } from "react";
import {AppContext} from "../../context/AppContext";
import { AppContextType } from "../types";


const MoreArticles = () => {
    const {setPage} = useContext(AppContext) as AppContextType
    return (
        <button onClick={() => {setPage("Articles")}} className="gap-1 cursor-pointer flex h-max items-center text-brand hover:scale-105">
            More Articles
            <AiOutlineArrowRight color={"#0aff9d"} size={20} />
        </button>
    )
}

export default MoreArticles;