import './main.scss';

const MainB = () => {
    return (
        <div className='mainB'>
            <h2 id='services'>Servicios</h2>
            <div className='mainB-Service'>
                <img className='imgService' src="service1.png" alt="service 1" />
                <img className='imgService' src="service2.png" alt="service 2" />
                <img className='imgService' src="service3.png" alt="service 3" />
            </div>
        </div>
    );
};

export default MainB;