import React from 'react'
import { motion} from 'framer-motion'

import MosaicImageList from '@/components/MosaicImageList'



const Progetti = () => {
  
  const img_elements = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ];



  return (
    <div className='my-10'>

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

      <section className='text-center h-fit'>
      <motion.h2 className='font-bold text-orange-400' style={{fontSize:'2rem'}}>Progetti</motion.h2>
      <motion.h3 className='text-gray-500'>alcuni lavori per i nostri clienti</motion.h3>
      <MosaicImageList img_elements={img_elements}/>
      
      </section>
      </div>
  )
}

export default Progetti