import './nav.scss';
import data from '../../data.js';
import { useState } from 'react';
import { useEffect } from 'react';

const Nav = () => {

    const [ scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navClassName = `nav ${scrolled ? 'colorVew' : 'transparent'}`;
    const navListClassName = `navList ${isMenuOpen ? 'navListOpen' : 'navListClosed'}`;
    
    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <div className={navClassName}>
            <img className='logo' src={data.logo} alt="logo" />
            <p>{data.descrption}</p>
            <div className={navListClassName}>
               {data.nav.itemA && <a href='#home' onClick={toggleMenu}>{data.nav.itemA}</a>}
               {data.nav.itemB && <a href='#service' onClick={toggleMenu}>{data.nav.itemB}</a>}
               {data.nav.itemC && <a href='#us' onClick={toggleMenu}>{data.nav.itemC}</a>}
               {data.nav.itemD && <a href='#form' onClick={toggleMenu}>{data.nav.itemD}</a>}
            </div>
            <img className='menu' onClick={toggleMenu} src="menu.png" alt="menu" />
        </div>
    );
};

export default Nav;