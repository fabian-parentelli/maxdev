import { BoxAnLeft, BoxAnRight } from '../BoxAnimate/BoxAnimate';
import './header.scss';

const Header = () => {
    return (
        <div className='header' id='home'>
            <BoxAnRight>
                <div className='headerTitle'>
                    <h1>La Bella</h1>
                    <h3>Muebles a tu medida</h3>
                </div>
            </BoxAnRight>
            <img className='arm' src="arm.png" alt="armChild" />
            <img className='green' src="greenline.png" alt="lineGreen" />
            <img className='grayA' src="grayline.png" alt="lineGray" />
            <img className='grayB' src="grayline2.png" alt="lineGray" />
        </div>
    );
};

export default Header;