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

    if (!post) {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
                    fontFamily: "sans-serif"
                }}
            >
                <div style={{
                    background: "#fff",
                    padding: "2rem 3rem",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    textAlign: "center",
                    color: "#ef4444",
                    fontWeight: "bold"
                }}>
                    پست پیدا نشد
                </div>
            </div>
        )
    }
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
                fontFamily: "sans-serif",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2rem"
            }}
        >
            <button
                onClick={() => router.back()}
                style={{
                    background: "#6366f1",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "0.7rem 2rem",
                    borderRadius: "0.5rem",
                    border: "none",
                    marginBottom: "2rem",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    transition: "background 0.2s"
                }}
            >
                بازگشت
            </button>
            <div style={{
                background: "#fff",
                borderRadius: "1rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                padding: "2rem 3rem",
                maxWidth: "600px",
                width: "100%",
                textAlign: "right"
            }}>
                <h2 style={{ color: "#3730a3", marginBottom: "1rem" }}>عنوان: {post.title}</h2>
                <p style={{ color: "#334155", fontSize: "1.1rem" }}>متن: {post.body}</p>
            </div>
        </div>
    )
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