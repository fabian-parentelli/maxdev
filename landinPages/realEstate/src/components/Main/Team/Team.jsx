import './team.scss';
import { BoxAnLeft, BoxAnRight, BoxUnderToTop } from '../../BoxAnimate/BoxAnimate';

const Team = () => {
    return (
        <div className='team'>

            <div className='teamUp'>
                <div className='teamUpLeft'>
                    <div className='teamBrownLeft'></div>
                    <div className='teamGrayLeft'></div>
                </div>

                <div className='teamUpRight'>
                    <div className='teamBrownRight'></div>
                    <div className='teamGrayRight'></div>
                </div>
            </div>

            <div className='teamTitle'>
                <p>Inmobiliaria Fantasia</p>
                <BoxUnderToTop>
                    <h2>Nuestro Equipo</h2>
                </BoxUnderToTop>
                <p>Somos una grupo de personas enfocados en encontrar tus sueños</p>
            </div>

            <div className='teamCards'>
                <BoxAnLeft>
                    <div className='teamCard'>
                        <img src="team1.jpg" alt="tea1" />
                        <div>
                            <h4>SEO</h4>
                            <p>Maria Solanas</p>
                        </div>
                    </div>
                </BoxAnLeft>
                <div className='teamCard'>
                    <img src="team2.jpg" alt="tea1" />
                    <div>
                        <h4>Recursos Humanos</h4>
                        <p>Martin Lombardo</p>
                    </div>
                </div>
                <div className='teamCard'>
                    <img src="team3.jpg" alt="tea1" />
                    <div>
                        <h4>Marketing</h4>
                        <p>Antonieta Luz</p>
                    </div>
                </div>
                <BoxAnRight>
                    <div className='teamCard'>
                        <img src="team4.jpg" alt="tea1" />
                        <div>
                            <h4>Ventas</h4>
                            <p>Alberto Fonzeca</p>
                        </div>
                    </div>
                </BoxAnRight>
            </div>
        </div>
    );
};

export default Team;