import React, {useEffect} from 'react';

import ReactDOM from "react-dom";

import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from 'framer-motion';
import { duration } from '@mui/material';

function Animation({ children}) {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
    }, [controls, inView]);
    
    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ type: 'spring', duration: 2}}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
            >
            {children}
        </motion.div>
    )
}

export default Animation
