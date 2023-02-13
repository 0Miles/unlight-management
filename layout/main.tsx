import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'

export default function MainLayout(props: any) {
    const router = useRouter()
    const [showLogo, setShowLogo] = useState(router.pathname === '/')

    useMemo(() => {
        if (router.isReady) {
            if (router.pathname === '/') {
                setShowLogo(true)
            } else {
                setShowLogo(false)
            }
        }
    }, [router.isReady, router.pathname])

    return (
        <>
            <div className="rel h:100vh bg:url('/unlight/images/data/title/event_title.swf/2.svg') bg:110vw bg:no-repeat @bg-move|60s|ease|alternate|infinite">
                <div className={`fixed bg:black/.75 bd:blur(${!showLogo ? 20 : 7}) ~backdrop-filter|300ms|ease-in top:0 w:full h:full pointer-events:none flex justify-content:center`}>
                    <div className={`bg:radial-gradient(ellipse|at|center,rgba(255,255,255,1)|0%,rgba(172,172,172,.35)|45%,rgba(255,255,255,0)|70%) @flashing|10s|ease|infinite bg:center bg:no-repeat w:500 h:140 ${!showLogo ? 'mt:0 @fade|200ms|both!' : 'mt:25vh'} ~margin-top|150ms|ease-in`}>
                        <Image src="/unlight/images/data/title/logo.swf/1.svg" priority width={280} height={140} alt="" className="m:auto user-select:none pointer-events:none" />
                    </div>
                </div>
                <div className={`abs w:full h:100vh pt:${!showLogo ? '0' : '55vh'} ~padding-top|200ms|ease-out overflow-y:auto`}>
                    {props.children}
                </div>
            </div>
        </>
    )
}

