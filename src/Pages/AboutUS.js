import React from "react";
import Footer from "../components/Footer";
import AboutText from '../components/AboutText'
import NavBarComp from "../components/NavBar";

const AUS=()=>{
    const HEADER="About Us"
    return(
        <div>
            <NavBarComp/>
            <AboutText/>
            <Footer/>
        </div>
    )

}
export default AUS