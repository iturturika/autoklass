'use clients'
import React from 'react';
import './Title.scss';
import { motion, useInView} from 'framer-motion';
const Title = ({title}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div>    
      <h2 className='Title' ref={ref} style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>{title}</h2>
    </motion.div>
  )
}

export default Title
