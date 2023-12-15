import { Fragment } from "react"
import { services, technology } from "../../Constants/Stacks"

const Footer = () => {
    return (
        <Fragment>
            <div className="grid grid-cols-12 bg-[#222] mt-20 p-10 font-secondary text-white">
                
                <div className="col-span-12 md:col-span-4 xl:col-span-4 flex sm:justify-center">
                    <div>
                        <div className="flex items-center">
                            <i className="fa fa-location-dot text-2xl mr-3"></i>
                            <p>Kozhikode, Kerala, India</p>
                        </div>
                        <div className="flex items-center mt-5">
                            <i className="fa fa-envelope mr-3"></i>
                            <p>webmagnetixsolutions@gmail.com</p>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <div onClick={()=>window.open("https://github.com/WebMagnetix-Solutions", "_blank")} className="p-2 bg-white bg-opacity-10 rounded-full w-8 cursor-pointer h-8 flex justify-center items-center">
                                <i className="text-xl fab fa-github"></i>
                            </div>
                            <div onClick={()=>window.open("https://www.linkedin.com/company/webmagnetix-solutions", "_blank")} className="p-2 bg-white bg-opacity-10 rounded-full w-8 cursor-pointer h-8 flex justify-center items-center">
                                <i className="text-xl fab fa-linkedin"></i>
                            </div>
                            <div onClick={()=>window.open("https://telegram.me/WebMagnetixSolutions", "_blank")} className="p-2 bg-white bg-opacity-10 rounded-full w-8 cursor-pointer h-8 flex justify-center items-center">
                                <i className="text-xl fab fa-telegram"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4 flex sm:justify-center mt-10 md:mt-0">
                    <div>
                        <h1 className="text-xl font-medium underline-offset-[10px] underline">Technology</h1>
                        <div className="mt-6">
                            {
                                technology.map((item, index) => {
                                    return (
                                        <div key={index} className="flex items-center">
                                            <i className="fa fa-arrow-right mr-2"></i>
                                            <p>{ item }</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-4 flex md:mt-0 mt-10 sm:justify-center">
                    <div>
                        <h1 className="text-xl font-medium underline-offset-[10px] underline">Services</h1>
                        <div className="mt-6">
                            {
                                services.map((item, index) => {
                                    return (
                                        <div key={index} className="flex items-center">
                                            <i className="fa fa-arrow-right mr-2"></i>
                                            <p>{ item }</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                
            </div>
            <hr></hr>
            <div className="flex md:flex-row flex-col items-center md:justify-between bg-[#222] text-white p-3 md:px-10">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-10">
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <p className="mt-5 md:mt-0">© 2023 All rights reserved</p>
            </div>
        </Fragment>
    )
}

export default Footer
