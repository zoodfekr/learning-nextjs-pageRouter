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
        <div>
            {data.map((val, index) => {
                return (
                    <div key={index} className='flex gap-2'>
                        <p>ID: {val.id}</p>
                        <p > title : {val.title}</p>
                        <Link
                            href={`posts/${val.id}`}
                            className='border rounded-lg bg-green-100 p-1'
                        >
                            show {val.id}
                        </Link>
                    </div>
                )
            })}
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
