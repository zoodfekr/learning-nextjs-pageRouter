import React from 'react'
import useSWR from 'swr'
import Show_Todos from '@/components/todos/Show_Todos'

const getData = async () => {
    const res = await fetch(`http://localhost:9000/todos`)
    const data = await res.json()
    return data
}


const Todos = () => {
    const { data, isLoading } = useSWR('getTodos', getData)

    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <Show_Todos data={data} />
    )
}

export default Todos