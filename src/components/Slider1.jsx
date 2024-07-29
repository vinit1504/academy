/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Silder1.css"

const CarsComponent = () => {
    let sliderRef = useRef(null);
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const cars = [
        { id: 1, name: "Tesla Model S", detail: "Electric, 396 mi range", image: "tesla.jpg" },
        { id: 2, name: "BMW i8", detail: "Hybrid, 369 hp", image: "bmw.jpg" },
        { id: 3, name: "Audi e-tron", detail: "Electric, 222 mi range", image: "audi.jpg" },
        { id: 4, name: "Mercedes EQC", detail: "Electric, 259 mi range", image: "mercedes.jpg" },
        { id: 5, name: "Jaguar I-PACE", detail: "Electric, 234 mi range", image: "jaguar.jpg" },
        { id: 6, name: "Porsche Taycan", detail: "Electric, 227 mi range", image: "porsche.jpg" }
    ];

    return (
        <div className="slider-container -mt-20 sm:mt-0">
            <Slider {...settings} className='m-10'>
                {cars.map(car => (
                    <div key={car.id} className=' m-2 p-2 item-center'>
                        <div className='slid p-2 border-2 rounded-3xl h-52 w-[90%]'>                       
                        <img src={car.image} alt={car.name} className="car-image mb-2" />
                        <h3>{car.name}</h3>
                        <p>{car.detail}</p>
                        </div>
                    </div>
                ))}

            </Slider>
        </div>
    )
}

export default CarsComponent;
