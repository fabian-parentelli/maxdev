import './header.scss';
import data from '../../data.js';

const Header = () => {
    return (
        <div className="header">
            <img src={data.header} alt={data.name} />
            <h1>{data.descrption}</h1>
        </div>
    );
};

export default Header;