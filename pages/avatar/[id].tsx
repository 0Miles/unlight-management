import AvatarSearch from '@/components/avatar-search'
import MainLayout from '@/layout/main'
export default function AvatarProfilePage() {

    return (
        <>
        </>
    )
}

AvatarProfilePage.getLayout = function getLayout(page: any) {
    return (
        <MainLayout>
            <AvatarSearch />
            {page}
        </MainLayout>
    )
}
