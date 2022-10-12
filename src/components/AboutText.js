
import Texty from 'rc-texty';
import '../CSS/AboutText.css';
import TweenOne from 'rc-tween-one';
import React, { useEffect, useRef, useState } from 'react'
import DOTS from 'vanta/dist/vanta.birds.min'
import * as THREE from "three"

const AboutText = () => {
    const [vantaEfect2, setVantaEffect2] = useState(null)
    const vantRef = useRef(null)
    useEffect(() => {
        if (!vantaEfect2) {
            console.log("hello")
            setVantaEffect2(DOTS({
                el: vantRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0xffecad,
                color1: 0x0,
                color2: 0x0,
                birdSize: 0.90,
                wingSpan: 6.00,
                speedLimit: 4.00,
                separation: 100.00,
                alignment: 36.00,
                cohesion: 25.00,
                THREE: THREE,
            }))
        } return () => {
            if (vantaEfect2)
                vantaEfect2.destroy();
        }
    }, [vantaEfect2])
    const [show, showing] = useState(1)
    const geInterval = (e) => {
        switch (e.index) {
            case 0:
                return 0;
            case 1:
                return 150;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                return 150 + 450 + (e.index - 2) * 10;
            default:
                return 150 + 450 + (e.index - 6) * 150;
        }
    }
    const getEnter = (e) => {
        const t = {
            opacity: 0,
            scale: 0.8,
            y: '-100%',
        };
        if (e.index >= 2 && e.index <= 6) {
            return { ...t, y: '-30%', duration: 150 };
        }
        return t;
    }

    const getSplit = (e) => {
        const t = e.split(' ');
        const c = [];
        t.forEach((str, i) => {
            c.push((
                <span key={`${str}-${i}`}>
                    {str}
                </span>
            ));
            if (i < t.length - 1) {
                c.push(<span key={` -${i}`}> </span>);
            }
        });
        return c;
    }
    return (
        <div className="combined-wrapper noselect" id="anim" ref={vantRef} >
            {show && (
                <div className="combined">
                    <div className="combined-shape">
                        <div className="shape-left">
                            <TweenOne
                                animation={[
                                    { x: 158, type: 'from', ease: 'easeInOutQuint', duration: 700 },
                                    { x: -158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                                ]}
                            />
                        </div>
                        <div className="shape-right">
                            <TweenOne
                                animation={[
                                    { x: -158, type: 'from', ease: 'easeInOutQuint', duration: 700 },
                                    { x: 158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                                ]}
                            />
                        </div>
                    </div>
                    <Texty
                        className="title"
                        type="mask-top"
                        delay={400}
                        enter={getEnter}
                        interval={geInterval}
                        component={TweenOne}
                        componentProps={{
                            animation: [
                                { x: 130, type: 'set' },
                                { x: 100, delay: 500, duration: 350 },
                                {
                                    ease: 'easeOutQuart',
                                    duration: 300,
                                    x: 0,
                                },
                                {
                                    letterSpacing: 0,
                                    delay: -300,
                                    scale: 0.9,
                                    ease: 'easeInOutQuint',
                                    duration: 1000,
                                },
                                { scale: 1, width: '100%', delay: -200, duration: 600, ease: 'easeInOutQuint' },
                            ],
                        }}
                    >
                        About Us
                    </Texty>
                    <TweenOne
                        className="combined-bar"
                        animation={{ delay: 1000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' }}
                    />
                    <Texty
                        className="content"
                        type="bottom"
                        split={getSplit}
                        delay={2200}
                        interval={30}
                    >

                        {/* IEEE Bangalore institute of Technology */}
                    </Texty>
                </div>
            )}
        </div>
    );

}
// ReactDOM.render(<AboutText/>, mountNode);
export default AboutText