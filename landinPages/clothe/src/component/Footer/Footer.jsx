import './footer.scss';

const Footer = () => {
    return (
        <div className='footerFather'>
            <div className='footer'>
                <div className='footUs'>
                    <div className='footName'>
                        <img src="logo.png" alt="logo" />
                        <h2>Tienda Clothes</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis corporis repellat, officiis ipsam suscipit. In dolore voluptas et deserunt consequatur itaque quis provident similique quisquam, cumque assumenda suscipit impedit.
                    </p>
                    <div className='sosiclMedia'>
                        <div className='facebook'></div>
                        <div className='x'></div>
                        <div className='instagrame'></div>
                        <div className='pinterest'></div>
                        <div className='linkedin'></div>
                        <div className='tikTok'></div>
                    </div>
                </div>
                <div className='footSeccion'>
                    <h3>Secciones</h3>
                    <div className='line'></div>
                    <a href='#home'>Inicio</a>
                    <a href='#us'>Nosotros</a>
                    <a href='#coleccion'>Colección</a>
                    <a href='#form'>Contacto</a>
                </div>
                <div className='footCont'>
                    <div className='foorData'>
                        <img src="email.png" alt="email" />
                        <p>tiendaClothes@gmail.com</p>
                    </div>
                    <div className='foorData'>
                        <img src="phone.png" alt="phone" />
                        <p>15-1111-2222</p>
                    </div>
                    <div className='foorData'>
                        <img src="address.png" alt="address" />
                        <p>Callao y Corrientes</p>
                    </div>
                    <p>Buenos Aires - Argentina</p>
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