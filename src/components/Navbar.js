'use client';

import styles from './Navbar.module.css'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Logo from './Logo'

import {MdOutlineMenu,MdOutlineMenuOpen} from "react-icons/md";
import {motion, AnimatePresence} from 'framer-motion'

import { useRouter } from 'next/router';


 



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
        <Link href="/servizi">Servizi</Link>
        <Link href="/progetti">Progetti</Link>
        <Link href="/team">Team</Link>
    </motion.ul>)}
    </AnimatePresence>
    )
}
const Navbar = () => {

    

    const [colors,setColors] = useState({
        logo:'orange',
        hex:'#eb8921',
        nav:'white'
    })

    const router = useRouter();

    useEffect( () => {
        if (router.pathname === '/') {
            
            setColors({
                bg:'white',
                logo:'orange',
                hex:'#eb8921',
                nav:'white'
            })
        } else if (router.pathname === '/servizi') {
            setColors({
                logo:'white',
                bg:'red'
            })
        } else if (router.pathname === '/progetti') {
            setColors({
                logo:'white',
                bg:'orange'
            })
        } else if (router.pathname === '/team') {
            setColors({
                logo:'white',
                bg:'yellow'
            })
        }
        
    }
    
    ,[router.pathname])




  let [isOpen,setIsOpen] = useState(false)

  return (
    <> 
            <nav className={`flex justify-between px-6 py-3 ${colors.bg}`} >
                <Link href='/'><Logo color={colors.logo} /></Link>
                {/* <button className={`rounded-full p-2 ${`transition:  0.3s ; background-color:${colors.logo}`}` } onClick={() => { setIsOpen(!isOpen) }}>{isOpen ? <MdOutlineMenuOpen size={70} fill={colors.logo}/> : <MdOutlineMenu size={70} fill={colors.logo}/>}</button> */}
                <button onClick={() => { setIsOpen(!isOpen) }} class={`hamburger ${isOpen && 'open'}`}>
	<span class="line"></span>
	<span class="line"></span>
	<span class="line"></span>
</button>
            </nav>
            {isOpen ? dropdown(isOpen) : null}
    </>
)
}


export default Navbar