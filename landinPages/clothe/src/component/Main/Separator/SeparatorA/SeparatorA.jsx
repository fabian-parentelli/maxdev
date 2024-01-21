import './separatorA.scss';
import * as boxAnimate from '../../../BoxAnimate/BoxAnimate';

const SeparatorA = () => {
    return (
        <div className='separatorA'>
            <img className='sepAMen' src="sepA.png" alt="separator" />
            <boxAnimate.BoxAnOpacity>
                <img className='sepALogo' src="logo.png" alt="logo" />
            </boxAnimate.BoxAnOpacity>
            <img className='sepAWoman' src="sepAA.png" alt="separator" />
        </div>
    );
};

export default SeparatorA;