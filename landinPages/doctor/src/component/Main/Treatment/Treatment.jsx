import './treatment.scss';

const Treatment = () => {
    return (
        <div className='treatment'>
            <div className='treatmentUp'>
                <h4 id='service'>Tratamientos</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus expedita illum nemo facere maiores a, ex, perferendis vitae beatae non sint deleniti, voluptates adipisci cum corporis qui dolore itaque.</p>
            </div>
            <div className='treatmentCard'>
                <div className='cards'>
                    <div className='cradImg'>
                        <img src="card1.jpg" alt="card1" />
                    </div>
                    <div className='cardTxt'>
                        <h5>Ortodoncia</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rerum repellendus, voluptatum ducimus atque magnam perspiciatis commodi ipsum veniam sapiente dicta qui quas odit laborum harum minus maiores amet doloribus.</p>
                    </div>
                </div>
                <div className='cards'>
                    <div className='cradImg'>
                        <img src="card2.jpg" alt="card2" />
                    </div>
                    <div className='cardTxt'>
                        <h5>Implantes</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, alias rerum necessitatibus veniam nam cupiditate labore commodi eum asperiores magnam quis beatae dignissimos molestiae. Molestias veniam incidunt provident est quibusdam.</p>
                    </div>
                </div>
                <div className='cards'>
                    <div className='cradImg'>
                        <img src="card3.jpg" alt="card3" />
                    </div>
                    <div className='cardTxt'>
                        <h5>Reparaciones</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex perferendis rerum doloremque non vel error odit. Accusamus voluptas sed et voluptates obcaecati, assumenda expedita omnis non odit porro quod.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;