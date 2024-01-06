import './compC.scss';
import data from '../../../data.js';
import AnimateInPlace from '../../Animations/AnimateInPlace.jsx'

const CompC = () => {

    return (
        <div className='compC'>
            <h2 id='us'>{data.main.compC.h2}</h2>
            <div className='compCOut'>
                <div className='compCInt'>
                    <p>{data.main.compC.pA}</p>
                    <p>{data.main.compC.pB}</p>
                    <p>{data.main.compC.pC}</p>
                </div>
                <AnimateInPlace>
                    <img className='imgCompC' src={data.main.compC.imgC} alt="nosotros" />
                </AnimateInPlace>
            </div>
        </div>
    );
};

export default CompC;