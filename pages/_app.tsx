import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@master/css'
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    const getLayout = (Component as any).getLayout || ((page: any) => page)

    
    return <>
        <Head>
            <title>Unlight Management</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {getLayout(<Component {...pageProps} />)}
        <div className={`${loaded ? '@fade|1s|both|ease' : ''}`} style={{ position: 'fixed', top: '0', left: '0', background: 'black', height: '100vh', width: '100vw'}}></div>
    </>
}
