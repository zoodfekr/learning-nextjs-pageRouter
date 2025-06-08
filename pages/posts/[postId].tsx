import NotFound from '@/components/common/NotFound'
import Show_Post from '@/components/posts/Show_post'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'


type posts_type = {
    userId: number
    id: number
    title: string
    body: string
}

const PostPage = ({ post }: { post?: posts_type }) => {

    if (!post) {
        <NotFound />
    } else {
        return <Show_Post data={post} />
    }
}
export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    // const posts = await res.json()
    // const paths = posts.map((post: posts_type) => ({
    //     params: { postId: post.id.toString() }
    // }))
    return {
        paths: [
            { params: { postId: '1' } },
            { params: { postId: '2' } },
            { params: { postId: '3' } },
        ],
        fallback: "blocking",
    }
}

export const getStaticProps: GetStaticProps<{ post: posts_type }> = async (context) => {
    const { postId } = context.params as { postId: string }
    const res = await fetch(`http://localhost:9000/posts/${postId}`)
    const post = await res.json()
    return {
        props: { post },
        revalidate: 10 // هر ۱۰ ثانیه یک بار صفحه رفرش می‌شود
    }
}