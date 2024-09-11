"use client"
import { useContext } from "react";
import NavBar from "../nav/nav";
import AboutMe from "../pages/about";
import Resume from "../pages/resume";
import Articles from "../pages/articles";
import Portfolio from "../pages/portfolio";
import { AppContext} from "../../context/AppContext";
import { AppContextType } from "../types";

const MainPageSection = () => {
    const {activePage} = useContext(AppContext) as AppContextType;
    return (
        <div className="rounded-xl p-5 w-full col-span-5 bg-lightBg flex flex-col gap-10 mt-10 md:p-10 lg:mt-0">
            <NavBar />
            {activePage === "About Me" && <AboutMe />}
            {activePage === "Resume" && <Resume />}
            {activePage === "Articles" && <Articles />}
            {activePage === "Portfolio" && <Portfolio />}
        </div>
    )
}

export default MainPageSection;