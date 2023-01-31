import styles from './Navbar.module.css'

import React, { useState } from 'react'
import Logo from './Logo'

import {MdOutlineMenu,MdOutlineMenuOpen} from "react-icons/md";
import {motion, AnimatePresence} from 'framer-motion'

const  dropdown = (isOpen) => {
    return (
        <AnimatePresence>
    {isOpen && 
    (<motion.ul
    key='dropdown'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className='h-screen flex flex-col justify-center items-center gap-10 text-7xl '>
        <li>Servizi</li>
        <li>Progetti</li>
        <li>Team</li>
    </motion.ul>)}
    </AnimatePresence>
    )
}
const Navbar = (props) => {

  let [isOpen,setIsOpen] = useState(false)

  return (
    <> 
            <nav className="flex justify-between px-6 py-3 ">
                <Logo color={props.color}/>
                <button className={`rounded-full p-2 ${isOpen ? styles.opened : styles.closed}` } onClick={() => { setIsOpen(!isOpen) }}>{isOpen ? <MdOutlineMenuOpen size={70} fill='white'/> : <MdOutlineMenu size={70} fill='orange'/>}</button>
            </nav>
            {isOpen ? dropdown(isOpen) : null}
    </>
)
}

export default Navbar