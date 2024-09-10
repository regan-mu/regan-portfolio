import Link from "next/link";
import Image from "next/image";
export const Socials = () => {
    return (
        <div className="flex gap-5">
            <Link href="#" rel="noopener noreferrer" target="_blank" className="bg-gray-300 rounded-full w-7 h-7 flex items-center justify-center hover:bg-brand">
                <Image className="w-4 h-4 " src="/linkedin.svg" alt="linkedin" width={48} height={48} />
            </Link>
            <Link href="#" rel="noopener noreferrer" target="_blank" className="bg-gray-300 rounded-full w-7 h-7 flex items-center justify-center hover:bg-brand">
                <Image className="w-4 h-4" src="/twitter.svg" alt="twitter" width={48} height={48} />
            </Link>
            <Link href="#" rel="noopener noreferrer" target="_blank" className="bg-gray-300 rounded-full w-7 h-7 flex items-center justify-center hover:bg-brand">
                <Image className="w-4 h-4" src="/github.svg" alt="linkedin" width={48} height={48} />
            </Link>
            <Link href="https://medium.com/@regansomi" rel="noopener noreferrer" target="_blank" className="bg-gray-300 rounded-full w-7 h-7 flex items-center justify-center hover:bg-brand">
                <Image className="w-4 h-4" src="/medium.svg" alt="linkedin" width={48} height={48} />
            </Link>
        </div>
    )
}