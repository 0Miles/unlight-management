import AvatarSearch from '@/components/avatar-search'
import MainLayout from '@/layout/main'
import axios from 'axios'

export default function AvatarSearchPage(props: any) {
    return (
        <>
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

export async function getServerSideProps({ query }: any) {
    if (query.keyword) {
        const res = await axios.get(`http://localhost:3000/api/find-avatars?name=${encodeURI(query.keyword)}`)
        return {
            props: {
                query,
                keyword: query.keyword,
                result: res.data
            }
        }
    }
    return {
        props: {
            query,
        }
    }
}