import { useEffect, useState } from 'react'
import { Avatars } from '@/database/entities/Avatars'
import AvatarInfo from './avatar-info'

export default function AvatarList(props: { avatars?: Avatars[] | null }) {
    const [avatars, setAvatars] = useState<Avatars[] | null>(null)
    const [hidden, setHidden] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    useEffect(() => {
        if (!props.avatars) {
            setHidden(true)
        } else {
            setHidden(false)
            setAvatars(props.avatars)
        }
    }, [props])
    return (
        <div className={`grid-cols:5 grid-cols:4@<xl grid-cols:3@<lg grid-cols:2@<sm grid-cols:1@<xs gap:12 ${hidden ? '@fade|300ms|both' : ''}`}>
            {
                !!avatars?.length && avatars?.map((avatar: any, index) => <AvatarInfo key={index + avatar.name} avatar={avatar} index={index}></AvatarInfo>)
            }
            <div className={`rel opacity:.5 pointer-events:none ${loadingMore ? 'visibility:visible' : 'visibility:hidden'}`}>
                <AvatarInfo className={`@flashing|3s|infinite`} />
                <div className='abs w:full h:full top:0 bd:blur(2)'></div>
            </div>
        </div>
    )
}