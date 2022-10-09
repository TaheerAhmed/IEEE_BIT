import React, { useEffect } from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../CSS/Societies.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Soc=()=>{
    useEffect(() => {
        Aos.init({ duration: 400 })
    })

    return(
        <div className="Societies-block">
            <div data-aos="zoom-in" style={{overflow:"hidden"}}
                >
            <div className="titular"> IEEE Societies at BIT</div>
            <Flippy className="carding"
                flipOnHover={true} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                // to use toggle method like ref.curret.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '300px', height: '200px',display:"inline-block" }} /// these are optional style, it is not necessary
            >
                <FrontSide style={{ backgroundColor: 'wheat' }} >
                    <img src="https://ieee-cas.org/files/ieeecass/cas-vector-logo-w-text-horizontal_web.svg" width="100%" height="100%" className="IMAGEES"/>
                    
                </FrontSide>
                <BackSide className="backer">
                    Data Needed???
                </BackSide>
            </Flippy>
            <Flippy className="carding"
                flipOnHover={true} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                // to use toggle method like ref.curret.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '300px', height: '200px', display: "inline-block"}} /// these are optional style, it is not necessary
            >
                <FrontSide style={{ backgroundColor: 'wheat' }} >
                        <img src="https://brand-experience.ieee.org/wp-content/uploads/2019/01/WIE_purple_pms526.png"  />
                </FrontSide>
                <BackSide className="backer">
                        IEEE women in engineering is one of the largest international professional organization dedicated to promoting women engineers and scientists and inspiring girls around the world to follow their academic interests to a career in engineering.
                </BackSide>
            </Flippy>
            </div>
        </div>
    )
}
export default Soc