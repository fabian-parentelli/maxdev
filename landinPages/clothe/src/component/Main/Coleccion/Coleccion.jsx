import { BoxAnLeft, BoxAnOpacity, BoxAnRight } from '../../BoxAnimate/BoxAnimate';
import './coleccion.scss';

const Coleccion = () => {
    return (
        <div className='coleccion' id='coleccion'>
            <BoxAnLeft>
                <img className='col1' src="coleccion1.jpg" alt="img1" />
            </BoxAnLeft>
            <div className='divCol1'>
                <BoxAnOpacity>
                    <img className='col2' src="coleccion2.jpg" alt="img2" />
                </BoxAnOpacity>
                <img className='col3' src="coleccion3.jpg" alt="img3" />
            </div>
            <img className='col4' src="coleccion4.jpg" alt="img4" />
            <div className='divCol2'>
                <BoxAnRight>
                    <h2>Colección</h2>
                </BoxAnRight>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quas, facilis fugit neque id culpa, voluptas odit vitae minima error repellat sapiente? Saepe voluptas repudiandae ullam accusamus iusto error sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cupiditate modi itaque tempore hic ipsum ratione aut! Quasi dolorem nostrum rerum facere praesentium ut unde itaque corporis? Consequatur, vitae quas.
                </p>
            </div>
        </div>
    );
};

export default Coleccion;