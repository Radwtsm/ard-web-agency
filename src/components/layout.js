import Navbar from "./Navbar";
import Footer from "./Footer";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Layout ({children}) {


    



    

    
    return (
        <>
       
        <Navbar  />
        {children}
        <Footer />
        </>
    )
}