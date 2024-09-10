import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { AppContextType } from "../types";

const NavBar = () => {
    const {activePage, setPage} = useContext(AppContext) as AppContextType;
    return (
        <nav className="flex w-full justify-between items-center">
            <h2 className="text-3xl font-poppins relative font-semibold after:bg-brand after:w-14 after:h-1 after:absolute after:rounded-md after:-bottom-2 after:left-0">{activePage}</h2>
            <div className="py-3 h-full w-max bg-gray-500 rounded-md px-10">
                <ul className="list-none flex gap-10">
                    <li onClick={() => {setPage("About Me")}} className={`cursor-pointer duration-75 delay-75 ${activePage === "About Me" ? "text-brand": "hover:text-gray-400"}`}>About</li>
                    <li onClick={() => {setPage("Resume")}} className={`cursor-pointer duration-75 delay-75 ${activePage === "Resume" ? "text-brand": "hover:text-gray-400"}`}>Resume</li>
                    <li onClick={() => {setPage("Articles")}} className={`cursor-pointer duration-75 delay-75 ${activePage === "Articles" ? "text-brand": "hover:text-gray-400"}`}>Articles</li>
                    <li onClick={() => {setPage("Portfolio")}} className={`cursor-pointer duration-75 delay-75 ${activePage === "Portfolio" ? "text-brand": "hover:text-gray-400"}`}>Portfolio</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;