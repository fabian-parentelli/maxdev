import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimateDown = ({ children }) => {
    const [ref, inView] = useInView({ triggerOnce: true });

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    const animations = isDesktop
        ? { initial: { opacity: 0, y: -100 }, animate: inView ? { opacity: 1, y: 0 } : {} }
        : { initial: {}, animate: {} };

    return (
        <motion.div
            ref={ref}
            initial={animations.initial}
            animate={animations.animate}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimateDown;
