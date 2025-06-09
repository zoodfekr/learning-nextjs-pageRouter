
import { useParams } from 'next/navigation'
import useSWR from 'swr'

import Show_Todo from '@/components/todos/Show_Todo'
import { TodoType } from '@/types/todos'

const fetcher = async (todoId: string): Promise<TodoType> => {
    console.log({ todoId })
    const res = await fetch(`http://localhost:9000/todos/${todoId}`)
    return res.json()
}


const TodoPage = () => {

    const { todoId } = useParams(); // دریافت todoId از پارامترهای URL
    const { data, error } = useSWR(todoId, fetcher);

    console.log('todoId >>', todoId)

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>loading ... </div>;

    return <Show_Todo data={data} />;
};
export default TodoPage
