import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import MainA from './MainA/MainA';
import MainB from './MainB/MainB';
import MainC from './MainC/MainC';
import Separator from './Separator/Separator';

const Main = () => {
    return (
        <>
            <MainA />
            <Separator />
            <MainB />
            <Banner style={'banner'} />
            <MainC />
            <Banner style={'barber'} />
            <Contact />
            <Separator />
        </>
    );
};

export default Main;