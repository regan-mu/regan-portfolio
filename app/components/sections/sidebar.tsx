"use client";
import Image from "next/image";
import React from "react";
import ContactCard from "../cards/contacts";
import { AiOutlineMail, AiOutlineMobile, AiOutlineEnvironment } from "react-icons/ai";
import { Socials } from "../buttons/socials";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";
import { AppContextType } from "../types";
const Sidebar = () => {
    const {toggleInfo, setToggle} = useContext(AppContext) as AppContextType;
    return (
        <aside className="rounded-xl bg-lightBg overflow-hidden h-full w-full flex flex-col gap-5 lg:pb-16 lg:col-span-2 2xl:pb-0">
            <div className="flex flex-col gap-2">
                <Image className="w-full" src="/regan.png" alt="Regan Muthomi" width={500} height={650} priority />
                <div className="px-5 pb-3 md:px-10">
                    <h1 className="text-xl font-semibold font-poppins">Regan Muthomi</h1>
                    <p className="font-light text-sm text-brand">Software Engineer</p>
                    <div className="w-full h-auto flex justify-end py-3 md:hidden">
                        <div onClick={() => {setToggle()}} className="w-10 h-10 relative rounded-lg flex justify-center items-center bg-gradient-to-bl from-lightBg to-darkBg hover:scale-105">
                            {toggleInfo ? <div className="absolute bottom-2 w-4 cursor-pointer h-4 border-[2px] border-r-0 border-b-0 border-brand rotate-45 delay-100 duration-100 hover:scale-105 "></div> : <div className="absolute top-2 w-4 cursor-pointer h-4 border-[2px] border-l-0 border-t-0 border-brand rotate-45 delay-100 duration-100 hover:scale-105 "></div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex-col gap-5 ${toggleInfo ? 'flex': 'hidden md:flex'}`}>
                <div className="flex flex-col gap-3 px-5 border-t border-gray-600 pt-5 md:px-10">
                    <ContactCard icon={<AiOutlineMobile size={24} color="#0aff9d" />} method="Phone" value="(+254) 728832625" />
                    <ContactCard icon={<AiOutlineMail size={24} color="#0aff9d" />} method="Email" value="regan.muthomi@yahoo.com" />
                    <ContactCard icon={<AiOutlineEnvironment size={24} color="#0aff9d" />} method="Location" value="Nairobi, Kenya" />
                </div>
                <div className="px-5 border-t border-gray-600 py-5 md:px-10">
                    <Socials />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;