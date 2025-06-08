import NotFound from '@/components/common/NotFound'
import Show_users from '@/components/users/Show_users'
import { UserType } from '@/types/users'
import { GetServerSideProps } from 'next'
import React from 'react'


// COMPONENT
const index = ({ users }: { users: UserType[] }) => {
    if (!users) {
        return <NotFound />
    } else {
        return (
            <Show_users data={users} />
        )
    }
}
export default index


// FUNCTIONS
export const getServerSideProps = (async () => {
    const res = await fetch('http://localhost:9000/users')
    const users = await res.json()
    return {
        props: { users },
    }
}) satisfies GetServerSideProps<{ users: UserType[] }>
