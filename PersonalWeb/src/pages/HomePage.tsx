import React from "react";
import NavBar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import TechMarquee from "../components/Home/TechMarquee";
import AboutMe from "../components/Home/AboutMe";
import LatestProject from "../components/Home/LatestProject";
import MyBlog from "../components/Home/MyBlog";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";
const HomePage=()=>{
return(
    <>
    <main className="bg-gray-900">
    <NavBar/>
    <HeroSection/>
    <TechMarquee/>
    <AboutMe/>
    <LatestProject/>
    <MyBlog/>
    <Contact/>
    <Footer/>
    </main>
    
    </>
)
}
export default HomePage;