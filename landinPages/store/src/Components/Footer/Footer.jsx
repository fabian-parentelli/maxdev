import './footer.scss';
import data from '../../data.js';

const Footer = () => {

    return (
        <div className='footer'>
            <div className='footUp'>
                <div className='footLeft'>
                    <div className='footName'>
                        <img className='imgFoot' src={data.logo} alt="logo" />
                        <h4>{data.descrption}</h4>
                    </div>
                    <div className='footSocials'>
                        <a className='facebook'></a>
                        <a className='instagrame'></a>
                        <a className='tiktok'></a>
                        <a className='linkedin'></a>
                    </div>
                </div>
                <div className='footerCenter'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168881864242!2d-58.38414532514661!3d-34.603734457497524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1704546992224!5m2!1ses!2sar"
                        width="350"
                        height="150"
                        style={{ border: '0' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='map'
                    ></iframe>

                </div>
                <div className='footerRight'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odio quo earum labore. Perspiciatis veniam dolorum beatae nihil hic nostrum sapiente, alias ullam tempore! Incidunt dolorem earum molestiae perferendis magnam!</p>
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