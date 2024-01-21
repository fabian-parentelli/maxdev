import React, { useState, useEffect } from 'react';
import './us.scss';
import { BoxAnRight } from '../../BoxAnimate/BoxAnimate';

const Us = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY)
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const lineWidth = Math.min(280, scrollPosition);

    return (
        <div className='us' id='us'>
            <div className='usLeft'>

                <div className='usTextAndLine'>
                    <p>Inmobiliaria Fantasia</p>
                    <div className='usLine' style={{ width: `${lineWidth}px` }}></div>
                </div>

                <div className='usUs'>
                    <h2>Nosotros</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse cumque reiciendis temporibus debitis culpa
                        atque totam labore, eius vero quasi voluptates eveniet doloribus neque perferendis, ullam ratione incidunt
                        iste voluptas.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at voluptates vel ipsum, consectetur id
                        dolore, doloribus quod libero excepturi aliquam nisi. Excepturi repudiandae molestiae necessitatibus suscipit
                        maiores, officiis laudantium.
                    </p>
                </div>
                <BoxAnRight>
                    <p className='usEmail'>rrhh@fantasia.com</p>
                </BoxAnRight>
            </div>

            <div className='usRight'>
                <img className='usImgBack' src="usBack.jpg" alt="usBack" />
                <img className='usimgFront' src="usFront.jpg" alt="usFront" />
            </div>
        </div>
    );
};

export default Us;
