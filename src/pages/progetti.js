import React from 'react'
import Image from 'next/image'
import { motion} from 'framer-motion'


const Progetti = () => {
  




  return (
    <div>

  <section className='py-10'>
    <div className=' flex justify-center items-center flex-col '>
     
     
     <div className='flex flex-col justify-center items-center py-7 '>
     <motion.h2 className='font-bold text-orange-400' style={{fontSize:'2rem'}}>Tu immagina</motion.h2>
     <motion.h3 className='text-gray-500'>noi pensiamo al resto.</motion.h3>
     </div>

     <motion.img
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            whileHover={{scale:1.1}}
            transition={{duration:0.4}}
     src='/can-dx.png' alt="cap" className='w-40'/>
     
    



      </div>
      </section>

      <section className='text-center h-screen'>
      <motion.h2 className='font-bold text-orange-400' style={{fontSize:'2rem'}}>Progetti</motion.h2>
      <motion.h3 className='text-gray-500'>alcuni lavori per i nostri clienti</motion.h3>
      
      </section>
      </div>
  )
}

export default Progetti