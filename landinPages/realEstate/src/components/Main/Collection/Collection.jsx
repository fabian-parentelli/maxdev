import './collection.scss';
import { BoxAnLeft, BoxAnRight, BoxUnderToTop } from '../../BoxAnimate/BoxAnimate';

const Collection = () => {
    return (
        <div className='collection' id='coleccion'>

            <div className='teamTitle'>
                <p>Inmobiliaria Fantasia</p>
                <BoxAnLeft>
                    <h2>Nuestros Productos</h2>
                </BoxAnLeft>
                <p>Somos una grupo de personas enfocados en encontrar tus sueños</p>
            </div>

            <div className='collectionCards'>
                <BoxAnLeft>
                    <div className='collectionCard'>
                        <img src="collection1.jpg" alt="tea1" />
                        <div>
                            <h4>Alquiler y venta residencial</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sapiente excepturi alias.</p>
                        </div>
                    </div>
                </BoxAnLeft>
                <div className='collectionCard'>
                    <img src="collection2.jpg" alt="tea1" />
                    <div>
                        <h4>Alquiler y venta Comercial</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sapiente excepturi alias.</p>
                    </div>
                </div>
                <div className='collectionCard'>
                    <img src="collection3.jpg" alt="tea1" />
                    <div>
                        <h4>Alquiler y venta industrial</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sapiente excepturi alias.</p>
                    </div>
                </div>
                <BoxAnRight>
                    <div className='collectionCard'>
                        <img src="collection4.jpg" alt="tea1" />
                        <div>
                            <h4>Alquiler y venta Agragria</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sapiente excepturi alias.</p>
                        </div>
                    </div>
                </BoxAnRight>
            </div>
        </div>
    );
};

export default Collection;