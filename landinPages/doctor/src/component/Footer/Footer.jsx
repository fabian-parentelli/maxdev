import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerUp'>
                <div className='footSocials'>
                    <a className='facebook'></a>
                    <a className='instagrame'></a>
                    <a className='tiktok'></a>
                    <a className='linkedin'></a>
                </div>
                <div className='footName'>
                    <img src="logoGray.png" alt="" />
                    <div className='footNameText'>
                        <h2>Erika Valeria</h2>
                        <div className='lineFoot'></div>
                        <p>Odontóloga</p>
                    </div>
                </div>
            </div>
            <div className='maxdev'>
                <a href='#'>Pagina desarrollada por <strong>Maxdev</strong></a>
                <img className='logoMaxdev' src="logoMax.png" alt="maxdev" />
            </div>
        </div>
    );
};

export default Footer;