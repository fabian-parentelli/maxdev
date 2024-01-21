import './header.scss';
import * as boxAnimate from '../BoxAnimate/BoxAnimate';

const Header = () => {
    return (
        <div className='header' id='home'>
            <div className='headerL'>
                <boxAnimate.BoxAnLeft>
                    <h1>Teinda<br />Clothes</h1>
                </boxAnimate.BoxAnLeft>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque deleniti cupiditate ipsam dolorum nulla sapiente ipsa officia provident, ducimus nihil eum veritatis tenetur adipisci quibusdam? Temporibus quae reiciendis odio praesentium?
                </p>
            </div>
            <div className='headerR'>
                <div></div>
                <boxAnimate.BoxAnOpacity>
                    <img src="header.jpg" alt="modelo" />
                </boxAnimate.BoxAnOpacity>
                <div className='headerBox'></div>
            </div>
        </div>
    );
};

export default Header;