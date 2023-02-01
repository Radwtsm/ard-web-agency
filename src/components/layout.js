import Navbar from "./Navbar";
import Footer from "./Footer";
import { useReducer } from "react";
import Menureducer from "./menuState";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const variants = {

  exit:{
    opacity:0
  },
  animate: {
    opacity:1
  },
  transition:{
    duration:0.3
  }
  
}



export default function Layout ({children}) {



    const [isOpen,dispatch] = useReducer(Menureducer,false) 
    
    function closeMenu(isOpen) {
        dispatch({
          type: 'closed'
        });
      }
    
      function openMenu(isOpen) {
        dispatch({
          type: 'opened'
        });
      }
    
      function switchMenu(isOpen) {
        dispatch({
          type: 'switched'
        });
      }
    
    


    

    
    return (
        <>


            <Navbar openMenu={openMenu} closeMenu={closeMenu} switchMenu={switchMenu} isOpen={isOpen} />

            <AnimatePresence>
            {isOpen ? null : <>
            <motion.div
                    key='body'
                    className=""
                    initial={variants.exit}
                    animate={variants.animate}
                    exit={variants.exit}
                    transition={variants.transition}
            >
            <div className="mx-2">
            {children}
            </div>
            <Footer />
            </motion.div>
            </>}
            </AnimatePresence>
            




        </>
    )
}