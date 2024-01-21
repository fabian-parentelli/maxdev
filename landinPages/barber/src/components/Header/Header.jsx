import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <img className='imgHeader' src="header.jpg" alt="" />
            <div className='headerInside'>
                <h1>Buenos</h1>
                <h2>Muchachos</h2>
                <h3></h3>
                <div className='headerBottom'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sint neque incidunt! Provident nam cumque voluptatum libero expedita recusandae omnis praesentium, rem voluptate quos animi vitae totam, voluptas repudiandae consectetur!</p>
                    <a href="#contact"><button className='btnContact'>Contáctame</button></a>
                </div>
            </div>
        </div>
    );
};

export default Header;