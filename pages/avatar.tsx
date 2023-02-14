import AvatarSearch from '@/components/avatar-search'
import MainLayout from '@/layout/main'
import Head from 'next/head'

export default function AvatarSearchPage(props: any) {
    return (
        <>
            <Head>
                <title>Avatar Search - Unlight Management</title>
            </Head>
        </>
    )
}

AvatarSearchPage.getLayout = function getLayout(page: any) {
    return (
        <MainLayout>
            <AvatarSearch {...page.props} />
            {page}
        </MainLayout>
    )
}