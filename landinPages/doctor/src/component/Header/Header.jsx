import './header.scss';

const Header = () => {
    return (
        <div className='header' id='home'>
            <img className='imgBack' src="back.png" alt="back" />
            <div className='photoPort'>
                <img src="erikaValeria.png" alt="erika" />
            </div>
            <div className='divCart'>
                <img src="logoGray.png" alt="" />
                <div>
                    <h2>Erika Valeria</h2>
                    <div className='line'></div>
                    <h3>Odontóloga</h3>
                </div>
            </div>
        </div>
    );
};

export default Header;