import { Fragment } from "react"
import Header from "../Header/Header"
import HeroSection from "../HeroSection/HeroSection"
import TechStacks from "../TechStacks/TechStacks"
import AboutUs from "../AboutUs/AboutUs"
import Footer from "../Footer/Footer"

const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <TechStacks />
            <AboutUs />
            <Footer />
        </Fragment>
    )
}

export default Home
