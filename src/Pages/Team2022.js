import React from "react";
import NavBarComp from '../components/NavBar'
import details from '../assets/details'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer'
import '../CSS/Team2022.css'
// import '../CSS/Team2022.css'
console.log(details)
const Team2022=()=>{
    const getColumnsForRow = () => {
        let items = details.map((item) => {
            return (
                <Col>
                    <Flippy className="carder"
            flipOnHover={true} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            // to use toggle method like ref.curret.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '300px', height: '200px', display: "inline-block" }} /// these are optional style, it is not necessary
        >
            <FrontSide className="frontier  ">
                            {/* <div style={{ backgroundImage: `url(${item.image})`,zIndex:100}}>
                            </div> */}
                            <img src={item.image} width="100%" height="100%"/>

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
    <div className="Cnt">
        <NavBarComp/>
        <div >
        <Row xs={1}  md={2} lg={4}>
            {getColumnsForRow()}
        </Row>
</div>
<Footer/>
    </div>
)
}
export default Team2022

