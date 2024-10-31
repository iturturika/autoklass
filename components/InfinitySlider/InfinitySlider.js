import React from 'react'
import './InfinitySlider.scss';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue} from "framer-motion";
const InfinitySlider = ({children, side}) => {
    let [ref, {width}] = useMeasure();

    const xTranslation = useMotionValue(0);

    React.useEffect(() => {
        let controls;
        let finalPosition = (side === 'left' ? -width / 2 : 0);
        controls = animate(xTranslation, [(side === 'left' ? 0 : -width / 2), finalPosition], {
            ease: "linear",
            duration: "20",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        });

        return controls.stop;
    }, [xTranslation, width]);
  return (
    <motion.div
        ref={ref}
        style={{x: xTranslation}}
        className="infinity-slider"
    >
        {children}
    </motion.div>
  )
}

export default InfinitySlider
