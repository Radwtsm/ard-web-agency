'use client';



import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Logo from './Logo'

import { MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";
import { motion, AnimatePresence, useMotionValue, useScroll } from 'framer-motion'

import { useRouter } from 'next/router';




const Effect = ({ children }) => {
    return <motion.p whileHover={{ scale: 1.2 }}
        whileTap={{
            scale: 0.8,

        }}>
        {children}
    </motion.p>
}




const Navbar = ({ openMenu, closeMenu, switchMenu, isOpen }) => {


    useEffect(() => console.log(isOpen), [isOpen]);


    //colori iniziali
    const [colors, setColors] = useState({
        logo: 'orange',
        hex: '#eb8921',
        nav: 'white'
    })

    const router = useRouter();


    //scelta colori navbar
    useEffect(() => {
        if (router.pathname === '/') {

            setColors({
                bg: 'white',
                logo: 'orange',
                hex: '#eb8921',
                text: '#eb8921',
                nav: 'white',
                link: 'orange-links'
            })
        } else if (router.pathname === '/servizi') {
            setColors({
                logo: 'white',
                bg: 'red',
                link: 'red-links',
                text: 'red-links'

            })
        } else if (router.pathname === '/progetti') {
            setColors({
                logo: 'white',
                bg: 'orange',
                link: 'orange-links',
                text: 'orange-links'
            })
        } else if (router.pathname === '/team') {
            setColors({
                logo: 'white',
                bg: 'yellow',
                link: 'yellow-links',
                text: 'yellow-links'
            })
        }

    }

        , [router.pathname])


    console.log(isOpen)





    return (
        <>
            <nav className={`flex justify-between px-6 py-3 items-center ${colors.bg}`} >
                <Link onClick={closeMenu} href='/'><Logo color={colors.logo} /></Link>
                <button className={`${`transition:  0.3s ; background-color:${colors.logo}`}`} onClick={switchMenu}>{isOpen ? <Effect><MdOutlineMenuOpen size={30} fill={colors.logo} /></Effect> : <Effect><MdOutlineMenu size={30} fill={colors.logo} /></Effect>}</button>
            </nav>
            <AnimatePresence>
                {isOpen &&


                    <motion.ul
                        key='dropdown'
                        initial={{ opacity: 0, y: -200 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y:200 }}
                        transition={{ duration: 0.3 }}
                        className={`z-10 h-screen flex flex-col justify-center items-center gap-10 text-2xl ${colors.link} `}>
                        <Link onClick={closeMenu} href="/"><Effect>Home</Effect></Link>
                        <Link onClick={closeMenu} href="/servizi"><Effect>Servizi</Effect></Link>
                        <Link onClick={closeMenu} href="/progetti"><Effect>Progetti</Effect></Link>
                        <Link onClick={closeMenu} href="/team"><motion.p whileHover={{ scale: 1.2 }}
                            whileTap={{
                                scale: 0.8,

                            }}>Team</motion.p></Link>
                    </motion.ul>

                }
            </AnimatePresence>
        </>
    )
}


export default Navbar