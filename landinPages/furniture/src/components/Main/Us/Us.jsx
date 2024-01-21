import './us.scss'
import { BoxAnRight, BoxAnLeft } from '../../BoxAnimate/BoxAnimate';
const Us = () => {
    return (
        <div className='us' id='us'>
            <div className='usText'>
                <BoxAnRight>
                    <h3>Nosotros</h3>
                </BoxAnRight>
                <BoxAnLeft>
                    <h2>La Bella</h2>
                </BoxAnLeft>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum commodi sed, optio et ipsa suscipit tempora, praesentium repudiandae natus quidem perspiciatis, cumque nulla voluptatum eligendi nemo recusandae nostrum error sint?
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi possimus consectetur fugiat eius eos amet tempore autem, sapiente eaque quibusdam blanditiis, ab deleniti dolore facere suscipit. Non, impedit quaerat.
                </p>
            </div>
            <img src="us.png" alt="us" />
        </div>
    );
};

export default Us;