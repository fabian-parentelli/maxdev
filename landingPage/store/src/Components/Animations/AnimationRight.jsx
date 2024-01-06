import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimateRight = ({ children }) => {
    const [ref, inView] = useInView({ triggerOnce: true });

    const isMobile = window.matchMedia("(min-width: 768px)").matches;

    const animations = isMobile
        ? { initial: { opacity: 0, x: -200, y: 20 }, animate: inView ? { opacity: 1, x: 0, y: 0 } : {} }
        : { initial: {}, animate: {} };

    return (
        <motion.div
            ref={ref}
            initial={animations.initial}
            animate={animations.animate}
            transition={{ duration: 1.2 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimateRight;
