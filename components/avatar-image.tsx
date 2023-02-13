import { useEffect, useRef } from 'react'
import { PartInventories } from '@/database/entities/PartInventories'
import { getAvatarPartImage } from '@/utils/get-avatar-part-image'
import { loadImage } from '@/utils/load-image'


export default function AvatarImage(props: { partInventories?: PartInventories[], onReady?: (args: any) => any, className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas: any = canvasRef.current
        const context = canvas?.getContext('2d')

        const draw = async () => {
            let allPartImages: any[] = []
            for (const part of props.partInventories ?? []) {
                const images = part.avatarPart?.image?.split('+')
                if (images) {
                    for (const img of images) {
                        allPartImages.push(...getAvatarPartImage(img))
                    }
                }
            }
            allPartImages = allPartImages.sort((a, b) => b.p - a.p === 0 ? a.z - b.z : a.p - b.p)
            allPartImages.forEach(partImg => {
                if (partImg.url) {
                    partImg.img = loadImage(partImg.url)
                }
            })
            await Promise.allSettled(allPartImages.map(x => x.img))
            for (const partImg of allPartImages) {
                if (partImg.img && await partImg.img) {
                    context.drawImage(await partImg.img, partImg.x, partImg.y)
                }
            }
            if (props.onReady) (
                props.onReady(canvasRef.current)
            )
        }

        if (context && props.partInventories) {
            draw()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AvatarImage])

    return (
        <canvas className={props.className ?? ''} ref={canvasRef} height={425} width={250} />
    )
}