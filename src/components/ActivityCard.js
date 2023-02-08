
import React from 'react'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link';


const ActivityCard = ({y_dist,title}) => {

  const {scrollYProgress} = useScroll()


  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, y_dist]),{damping:4});




  return (
    <div className=''>

        <motion.div
               
                initial={{opacity:0}}
                animate={{opacity:1}}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity:1}}
                 style={{y:useSpring(y)}}
                // transition={{ duration: 0.2 }}
         

        className='img-test w-64'>
          <Link href={'#'} className='work-title text-xl p-2 font-boldest '>{`${title}`}</Link>
        </motion.div>
        
    </div>
  )
}

export default ActivityCard