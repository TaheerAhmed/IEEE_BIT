import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/carousel3d.css';
import Aos from "aos"
import "aos/dist/aos.css"
import Akp from '../images/akp.jpg'
import Bhumika from '../images/Bhumika.jpg'
import RK from '../images/rk.jpg'
import Chitra from '../images/ChP.jpg'
import Sree from '../images/svk.jpg'
import Ashray from '../images/AH.jpg'
import mta from '../images/MTA.jpeg'

// const currentDpr = window.devicePixelRatio;
// const defaultDpr = 2; // sketch 里用的是 iphone 6 尺寸;
const dpr = 0.5;// currentDpr / defaultDpr;
class Carousel3d extends React.PureComponent {
    static propTypes = {
        children: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        onChange: PropTypes.func,
        tilt: PropTypes.string,
        duration: PropTypes.string,
        ease: PropTypes.string,
        blurIncrease: PropTypes.number,
        opacityDecline: PropTypes.number,
        opacityBasics: PropTypes.number,
        moveRange: PropTypes.number,
        childMaxLength: PropTypes.number,
        perspective: PropTypes.number,
        z: PropTypes.number,
        current: PropTypes.number,
    }

    static defaultProps = {
        onChange: () => { },
        tilt: '5rem',
        duration: '.45s',
        ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        blurIncrease: 8,
        opacityDecline: 0.1,
        opacityBasics: 0.5,
        moveRange: 2,
        childMaxLength: 6,
        perspective: 2800,
        z: 800,
        current: 0,
    };

    constructor(props) {
        super(props);
        this.setLengthAndAngle(props);
        this.state = {
            rotate: -props.current * this.angle,
            current: props.current,
            transition: 'none',
        };
    }

