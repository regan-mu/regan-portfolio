const Footer = () => {
    const year = new Date()
    return (
        <footer className="w-full h-max flex flex-col items-center mt-5 bg-lightBg rounded-xl py-5 text-sm font-light text-gray-300">
            <p>Made with 💖 by Regan Muthomi</p>
            <p className="text-xs italic">© {year.getFullYear()}</p>
        </footer>
    )
}

export default Footer;