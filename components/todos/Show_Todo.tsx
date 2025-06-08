import { TodoType } from '@/types/todos'
import { useRouter } from 'next/router'
import React from 'react'

const Show_Todo = ({ data }: { data: TodoType }) => {

    const router = useRouter()
    
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                background: '#fff',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(55,48,163,0.10)',
                padding: '40px 32px',
                minWidth: '320px',
                maxWidth: '90vw',
                textAlign: 'center'
            }}>
                <h2 style={{
                    color: '#3730a3',
                    fontSize: '2rem',
                    marginBottom: '16px'
                }}>{data.title}</h2>
                <div style={{
                    marginBottom: '12px',
                    fontSize: '1.1rem',
                    color: '#64748b'
                }}>
                    شناسه: <span style={{ color: '#6366f1', fontWeight: 600 }}>{data.id}</span>
                </div>
                <div style={{
                    marginBottom: '20px',
                    fontSize: '1.1rem',
                    color: '#64748b'
                }}>
                    وضعیت:{" "}
                    <span style={{
                        color: data.completed ? "#22c55e" : "#f59e42",
                        fontWeight: 600
                    }}>
                        {data.completed ? "انجام شده" : "در انتظار انجام"}
                    </span>
                </div>
                <button
                    onClick={() => router.back()}
                    style={{
                        padding: '10px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        background: '#6366f1',
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                    }}
                    onMouseOver={e => (e.currentTarget.style.background = '#3730a3')}
                    onMouseOut={e => (e.currentTarget.style.background = '#6366f1')}
                >
                    بازگشت
                </button>
            </div>
        </div>
    )
}

export default Show_Todo