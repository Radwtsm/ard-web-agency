import Navbar from "./Navbar";
import Footer from "./Footer";
import { useReducer } from "react";
import Menureducer from "./menuState";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { motion } from "framer-motion";





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
                    className="overflow-hidden"
                    initial={{ opacity: 0 , }}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0}}
                    transition={{ duration: 0.3 }}
            >
            {children}
            <Footer />
            </motion.div>
            </>}
            </AnimatePresence>
            




        </>
    )
}