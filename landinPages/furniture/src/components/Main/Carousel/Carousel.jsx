import './carousel.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';

const Carousel = () => {

    const isMobil = useMediaQuery({ maxWidth: 767 });

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: isMobil ? 1 : 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <Slider {...settings} className='carousel'>
            <div>
                <img className='imgCar' src="carousel1.jpg" alt="Imagen 1" />
            </div>
            <div>
                <img className='imgCar' src="carousel2.jpg" alt="Imagen 2" />
            </div>
            <div>
                <img className='imgCar' src="carousel3.jpg" alt="Imagen 3" />
            </div>
            <div>
                <img className='imgCar' src="carousel4.jpg" alt="Imagen 4" />
            </div>
            <div>
                <img className='imgCar' src="carousel1.jpg" alt="Imagen 1" />
            </div>
            <div>
                <img className='imgCar' src="carousel2.jpg" alt="Imagen 2" />
            </div>
            <div>
                <img className='imgCar' src="carousel3.jpg" alt="Imagen 3" />
            </div>
            <div>
                <img className='imgCar' src="carousel4.jpg" alt="Imagen 4" />
            </div>
        </Slider>
    );
};

export default Carousel;