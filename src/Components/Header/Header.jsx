
const Header = () => {
    return (
        <div className="fixed top-0 w-screen bg-white shadow shadow-gray-400 h-16 flex justify-between items-center px-2 md:px-10">
            <div className="flex items-center">
                <img src="./logo.png" alt="logo" className="w-14 h-14" />
                <h3 className="font-mono text-xl">WebMagnetix</h3>
            </div>
            <div className="flex gap-3">
                <div onClick={()=>window.open("https://github.com/WebMagnetix-Solutions", "_blank")} className="p-2 bg-black bg-opacity-20 rounded-full w-8 cursor-pointer h-8 flex justify-center items-center">
                    <i className="text-xl fab fa-github"></i>
                </div>
                <div onClick={()=>window.open("https://www.linkedin.com/company/webmagnetix-solutions", "_blank")} className="p-2 bg-black bg-opacity-20 rounded-full w-8 cursor-pointer h-8 flex justify-center items-center">
                    <i className="text-xl fab fa-linkedin"></i>
                </div>
                <div onClick={()=>window.open("https://telegram.me/WebMagnetixSolutions", "_blank")} className="p-2 bg-black bg-opacity-20 rounded-full w-8 cursor-pointer h-8 flex justify-center items-center">
                    <i className="text-xl fab fa-telegram"></i>
                </div>
                <button onClick={()=>window.open("https://telegram.me/thenamevishnu", "_blank")} className="bg-orange-600 text-white p-1 px-2 rounded-full">Contact Us</button>
            </div>
        </div>
    )
}

export default Header
