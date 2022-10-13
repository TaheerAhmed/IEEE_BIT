import React ,{useEffect}from "react";
import details from '../assets/details'
import Aos from "aos"
import "aos/dist/aos.css"
import '../CSS/Team2022.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TeamBuilder=()=>{
    useEffect(() => {
        Aos.init({ duration: 400 })
    })
    const getColumnsForRow = () => {
        let items = details.map((item) => {
            return (
                <Col >
                    <Flippy className="carder"
                        data-aos="zoom-out"
                        data-aos-easing="ease-in-sine"
                        flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="vertical" // horizontal or vertical
                        // to use toggle method like ref.curret.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        style={{ width: '300px', height: '200px', display: "inline-block" }} /// these are optional style, it is not necessary
                    >
                        <FrontSide className="frontier  ">

                            <img src={item.image} width="100%" height="100%" />
                            {/* <div className="stylingName">{item.NAME}</div> */}
                            {/* <div
                                className="img-wrapp"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                }}
                            >
                                <div className='CardRole noselect'>{item.NAME}</div>

                            </div> */}


                        </FrontSide>
                        <BackSide className="backerr">
                            <div>{item.NAME}</div><br></br>
                            <div>{item.ROLE}</div>

                        </BackSide>
                    </Flippy>
                </Col>
            );

        });
        return items
    }
   
   
   
    return(
        <div className="entire">
            <Row xs={1} md={2} lg={4}>
                {getColumnsForRow()}
            </Row>
        </div>
    )
}
export default TeamBuilder