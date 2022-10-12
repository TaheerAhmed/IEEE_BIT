import React ,{useEffect,useRef,useState}from 'react'
import AboutUs from '../components/AboutUs'
import Carousel from '../components/carousel'
import HomeText from '../components/HomeText'
import NavBarComp from '../components/NavBar'
import Soc from '../components/SocietiesUnderUs'
import Footer from '../components/Footer'
import '../CSS/HomeText.css'
const Home =()=>{
    
    
    return(
<div style={{overflow:"hidden"}}>
    <NavBarComp/>
    <HomeText/>
    <div className="home">
    <AboutUs/>
    <Carousel/>
    <Soc/>
    <Footer />
    </div>

</div>
    )
}
export default Home