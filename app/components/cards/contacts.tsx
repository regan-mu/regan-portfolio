import React, { ReactNode } from 'react';

const ContactCard = ({icon, method, value}: {icon: ReactNode, method: string, value: string}) => {
    return (
        <div className="flex gap-3 items-center h-14 w-full">
            <div className="flex h-full w-12 justify-center items-center bg-gradient-to-bl from-lightBg to-bg rounded-lg ">
                {icon}
            </div>
            <div className="">
                <p className="uppercase text-gray-400 font-semibold text-sm">{method}</p>
                <p className="font-light text-clip lg:text-xs">{value}</p>
            </div>
        </div>
    )
}

export default ContactCard;