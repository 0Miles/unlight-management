import AvatarSearch from '@/components/avatar-search'
import MainLayout from '@/layout/main'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function Home() {
    const router = useRouter()

    useEffect(() => {
        router.prefetch('/avatar')
    }, [router])

    return (
        <>
        </>
    )
}

Home.getLayout = function getLayout(page: any) {
    return (
        <MainLayout>
            <AvatarSearch />
            {page}
        </MainLayout>
    )
}
