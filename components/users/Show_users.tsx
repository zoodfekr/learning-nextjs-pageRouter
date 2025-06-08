import { UserType } from "@/types/users";
import Link from "next/link";
import { useRouter } from "next/router";

const Show_users = ({ data }: { data: UserType[] }) => {

    const router = useRouter();
    return (
        <>
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
                        maxWidth: "800px",
                        margin: "0 auto",
                        background: "#fff",
                        borderRadius: "1rem",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                        padding: "2rem",
                    }}
                >
                    <h1 style={{ color: "#3730a3", marginBottom: "2rem", textAlign: "center" }}>لیست کاربران</h1>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {data.map(user => (
                            <li
                                key={user.id}
                                style={{
                                    background: "#f1f5f9",
                                    borderRadius: "0.75rem",
                                    padding: "1.2rem 1.5rem",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "1rem"
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                                    <span style={{ color: "#3730a3", fontWeight: "bold", fontSize: "1.1rem" }}>{user.name}</span>
                                    <span style={{ color: "#64748b" }}>نام کاربری: {user.username}</span>
                                    <span style={{ color: "#334155" }}>ایمیل: {user.email}</span>
                                    <span style={{ color: "#64748b" }}>شرکت: {user.company.name}</span>
                                    <span style={{ color: "#64748b" }}>شهر: {user.address.city}</span>
                                </div>


                                <Link
                                    href={`users/${user.id}`}
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


                            </li>
                        ))}
                    </ul>


                    <button
                        onClick={() => router.back()}

                        style={{
                            marginTop: '20px',
                            background: "#6366f1",
                            color: "#fff",
                            fontWeight: "bold",
                            padding: "0.7rem 2rem",
                            borderRadius: "0.5rem",
                            border: "none",
                            marginBottom: "2rem",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                            transition: "background 0.2s"
                        }}
                    >
                        بازگشت
                    </button>
                </div>
            </div>
        </>
    )
};

export default Show_users;