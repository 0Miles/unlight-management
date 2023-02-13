import { useEffect, useState } from 'react'
import { Avatars } from '@/database/entities/Avatars'
import AvatarImage from './avatar-image'
import Loading from './loading'
import Link from 'next/link'

export default function AvatarInfo(props: {avatar?: Avatars, index?: number, className?: string}) {
    const [show, setShow] = useState(false)
    const [imageReady, setImageReady] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, (props.index ?? 0 + 1) * 200)
    }, [props.index])

    return (
        <Link href={`/avatar/${props.avatar?.id}`}>
            <div className={`${show ? 'opacity:1' : 'opacity:0'} ~opacity|300ms|ease-in,transform|50ms|ease rel bd:brightness(120%):hover>div:nth-child(2) cursor:pointer:hover scale(.975):active ${props.className ?? ''}`}>
                <div className="flex w:245 b:1|solid|gray">
                    <div className="rel w:65 h:65 overflow:hidden">
                        <AvatarImage className="translate(-130,-76)" onReady={() => { setImageReady(true) }} partInventories={props.avatar?.partInventories} />
                        {
                            <Loading width={65} height={65} className={`abs top:0 bg:black ~opacity|300ms|ease-in ${!imageReady ? 'opacity:1' : 'opacity:0'} pointer-events:none`} />
                        }
                    </div>
                    <div className="flex flex:col justify-content:start bg:url('/unlight/images/data/common/gene.swf/6.svg') background-position:-580|-6">
                        <div className="bg:url('/unlight/images/data/common/gene.swf/6.svg') background-position:-1|-2 w:180 h:22 align-items:center f:12 p:3|6 text-align:right font-family:serif">
                            Lv.{props.avatar?.level ?? 0} {props.avatar?.name ?? 'noname'}
                        </div>
                        <div className="bg:url('/unlight/images/data/common/gene.swf/6.svg') background-position:-185|-2 w:180 h:22 align-items:center f:12 p:3|6 text-align:right font-family:serif">
                            {props.avatar?.gems ?? 0}
                        </div>
                    </div>
                </div>
                <div className="abs top:0 w:full h:full ~backdrop-filter|300ms|ease bd:brightness(90%) pointer-events:none"></div>
            </div>
        </Link>
    )
}