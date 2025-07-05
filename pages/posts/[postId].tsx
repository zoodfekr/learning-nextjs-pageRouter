import NotFound from '@/components/common/NotFound'
import Show_Post from '@/components/posts/Show_post'
import { getPostById } from '@/lib/postsService'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
// import { serverUrl } from '@/setting/app'
// import { getAllPosts } from '@/lib/postsService'


type posts_type = {
    userId: number
    id: number
    title: string
    body: string
}




export const getStaticProps: GetStaticProps<{ post: posts_type }> = async (context) => {

    const { postId } = context.params as { postId: string }

    // const res = await fetch(`${serverUrl}/posts/${postId}`)
    // const post = await res.json()

    const post = getPostById(Number(postId))

    // اگر پستی پیدا نشد:
    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: { post },
        revalidate: 10,
    };
}

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







const PostPage = ({ post }: { post?: posts_type }) => {

    if (!post) return <NotFound />
    return <Show_Post data={post} />
}
export default PostPage

