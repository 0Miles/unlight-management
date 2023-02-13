import { DataSource } from 'typeorm'
import { entities } from './entities'
import dotenv from 'dotenv'
dotenv.config()

export const AppDataSource =  new DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: +(process.env.DATABASE_PORT ?? 3306),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    logging: false,
    synchronize: false,
    entities,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

export async function getAppDataSource() {
    await appDataSourceInitPromise
    return AppDataSource
}

const appDataSourceInitPromise = AppDataSource
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`)
})
    .catch((err) => {
        console.error(`Data Source initialization error`, err)
})