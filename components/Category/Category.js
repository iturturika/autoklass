'use clients'
import React from 'react';
import './Category.scss';
import Image from 'next/image';
import { motion, useInView} from 'framer-motion';

const Category = ({category, img, style}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className='Category' ref={ref} style={{...style, ...{opacity: isInView ? 1 : 0}}}>
        <p>{category}</p>
        <Image
            src={img}
            quality={100}
            alt="car"
        />
        <h3>Права категории "{category}"</h3>
    </div>
  )
}

export default Category
