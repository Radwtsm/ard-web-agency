import React from 'react'

import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Footer = () => {


  const [colors,setColors] = useState({
    bg:'white',
    text:'gray',
  
})

const router = useRouter();

useEffect( () => {
    if (router.pathname === '/') {
        
        setColors({
          bg:'white',
          text:'#B42D2F',
        })
    } else if (router.pathname === '/servizi') {
        setColors({
          bg:'red',
          text:'white',
        })
    } else if (router.pathname === '/progetti') {
        setColors({
          bg:'orange',
          text:'white',
        })
    } else if (router.pathname === '/team') {
        setColors({
          bg:'yellow',
          text:'white',
        })
    }
    
}

,[router.pathname])


  return (
    <div className={`text-center ${colors.bg} `} style={{color:colors.text}}>Footer</div>
  )
}

export default Footer