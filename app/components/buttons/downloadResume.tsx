import React from "react";
import useDownloader from "react-use-downloader";


const DownloadResume = () => {
    const {download} = useDownloader();
    const fileUrl: string = `${process.env.NEXT_PUBLIC_BASE_URL}/ReganMuthomiResume.pdf`;
    const fileName: string = "ReganMuthomiResume.pdf"
    return (
        <button onClick={() => download(fileUrl, fileName)} className="w-max border border-transparent bg-brand dark:bg-transparent dark:border-brand dark:text-brand py-2 px-5 rounded-md cursor-pointer duration-100 delay-75 hover:scale-[1.03]">
            Download Resume
        </button>
    )
}
 export default DownloadResume;