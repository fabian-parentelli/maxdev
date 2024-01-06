import './compA.scss';
import data from '../../../data.js';
import AnimateDow from '../../Animations/AnimateDown.jsx'
import AnimateRight from '../../Animations/AnimationRight.jsx';

const CompA = () => {

    return (
        <div className='compA' id='home'>
            <AnimateRight>
                <img src={data.main.compA.img} alt="img" />
            </AnimateRight>
            <div className='compP'>
                <AnimateDow>
                    <h2 className='animate__backInDown'>{data.main.compA.h2}</h2>
                </AnimateDow>
                <p>{data.main.compA.p}</p>
            </div>
        </div>
    );
};

export default CompA;