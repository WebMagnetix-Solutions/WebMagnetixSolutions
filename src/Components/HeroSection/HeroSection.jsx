
const HeroSection = () => {
    return (
        <div className="md:flex md:justify-between md:items-center mt-16 h-auto px-2 md:px-10 bg-primary">
            <div className="md:w-1/2 w-full font-secondary p-3 text-center md:text-start md:pt-3 pt-10">
                <h1 className="md:text-3xl text-2xl font-bold">Elevate Your Digital Presence</h1>
                <p className="mt-3 text-base">WebMagnetix Solutions crafts websites and web apps. We turn your ideas into digital reality, making online presence easy and impressive. Choose us for web solutions that simply make sense.</p>
            </div>
            <div className="md:w-1/2 w-full">
                <img src="./floating-image.png" alt="floating image"/>
            </div>
        </div>
    )
}

export default HeroSection
