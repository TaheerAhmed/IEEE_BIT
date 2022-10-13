import React from "react";
import NavBarComp from '../components/NavBar'
import details from '../assets/details'
import Footer from '../components/Footer'
import '../CSS/Team2022.css'
import TeamHeading from'../components/TeamHeading'
import TeamBuilder from "../components/TeamBuilder";

// import '../CSS/Team2022.css'
console.log(details)
const Team2022 = () => {
    return (
        <div className="Cnt">
            <NavBarComp />
            <TeamHeading/>
            <TeamBuilder/>
            <Footer />
        </div>
    )
}
export default Team2022

