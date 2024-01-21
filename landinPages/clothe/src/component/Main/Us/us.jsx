import { BoxAnLeft, BoxAnOpacity, BoxUnderToTop } from '../../BoxAnimate/BoxAnimate';
import './us.scss';

const Us = () => {
    return (
        <div className='us' id='us'>
            <div className='usL'>
                <BoxAnLeft>
                    <h2>Nosotros</h2>
                </BoxAnLeft>
            </div>
            <div className='usR'>
                <div className='usImg'>
                    <BoxAnOpacity>
                        <div className='divImgUs'><img src="us2.jpg" alt="us2" /></div>
                    </BoxAnOpacity>
                    <BoxUnderToTop>
                        <div className='divImgUs'><img src="us3.jpg" alt="us3" /></div>
                    </BoxUnderToTop>
                </div>
                <p className='paragraph'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, quas quisquam? Dolore blanditiis expedita, perspiciatis neque minima nisi eveniet, autem magnam quia, ipsa repellat assumenda labore error perferendis illo nostrum.
                </p>
            </div>
        </div>
    );
};

export default Us;