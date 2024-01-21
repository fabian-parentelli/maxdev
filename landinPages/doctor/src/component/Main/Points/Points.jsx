import './points.scss';

const Point = () => {
    return (
        <div className='point'>
            <p>Nuestra meta es brindar la mejor atención integral de calidad y accesible</p>
            <div className='pointCont'>
                <div className='pointCard'>
                    <img src="point1.png" alt="punto1" />
                    <p>Servicio personalizado</p>
                </div>
                <div className='pointCard'>
                    <img src="point2.png" alt="punto2" />
                    <p>Puntualidad</p>
                </div>
                <div className='pointCard'>
                    <img src="point3.png" alt="punto3" />
                    <p>Costos accesibles</p>
                </div>
                <div className='pointCard'>
                    <img src="point4.png" alt="punto4" />
                    <p>Múltiples formas de pago</p>
                </div>
            </div>
        </div>
    );
};

export default Point;