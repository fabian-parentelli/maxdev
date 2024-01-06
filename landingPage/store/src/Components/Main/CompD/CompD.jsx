import './compD.scss';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../../data.js';

const CompD = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className='compD'>
            <h2>{data.main.compD.h2}</h2>
            <Slider {...settings} className='sliderComp'>
                <div>
                    <img className='imgCarousel' src={data.main.compD.img1} alt="Imagen 1" />
                </div>
                <div>
                    <img className='imgCarousel' src={data.main.compD.img2} alt="Imagen 2" />
                </div>
                <div>
                    <img className='imgCarousel' src={data.main.compD.img3} alt="Imagen 3" />
                </div>
                <div>
                    <img className='imgCarousel' src={data.main.compD.img4} alt="Imagen 4" />
                </div>
                <div>
                    <img className='imgCarousel' src={data.main.compD.img5} alt="Imagen 4" />
                </div>
                <div>
                    <img className='imgCarousel' src={data.main.compD.img6} alt="Imagen 4" />
                </div>
                <div>
                    <img className='imgCarousel' src={data.main.compD.img7} alt="Imagen 4" />
                </div>
                <div>
                    <img className='imgCarousel' src={data.main.compD.img8} alt="Imagen 4" />
                </div>
                {/* Agrega más imágenes según sea necesario */}
            </Slider>
        </div>
    );
};

export default CompD;