    componentDidMount() {
        this.w = document.body.clientWidth;
        window.addEventListener('mouseup', this.onTouchEnd);
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            const { current, children } = this.props;
            if (
                (current !== this.state.current && current !== prevProps.current)
                || (React.Children.toArray(children).length !== React.Children
                    .toArray(prevProps.children).length)
            ) {
                this.setLengthAndAngle(this.props);
                // eslint-disable-next-line
                this.setState({
                    current: this.props.current,
                    rotate: -this.props.current * this.angle,
                    transition: `transform ${this.props.duration} ${this.props.ease}`,
                });
            }
        }
        Aos.init({ duration: 400 })
    }

    onTouchStart = (e) => {
        if (e.touches && e.touches.length > 1 || this.length <= 1) {
            return;
        }
        this.startX = e.pageX || e.touches[0].pageX;
        this.startRotate = Math.round(this.state.rotate / this.angle) * this.angle; // 偏移修复;
    }

    onTouchMove = (e) => {
        if (e.touches && e.touches.length > 1 || this.length <= 1 || !this.startX) {
            return;
        }
        const x = e.pageX || e.touches[0].pageX;
        const differ = (x - this.startX) * this.props.moveRange; // 幅度加大；
        const rotate = this.startRotate + differ / this.w * this.angle;
        const r = (Math.abs(Math.ceil(this.state.rotate / 360)) * 360 - rotate) % 360;
        const current = Math.round(r / this.angle) % this.length;
        this.setState({
            rotate,
            current,
            transition: 'none',
        }, () => {
            this.props.onChange({
                current,
                rotate,
                eventType: 'move',
            });
        });
    }

    onTouchEnd = (e) => {
        if (e.changedTouches && e.changedTouches.length > 1 || this.length <= 1 || !this.startX) {
            return;
        }
        const x = e.pageX || e.changedTouches[0].pageX;
        const differ = x - this.startX;
        const { current, rotate } = this.state;
        const n = differ > 0 ? 1 : -1;
        const newRotate = this.startRotate + n * this.angle
            * Math.round(Math.abs((rotate - this.startRotate) / this.angle));
        this.setState({
            rotate: newRotate,
            transition: `transform ${this.props.duration} ${this.props.ease}`,
        }, () => {
            this.startX = null;
            this.props.onChange({
                current,
                rotate: newRotate,
                eventType: 'end',
            });
        });
    }

    setLengthAndAngle = (props) => {
        this.length = React.Children.toArray(props.children).length;
        this.length = this.length > props.childMaxLength ? props.childMaxLength : this.length;
        this.angle = 360 / this.length;
    }

    getAnimStyle = (n, length) => {
        const { opacityBasics, opacityDecline, blurIncrease } = this.props;
        const center = length / 2;
        const i = n > center ? center * 2 - n : n;
        let opacity = 1 - ((i - 1) * opacityDecline + opacityBasics * (n ? 1 : 0));
        opacity = opacity < 0.1 ? 0.1 : opacity;
        const d = {
            opacity,
        };
        if (blurIncrease) {
            d.filter = `blur(${i * blurIncrease}px)`;
        }
        return d;
    }

    getChildrenToRender = (children) => {
        const { childMaxLength, z } = this.props;
        const newChildren = React.Children.toArray(children);
        const length = newChildren.length;
        const zDpr = z * dpr;
        return newChildren.map((item, i) => {
            console.log(item)
            if (i >= childMaxLength) {
                return null;
            }
            const transform = `rotateY(${this.angle * i}deg) translateZ(${zDpr}px) rotateY(-${this.angle * i}deg) `;
            const animStyle = this.getAnimStyle(
                Math.abs(this.state.current - i),
                length > childMaxLength ? childMaxLength : length
            );
            const style = {
                transform,
                // opacity: animStyle.opacity, 留坑，preserve-3d 不可以与 opacity 同时使用，排查了一下午
            };
            return (
                <div
                    className="itemWrapper"
                    key={item.key}
                    style={style}
                >
                    <div
                        className="rotateLayer"
                        style={{
                            transform: `rotateY(${-this.state.rotate}deg)`,
                            transition: this.state.transition,
                        }}
                    >
                        <div
                            className="bgAndBlurLayer"
                            style={{ ...animStyle }}
                        >
                            {/* transform 与 filter 的距阵冲突，图层分离 */}
                            <div className="contentLayer" style={{ opacity: this.state.current === i ? 1 : 0 }}>
                                {item}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        const { onChange, ...props } = this.props;
        const {
            children, tilt, style, z, perspective,
        } = props;
        const zDpr = z * dpr;
        const perspectiveDpr = perspective * dpr;
        const childrenToRender = this.getChildrenToRender(children, perspective);
        [
            'tilt',
            'duration',
            'ease',
            'blurIncrease',
            'opacityDecline',
            'opacityBasics',
            'moveRange',
            'childMaxLength',
            'perspective',
            'z',
            'current',
        ].forEach((k) => delete props[k]);
        return (
            <div 
                {...props}
                onTouchStart={this.onTouchStart}
                onMouseDown={this.onTouchStart}
                onTouchMove={this.onTouchMove}
                onMouseMove={this.onTouchMove}
                onTouchEnd={this.onTouchEnd}
                onMouseUp={this.onTouchEnd}
            >
                <div className="carousel-wrapper">
                    <div
                        className="carousel"
                        style={{
                            ...style,
                            perspective: perspectiveDpr,
                            transform: `translateY(-${tilt}) scale(${(perspectiveDpr - zDpr) / perspectiveDpr})`,
                        }}
                    >
                        <div 
                            className="carouselContent"
                            style={{
                                transform: `translateY(${tilt}) rotateY(${this.state.rotate}deg)`,
                                transition: this.state.transition,
                            }}
                        >
                            {childrenToRender}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const imgWrapper = [
    { img:'http://edu.ieee.org/in-bit/wp-content/uploads/sites/222/Dr.-Jalaja-S-Assistant-Professor1.jpg',role:"Branch Counselor",Name:"Dr Jalaja S"},
    {img:Akp,role: "Chairman", Name: "Akhilesh PR"},
    {
        img: Bhumika, role: "Secretary", Name: "Bhumika D"},
    {
        img: mta, role: "Web Master", Name: "Mohammed Taheer Ahmed"
},
    {
        img: RK, role: "Student Representative", Name: "Reyhan"
},
    {
        img: Chitra, role: "Women in Engineering Chair", Name: "Chitra Padikar"},
    {
        img: Ashray, role: "Industry Representative", Name: "Ashray Hegde"
    },
    {
        img: Sree, role: "MD Chair", Name: "M Sree Vathsa Kashyap"
    }
];

export default function Carousel() {
    const children = imgWrapper.map((src, i) =>(
        <div
            key={i.toString()}
            className="img-wrapper"
            style={{
                backgroundImage: `url(${src.img})`,
            }}
        >
            <div className='CardRole noselect'>{src.Name}<br></br>{src.role}</div>

        </div>
    ));
    return (
        <div >
            
        <div  className="carousel-demo-wrapper">
                <div data-aos="zoom-in"
                    data-aos-easing="ease-in-sine" className='CarouselHeader'>Core Team Members</div>
                <Carousel3d data-aos="zoom-in" 
                    data-aos-easing="ease-in-sine" className="carousel-demo" childMaxLength={8}>
                {children}
            </Carousel3d>
        </div>
        </div>
    );
}