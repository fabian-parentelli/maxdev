import './us.scss';

const Us = () => {
    return (
        <div id='us' className='us'>
            <div className='usText'>
                <h2>Nosotros</h2>
                <p className='usUp'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia magnam corrupti earum aliquam! Necessitatibus, sapiente dolore. Commodi repellat consequuntur autem voluptate exercitationem maxime sequi quod atque beatae saepe, libero ea!</p>
                <p className='usDw'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam adipisci quae iste maiores aperiam. Accusantium necessitatibus ut vero aspernatur eaque, deleniti temporibus nobis qui, modi sapiente facere ratione tempore?</p>
            </div>
            <img className='usImg' src="us.png" alt="us" />
        </div>
    );
};

export default Us;