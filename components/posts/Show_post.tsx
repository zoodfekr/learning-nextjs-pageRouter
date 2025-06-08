import { posts_type } from "@/types/posts";
import { useRouter } from "next/router";

const Show_Post = ({ data }: { data: posts_type }) => {


    const router = useRouter();

    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
                    fontFamily: "sans-serif",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "2rem"
                }}
            >
                <button
                    onClick={() => router.back()}
                    style={{
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
                <div style={{
                    background: "#fff",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    padding: "2rem 3rem",
                    maxWidth: "600px",
                    width: "100%",
                    textAlign: "right"
                }}>
                    <h2 style={{ color: "#3730a3", marginBottom: "1rem" }}>عنوان: {data.title}</h2>
                    <p style={{ color: "#334155", fontSize: "1.1rem" }}>متن: {data.body}</p>
                </div>
            </div>
        </>
    )
};
export default Show_Post