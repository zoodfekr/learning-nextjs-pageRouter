'use client'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import NotFound from '@/components/common/NotFound'
import Show_Todo from '@/components/todos/Show_Todo'
import { TodoType } from '@/types/todos'

const getData = async (url: string): Promise<TodoType> => {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
}

const TodoPage = () => {
    const params = useParams()
    const todoId = params?.id as string

    const { data, isLoading, error } = useSWR(
        todoId ? `http://localhost:9000/todos/${todoId}` : null,
        getData
    )

    if (isLoading) {
        return <div>در حال بارگذاری...</div>
    }

    if (error || !data) {
        return <NotFound />
    }

    return <Show_Todo data={data} />
}

export default TodoPage
