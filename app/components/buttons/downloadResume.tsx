import React from "react";
import useDownloader from "react-use-downloader";


const DownloadResume = () => {
    const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();
    const fileUrl: string = "ReganMuthomi-SE-Resume.pdf";
    const fileName: string = "ReganMuthomi-Resume.pdf"
    return (
        <button onClick={() => download(fileUrl, fileName)} className="w-max border border-brand text-brand py-2 px-5 rounded-md cursor-pointer duration-100 delay-75 hover:scale-[1.03]">
            Download Resume
        </button>
    )
}
 export default DownloadResume;