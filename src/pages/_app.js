import '@/styles/globals.css'
import Layout from '@/components/layout'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

  let [colors,setColors] = useState({
    bg:'white'
  })

  return <Layout><Component {...pageProps} /></Layout>
}
