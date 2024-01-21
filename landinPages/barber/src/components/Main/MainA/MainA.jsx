import './mainA.scss';

const MainA = () => {

    return (
        <div className="mainA">
            <div className='logoType'>
                <img src="logo.png" alt="logo" />
                <div className='logoTypeInside'>
                    <h4>Buenos</h4>
                    <h4>Muchachos</h4>
                </div>
            </div>
            <img className='lines' src="rayas.png" alt="rayas" />
        </div>
    )
};

export default MainA;