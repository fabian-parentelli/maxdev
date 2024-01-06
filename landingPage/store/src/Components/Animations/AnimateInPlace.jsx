import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './animate.scss'

const AnimateInPlace = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const isMobile = window.matchMedia("(min-width: 768px)").matches;

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 100,
    config: { duration: 1500 },
  });

  return (
    <animated.div ref={ref} style={springProps} className='haaa' >
      {children}
    </animated.div>
  );
};

export default AnimateInPlace;