import NotFound from '@/components/common/NotFound'
import Show_user from '@/components/users/Show_user'
import { UserType } from '@/types/users'
import { GetServerSideProps } from 'next'
import React from 'react'
import { serverUrl } from '@/setting/app'

// COMPONENT
const index = ({ user }: { user: UserType }) => {
    if (!user) {
        return <NotFound />
    } else {
        return (
            <Show_user data={user} />
        )
    }
}
export default index


// FUNCTIONS
export const getServerSideProps = (async (context) => {

    const { userId } = context.params as { userId: string }

    const res = await fetch(`${serverUrl}/users/${userId}`)
    const user = await res.json()
    return {
        props: { user },
    }
}) satisfies GetServerSideProps<{ user: UserType }>
