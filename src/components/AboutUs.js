import React, { useEffect } from "react";
import '../CSS/AboutUs.css'
import Aos from "aos"
import "aos/dist/aos.css"

const AboutUs=()=>{
    useEffect(()=>{
        Aos.init({duration:400})
    })
    return(
        <div className="container-about">
            <div data-aos="zoom-in-down">    
        <div className="content-head">About Us</div>
        <div className="content-about">
                    IEEE Student branch of  Bangalore Institute of Technology  endeavors to enhance the learning experience of the student community in BIT.
               In the year 2023 IEEE BIT Student branch plan to provide different social, cultural and technical events for the students throughout the year.
               Our Mission is to foster inspire, engage, enhance and elevate makes IEEE members academically and Industrial expertise.
               
                    The IEEE Society of BIT entitles you a wide range of amazing opportunities to enhance your capabilities and potential. It promotes our intellectual and wellness interests with the help of outstanding events by the most esteemed and knowledgeable guests .
                    It provides you with a never- before opportunity of participating In the industrial visits to the most esteemed organizations.
        </div></div>
    </div>)
}
export default AboutUs