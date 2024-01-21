import './contact.scss';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <h2>Contáctanos</h2>
            <div className='formVew'>
                <img className='imgForm' src="contact.jpg" alt="img" />
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

export default Contact;