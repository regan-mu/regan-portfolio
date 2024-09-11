import Image from "next/image";
import React from "react";
import ContactCard from "../cards/contacts";
import { AiOutlineMail, AiOutlineMobile, AiOutlineEnvironment } from "react-icons/ai";
import { Socials } from "../buttons/socials";
const Sidebar = () => {
    return (
        <aside className="rounded-xl bg-lightBg overflow-hidden h-full w-full flex flex-col gap-5 lg:pb-16 lg:col-span-2 2xl:pb-0">
            <div className="flex flex-col gap-2">
                <Image className="w-full" src="/regan.png" alt="Regan Muthomi" width={500} height={650} priority />
                <div className="px-10">
                    <h1 className="text-xl font-semibold font-poppins">Regan Muthomi</h1>
                    <p className="font-light text-sm text-brand">Software Engineer</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 px-10 border-t border-gray-600 pt-5">
                <ContactCard icon={<AiOutlineMobile size={24} color="#0aff9d" />} method="Phone" value="(+254) 728832625" />
                <ContactCard icon={<AiOutlineMail size={24} color="#0aff9d" />} method="Email" value="regan.muthomi@yahoo.com" />
                <ContactCard icon={<AiOutlineEnvironment size={24} color="#0aff9d" />} method="Location" value="Nairobi, Kenya" />
            </div>
            <div className="px-10 border-t border-gray-600 py-5">
                <Socials />
            </div>
        </aside>
    )
}

export default Sidebar;