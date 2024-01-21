import './mainC.scss';

const MainC = () => {
    return (
        <div className='mainC'>
            <h2 id='trend'>Tendncias</h2>
            <div className='galery'>
                <img className='galery1' src="galery1.jpg" alt="galery1" />
                <div className='betweenGalery'>
                    <img className='galery2' src="galery2.jpg" alt="galery2" />
                    <img className='galery2' src="galery3.jpg" alt="galery3" />
                </div>
                <img className='galery1' src="galery4.jpg" alt="galery4" />
            </div>
        </div>
    );
};

export default MainC;