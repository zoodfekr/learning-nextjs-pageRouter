import Show_Posts from '@/components/posts/Show_Posts'
import { posts_type } from '@/types/posts'
import { GetStaticProps } from 'next'
import React from 'react'
import { serverUrl } from '@/setting/app'



const index = (props: { posts: posts_type[] }) => {

    return (
        <Show_Posts data={props.posts} />
    )
}
export default index;



export const getStaticProps = (async () => {
    const res = await fetch(`${serverUrl}/posts`)
    const posts = await res.json()
    return {
        props: { posts },
        revalidate: 10 // هر ۱۰ ثانیه یک بار صفحه رفرش می‌شود
    }
}) satisfies GetStaticProps<{ posts: posts_type[] }>
