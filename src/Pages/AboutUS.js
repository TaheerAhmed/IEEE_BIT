import React from "react";
import Footer from "../components/Footer";
import AboutText from '../components/AboutText'
import NavBarComp from "../components/NavBar";
import AboutContent from "../components/AboutContent";

const AUS=()=>{
    const HEADER="About Us"
    
    return(
        <div>
            <NavBarComp/>
            <AboutText/>
            <AboutContent/>
            <Footer/>
        </div>
    )

}
export default AUS