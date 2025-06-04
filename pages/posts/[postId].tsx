import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'


type posts_type = {
    userId: number
    id: number
    title: string
    body: string
}

const PostPage = ({ post }: { post?: posts_type }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    } else {
        if (!post) return <div>Post not found</div>
        else {
            return (
                <div className='border flex flex-col p-2 m-1 gap-1'>
                    <h1>title : {post.title}</h1>
                    <p>body : {post.body}</p>
                </div>
            )
        }
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
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<{ post: posts_type }> = async (context) => {
    const { postId } = context.params as { postId: string }
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const post = await res.json()
    return { props: { post } }
}