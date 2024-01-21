import './nav.scss';
import { useEffect, useState } from 'react';

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navClassName = `nav ${scrolled ? 'colorVew' : 'transparent'}`;
    const navListClassName = `navList ${isMenuOpen ? 'navListOpen' : 'navListClosed'}`;

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <div className={navClassName}>
            <img className='logo' src='logo.png' alt="logo" />
            <p>Erika Valeria || Odontóloga</p>
            <div className={navListClassName}>
                <a href='#home' onClick={toggleMenu}>Inicio</a>
                <a href='#service' onClick={toggleMenu}>Tratamientos</a>
                <a href='#us' onClick={toggleMenu}>Nosotros</a>
                <a href='#form' onClick={toggleMenu}>Contacto</a>
            </div>
            <img className='menu' onClick={toggleMenu} src="menu.png" alt="menu" />
        </div>
    );
};

export default Nav;