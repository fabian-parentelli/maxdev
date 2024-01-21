import { useState, useEffect } from 'react';
import './nav.scss';

const Nav = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const navClassName = `nav ${scrolled ? 'colorVew' : 'transparent'}`;
    
    return (
        <div className={navClassName}>
            <a className='navA' href="#services">Servicios</a>
            <a className='navA' href="#trend">Tendencias</a>
        </div>
    )
};

export default Nav;