import Show_comments from "@/components/comments/Show_comments";
import { commmentsType } from "@/types/comments";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import FilteButtons from "./_partials/FilteButtons";
import { serverUrl } from '@/setting/app'


// FUNCTIONS
export const getServerSideProps = (async (context) => {
    const { postId } = context.query
    const q = postId ? `?postId=${postId}` : ''
    const res = await fetch(`${serverUrl}/comments${q}`)
    const comments = await res.json()
    return { props: { comments } }
}) satisfies GetServerSideProps<{ comments: commmentsType[] }>



// component
const CommentsPage = ({ comments }: { comments: commmentsType[] }) => {

    const router = useRouter()

    const [filteredData, setfilteredData] = useState(comments) // save data to use


    const handle_filterData = async (id: string) => {
        router.push(`/comments/?postId=${id}`)
        const res = await fetch(`${serverUrl}/comments?postId=${id}`)
        const comments = await res.json()
        setfilteredData(comments)
    }


    if (!comments) return <p>loading...</p>
    return (
        <>
            <FilteButtons handleFunction={handle_filterData} />
            <Show_comments data={filteredData} />
        </>
    )
};
export default CommentsPage








