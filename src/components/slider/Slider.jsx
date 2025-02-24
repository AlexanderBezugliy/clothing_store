import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { sliderItems } from "../../data";

import './Slider.css';



const Slider = () => {
    const [slideIndex, setSlideindex] = useState(0);

    const hendleClick = (direction) => {
        if (direction === "left") {
            setSlideindex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
        } else if (direction === "right") {
            setSlideindex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
        }
    }

    return (
        <div className="slider-container">
            <div 
                className="arrow" 
                direction="left" 
                onClick={() => hendleClick('left')}
                >
                <IoMdArrowDropleft className="icon" />
            </div>

            <div 
                className="slider-wrapper" 
                style={{transform: `translateX(${slideIndex * -100}vw)`}}
            >
                {sliderItems.map(item => {
                    return (
                        <div
                            key={item.id}
                            className="slide"
                            style={{ backgroundColor: `#${item.bg}` }}
                        >
                            <div className="img-container">
                                <img src={item.img} className="img" alt='img' />
                            </div>

                            <div className="info-container">
                                <h1 className="title">{item.title}</h1>
                                <p className="desc">{item.desc}</p>
                                <Link to="/products">
                                    <button className="button">Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div 
                className="arrow" 
                direction="right" 
                onClick={() => hendleClick('right')}
                >
                <IoMdArrowDropright className="icon" />
            </div>
        </div>
    );
}

export default Slider;