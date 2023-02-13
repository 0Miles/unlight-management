import type { NextApiRequest, NextApiResponse } from 'next'
import { getAppDataSource } from '@/database/app-data-source'
import { Avatars } from '@/database/entities/Avatars'
import { Like } from 'typeorm'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name } = req.query
    const appDataSource = await getAppDataSource()
    const avatars = await appDataSource.manager
        .find(Avatars, {
            relations: {
                partInventories: {
                    avatarPart: true
                },
            },
            where: {
                name: Like(`%${(name as string).replace('%', '\\%').replace('_', '\\_')}%`),
                partInventories: {
                    used: 1
                }
            },
            select: {
                id: true,
                name: true,
                gems: true,
                level: true,
                exp: true,
                partInventories: {
                    id: true,
                    avatarPart: {
                        name: true,
                        image: true
                    }
                }
            }
        })
    res.status(200).json(avatars)
}
