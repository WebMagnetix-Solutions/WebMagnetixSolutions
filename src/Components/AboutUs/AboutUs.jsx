
const AboutUs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-10 mt-20 font-secondary text-gray-600">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6 flex text-gray-900 justify-center flex-col items-center shadow shadow-gray-500 rounded-3xl p-3">
                    <img src="./success.svg" className="w-24" />
                    <h1 className="text-2xl font-bold">1+</h1>
                    <p>Year Of Experience</p>
                </div>
                <div className="col-span-6 flex text-gray-900 justify-center flex-col items-center shadow shadow-gray-500 rounded-3xl p-3">
                    <img src="./users.svg" className="w-24" />
                    <h1 className="text-2xl font-bold">3+</h1>
                    <p>Happy Customers</p>
                </div>
                <div className="col-span-6 flex text-gray-900 justify-center flex-col items-center shadow shadow-gray-500 rounded-3xl p-3">
                    <img src="./rate.svg" className="w-24" />
                    <h1 className="text-2xl font-bold">100%</h1>
                    <p>Completion Rate</p>
                </div>
                <div className="col-span-6 flex text-gray-900 justify-center flex-col items-center shadow shadow-gray-500 rounded-3xl p-3">
                    <img src="./projects.svg" className="w-24" />
                    <h1 className="text-2xl font-bold">3+</h1>
                    <p>Completed Project</p>
                </div>
            </div>
            <div className="p-3 md:text-start text-center md:mt-0 mt-8">
                <h1 className="text-3xl font-medium text-sky-600">About Us</h1>
                <p className="font-medium leading-8 mt-5">Elevate your digital presence with WebMagnetix Solutions, a web development firm. Our seasoned team of experts combines innovation and expertise to deliver cutting-edge solutions. Tailored to your unique needs, our client-centric approach ensures satisfaction at every step. Let&apos;s redefine your online experience together. Contact us to unlock the potential of your digital journey.</p>
            </div>
        </div>
    )
}

export default AboutUs
