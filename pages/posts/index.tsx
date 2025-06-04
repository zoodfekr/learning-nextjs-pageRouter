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
                            className='border rounded-lg bg-green-100 p-3'
                        >
                            {val.id}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default index

export const getStaticProps = (async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return { props: { posts } }
}) satisfies GetStaticProps<{ posts: posts_type[] }>
