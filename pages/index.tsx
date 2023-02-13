import Head from 'next/head'
import Image from 'next/image'
import AvatarSearch from '@/components/avatar-search'
import { useEffect, useState } from 'react'

export default function Home() {
    const [hasKeyword, setHasKeyword] = useState(false)
    const [focusSearch, setFocusSearch] = useState(false)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <>
            <Head>
                <title>Unlight Management</title>

                <link rel="preload" href="/unlight/images/data/title/loading.swf/3.svg" as="image" />
                <link rel="preload" href="/unlight/images/data/title/loading.swf/5.svg" as="image" />
                <link rel="preload" href="/unlight/images/data/title/loading.swf/7.svg" as="image" />
                <link rel="preload" href="/unlight/images/data/title/loading.swf/9.svg" as="image" />
                <link rel="preload" href="/unlight/images/data/title/loading.swf/11.svg" as="image" />
                <link rel="preload" href="/unlight/images/data/title/loading.swf/13.svg" as="image" />
                <link rel="preload" href="/unlight/images/data/title/loading.swf/15.svg" as="image" />
                <link rel="preload" href="/unlight/images/data/title/loading.swf/17.svg" as="image" />
                <link rel="preload" href="/unlight/images/data/title/loading.swf/19.svg" as="image" />
                <link rel="preload" href="/unlight/images/data/title/event_title.swf/2.svg" as="image" />
                <link rel="preload" href="/unlight/images/data/title/logo.swf/1.svg" as="image" />
            </Head>
            {
                !loaded && <div className="fixed w:100vw h:100vh bg:black"></div>
            }
            {
                loaded && <div className="@fade|1s|both|reverse|ease">
                    <div className="rel h:100vh bg:url('/unlight/images/data/title/event_title.swf/2.svg') bg:110vw bg:no-repeat @bg-move|60s|ease|alternate|infinite">
                        <div className={`fixed bg:black/.75 bd:blur(${hasKeyword || focusSearch ? 20 : 7}) ~backdrop-filter|300ms|ease-in top:0 w:full h:full pointer-events:none flex justify-content:center`}>
                            <div className={`bg:radial-gradient(ellipse|at|center,rgba(255,255,255,1)|0%,rgba(172,172,172,.35)|45%,rgba(255,255,255,0)|70%) @flashing|10s|ease|infinite bg:center bg:no-repeat w:500 h:140 ${hasKeyword || focusSearch ? 'mt:0 @fade|200ms|both!' : 'mt:25vh'} ~margin-top|150ms|ease-in`}>
                                <Image src="/unlight/images/data/title/logo.swf/1.svg" width={280} height={140} alt="" className="m:auto user-select:none pointer-events:none" />
                            </div>
                        </div>
                        <div className={`abs w:full h:100vh pt:${hasKeyword || focusSearch ? '16' : '55vh'} ~padding-top|200ms|ease-out overflow-y:auto`}>
                            <AvatarSearch onKeyword={(keyword: any) => setHasKeyword(!!keyword)} onFocus={() => setFocusSearch(true)} onBlur={() => setFocusSearch(false)} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
