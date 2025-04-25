import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Categories = () => {

    const router = useRouter()

    const slugValue: string | string[] = router.query.slug || []

    console.log(slugValue);

    const testRouter = [
        {
            id: 1,
            name: 'category 1 ',
            href: '1'
        },
        {
            id: 2,
            name: 'category 2 ',
            href: '2'
        },
        {
            id: 3,
            name: 'category 3 ',
            href: {
                pathname: '3',
                query: { test: 'value' }
            }
        }
    ]

    if (slugValue?.length == 0) {

        return (
            <>
                <h3>home categories</h3>
                <div className="flex flex-col gap-3 p-3 border border-red-500">
                    {testRouter.map(val =>
                        <Link key={val.id} href={val.href}>{val.name}</Link>
                    )}
                </div>
            </>
        )
    } else {

        return (

            <>
                <div className='border gap-4 p-4 flex flex-col '>
                    <div className='text1' > Categories {slugValue}</div>
                    <button onClick={() => router.push('/categories')} className='cursor-pointer'> برگشت</button>
                </div>
            </>
        )
    }

}

export default Categories