import React from 'react'
import '../CSS/AboutUs.css'
import blr from '../images/blr.png'
import IEEELOGO from '../images/IEEELOGO.png'
import logo from '../images/logo.png'

const AboutContent = () => {
    const IEEEDATA = "IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities.IEEE brings engineers, researchers, scientists and others involved in circuits and systems applications access to the industry's most essential technical information, networking opportunities, career development tools and many other exclusive benefits."
    const IEEEDATA2 = "IEEE its more than 400,000 members in more than 160 countries, widely referenced publications, conferences, technological standards, and professional and educational events, IEEE and its members encourage a worldwide community to create for a better tomorrow.Local members with similar technical interests engage in professional exchange through the 10 regional chapters in the United States, Canada, Europe, the Middle East, Africa, Latin America, Asia, Australia and the Pacific .IEEE is the world's most trusted \"voice\" for engineering, computer, and technology news."
    
    return (
        <div><div className="content-about">
            <div><img className="blrImage" src={IEEELOGO}></img></div>
            <div className='content-about'>
            {IEEEDATA}
            <div>l</div>
            {IEEEDATA2}
</div>
        </div>
        <div className='blrSection'>
                              
                <div className='content-about2'>
                    <div>
                        <img src={blr} className="blrImage" />
                    </div>  IEEE Bangalore Section was established in 1977 and is one of the most vibrant and dynamic IEEE Section across globe.
                    Over the years the strength of the section has grown steadily and currently the Section membership stands more than 10,000 members and we conducted over 2200 high-impact activities in the year 2021.
                    <div></div>
                    Bangalore Section has  3 Subsections (Mangalore, Mysore & North Karnataka), 22 Society Chapters (very few sections across the globe have these many), and 3 affinity groups (Young Professional, Women in Engineering, and Life Member).
                     The section has 100+ active and dynamic student branches. Student Branches have been at the forefront of conducting various activities for the benefit of its student members. Section regularly conducts Branch counselors and chapter chair meetings.

                </div>
        </div>
            <div className="content-about">
                <div><img className="blrImage" src={logo}></img></div>
                <div className='content-about'>
                    {IEEEDATA}
                    <div>l</div>
                    {IEEEDATA2}
                </div>

            </div>
        </div>

    )
}
export default AboutContent