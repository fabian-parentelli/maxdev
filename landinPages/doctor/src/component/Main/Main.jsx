import Customer from "./Customer/Customer";
import Form from "./Form/Form";
import Hour from "./Hour/Hour";
import Point from "./Points/Points";
import Treatment from "./Treatment/Treatment";
import Us from "./Us/Us";

const Main = () => {
    return (
        <>
            <Hour />
            <Treatment />
            <Point />
            <Us />
            <Customer />
            <Form />
        </>
    );
};

export default Main;