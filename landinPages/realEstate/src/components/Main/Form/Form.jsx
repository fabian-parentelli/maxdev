import './form.scss'
import { BoxAnLeft, BoxAnOpacity, BoxAnRight } from '../../BoxAnimate/BoxAnimate';

const Form = () => {
    return (
        <div className='form' id='form'>
            <BoxAnRight>
                <h2>Contactanos</h2>
            </BoxAnRight>

            <div className='between'>
                <BoxAnOpacity>
                    <div className='socials'>
                        <div className='red'>
                            <div className='facebook'></div>
                            <a>@laBella</a>
                        </div>
                        <div className='red'>
                            <div className='Instagrame'></div>
                            <a>@labellaMuebles</a>
                        </div>
                        <div className='red'>
                            <div className='email'></div>
                            <a>labella@gmail.com</a>
                        </div>
                        <div className='red'>
                            <div className='phone'></div>
                            <a>11-1111-1111</a>
                        </div>
                    </div>
                </BoxAnOpacity>
                <BoxAnLeft>
                    <img src="house.png" alt="" />
                </BoxAnLeft>
            </div>

            <div className='formContainer'>
                <div className='formSection'>
                    <label htmlFor="">Tu nombre</label>
                    <input type="text" required />
                </div>
                <div className='formSection'>
                    <label htmlFor="">Email</label>
                    <input type="text" required />
                </div>
                <div className='formDw'>
                    <label htmlFor="">Comentario</label>
                    <textarea name="" id="" cols="30" rows="10" required />
                </div>
                <button className='btnForm'>Enviar</button>
            </div>
        </div >
    );
};

export default Form;