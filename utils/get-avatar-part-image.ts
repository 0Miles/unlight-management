import { unlightImages } from '@/constants/unlight-images-list'
import { partImageConfig } from '@/constants/part-image-config'

const partTypeCommonConfig: any = {
    'eye': {
        x: 136,
        y: 98
    },
    'hair': {
        x: 125,
        y: 55
    },
    'mouth': {
        x: 144,
        y: 125
    },
}

export function getAvatarPartImage(key: string) {
    if (partImageConfig[key]) {
        return partImageConfig[key]
    }
    const partType = key.match(/^([^_]*)_/)?.[1] ?? ''
    const filePath = unlightImages.find((x: string) => x.startsWith(`public/avatar_parts/${key}.swf/`) && x.endsWith('.svg'))

    return filePath? [{
        url: '/unlight/images/' + filePath,
        x: partTypeCommonConfig[partType]?.x ?? 0,
        y: partTypeCommonConfig[partType]?.y ?? 0,
        p: +(key.match(/.*_p(\d+)/)?.[1] ?? 0),
        z: 0
    }] : []
}