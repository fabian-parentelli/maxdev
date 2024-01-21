import data from '../../../data.js';
import './form.scss';
import AosAnimation from '../../Animations/AosAnimate.jsx';

const Form = () => {

    return (
        <div className='form' id='form'>
            <h2>Contáctanos</h2>
            <div className='formVew'>
                <AosAnimation animationType='fade-right' style={{ width: '20%' }}>
                    <img className='imgForm' src={data.main.form.img} alt="img" data-aos='fade-right' />
                </AosAnimation>
                <div className='formContainer'>
                    <div className='formSection'>
                        <label htmlFor="">Tu nombre</label>
                        <input type="text" required />
                    </div>
                    <div className='formSection'>
                        <label htmlFor="">Email</label>
                        <input type="email" required />
                    </div>
                    <div className='formSection'>
                        <label htmlFor="">Comentario</label>
                        <textarea name="" id="" cols="30" rows="10" required />
                    </div>
                    <button className='btnForm'>Enviar</button>
                </div>
            </div>
        </div>
    );
};

export default Form;