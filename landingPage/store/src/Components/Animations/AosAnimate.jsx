import { useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AosAnimation = ({ children, animationType, duration = 3000, style }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        Aos.init({ duration });
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const element = elementRef.current;

        if (element) {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                Aos.refresh();
            }
        }
    };

    return <div  ref={elementRef} data-aos={animationType} style={style}>{children}</div>;
};

export default AosAnimation;