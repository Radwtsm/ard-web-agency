import { motion } from 'framer-motion';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';

//img_elements = [{img:'url',title:'descrizione'}, ...]

const variants = {
    initial:{opacity:0},
    inView:{opacity:1},
    transition:{duration:1}
}

 function MosaicImageList({img_elements,cols=2,gap=0}) {
    return (
      <Box  sx={{ width: 1, height: 1,marginY:2 }} >
        <ImageList variant="masonry" cols={cols} gap={gap}>
          {img_elements.map((item) => (
            <ImageListItem 
            key={item.img}
            component={motion.div}
            initial={"initial"}
            whileInView={"inView"}
            variants={variants}
            transition={{duration:0.4}}
            >
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  }

  export default MosaicImageList