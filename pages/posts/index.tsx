import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'

type posts_type = {
    userId: number
    id: number
    title: string
    body: string
}

const index = (props: { posts: posts_type[] }) => {
    const data = props.posts
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
                fontFamily: "sans-serif",
                padding: "2rem"
            }}
        >
            <div
                style={{
                    maxWidth: "700px",
                    margin: "0 auto",
                    background: "#fff",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    padding: "2rem",
                }}
            >
                <h1 style={{ color: "#3730a3", marginBottom: "2rem", textAlign: "center" }}>لیست پست‌ها</h1>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {data.map((val) => (
                        <div
                            key={val.id}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                background: "#f1f5f9",
                                borderRadius: "0.75rem",
                                padding: "1rem 1.5rem",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                            }}
                        >
                            <div>
                                <p style={{ margin: 0, color: "#64748b", fontWeight: "bold" }}>ID: {val.id}</p>
                                <p style={{ margin: 0, color: "#334155" }}>عنوان: {val.title}</p>
                            </div>
                            <Link
                                href={`posts/${val.id}`}
                                style={{
                                    border: "none",
                                    borderRadius: "0.5rem",
                                    background: "#4ade80",
                                    color: "#065f46",
                                    padding: "0.5rem 1.2rem",
                                    fontWeight: "bold",
                                    textDecoration: "none",
                                    transition: "background 0.2s",
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
                                }}
                            >
                                مشاهده
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default index;

export const getStaticProps = (async () => {
    const res = await fetch('http://localhost:9000/posts')
    const posts = await res.json()
    return { 
        props: { posts },
        revalidate: 10 // هر ۱۰ ثانیه یک بار صفحه رفرش می‌شود
    }
}) satisfies GetStaticProps<{ posts: posts_type[] }>
