import "./compB.scss";
import data from '../../../data.js';
import AnimateInPlace from "../../Animations/AnimateInPlace.jsx";
import AnimateLeft from '../../Animations/AnimationLeft.jsx'
import AnimateRight from '../../Animations/AnimationRight.jsx'

const CompB = () => {
    return (
        <div className="compB">
            <div className="separator" id="service"></div>
            <h2>Servicios</h2>
            <div className="divCompB">
                <div className="divInCompB">
                    <AnimateRight>
                        <img src={data.main.compB.imgB} alt="Doctora" />
                    </AnimateRight>
                    <h3>{data.main.compB.h3B}</h3>
                    <p>{data.main.compB.pB}</p>
                </div>
                <div className="divInCompB">
                    <AnimateInPlace>
                        <img className="imgCompBPel" src={data.main.compB.imgBB} alt="Doctora" />
                    </AnimateInPlace>
                    <h3>{data.main.compB.h3BB}</h3>
                    <p>{data.main.compB.pBB}</p>
                </div>
                <div className="divInCompB">
                    <AnimateLeft>
                        <img src={data.main.compB.imgBBB} alt="Doctora" />
                    </AnimateLeft>
                    <h3>{data.main.compB.h3BBB}</h3>
                    <p>{data.main.compB.pBBB}</p>
                </div>
            </div>
            <div className="separator"></div>
        </div>
    );
};

export default CompB;