import './header.scss';
import { BoxAnLeft, BoxAnRight } from '../BoxAnimate/BoxAnimate';

const Header = () => {
    return (
        <div className='header' id='home'>
            <h2></h2>
            <BoxAnLeft>
                <h1>Fantasia</h1>
            </BoxAnLeft>
            <div className='divHeader'>
                <p>DONDE TU CASA SE HACE RELIDAD</p>
                <div className='line'></div>
            </div>
            <img src="header.png" alt="header" />
            <BoxAnRight>
                <p>hola@fantasia.com</p>
            </BoxAnRight>
        </div>
    );
};

export default Header;