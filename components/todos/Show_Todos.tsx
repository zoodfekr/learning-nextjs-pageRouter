import React from 'react'
import Link from 'next/link'
import { TodoType } from '@/types/todos'



// تابع کوتاه‌کننده متن
const truncate = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
}

const Show_Todos = ({ data }: { data: TodoType[] }) => {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
            padding: '40px'
        }}>
            <h1 style={{
                textAlign: 'center',
                fontSize: '2.5rem',
                marginBottom: '32px',
                color: '#3730a3'
            }}>لیست کارها</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px'
            }}>
                {data.map(todo => (
                    <Link key={todo.id} href={`/todos/${todo.id}`} style={{ textDecoration: 'none' }}>
                        <div
                            style={{
                                background: '#fff',
                                borderRadius: '16px',
                                boxShadow: '0 4px 16px rgba(55,48,163,0.08)',
                                padding: '24px',
                                transition: 'transform 0.15s, box-shadow 0.15s',
                                cursor: 'pointer',
                                color: '#3730a3',
                                fontWeight: 500,
                                fontSize: '1.1rem',
                                height: '120px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                minWidth: '0',
                                overflow: 'hidden'
                            }}
                            onMouseOver={e => {
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px) scale(1.03)';
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(55,48,163,0.15)';
                            }}
                            onMouseOut={e => {
                                (e.currentTarget as HTMLDivElement).style.transform = '';
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(55,48,163,0.08)';
                            }}
                        >
                            <span style={{
                                display: 'block',
                                width: '100%',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                {truncate(todo.title, 40)}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Show_Todos