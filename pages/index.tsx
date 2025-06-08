import Link from "next/link";

export default function Home() {



  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem 3rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "1.5rem",
            color: "#3730a3",
          }}
        >
          صفحه اصلی
        </h1>
        <p
          style={{
            marginBottom: "2rem",
            color: "#64748b",
          }}
        >
          به صفحه اصلی خوش آمدید
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          <Link
            href="/posts"
            style={{
              padding: "0.75rem 2rem",
              background: "#6366f1",
              color: "#fff",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background 0.2s",
            }}
          >
            پست‌ها
          </Link>
          <Link
            href="/users"
            style={{
              padding: "0.75rem 2rem",
              background: "#a5b4fc",
              color: "#3730a3",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background 0.2s",
            }}
          >
            کاربران
          </Link>
        </div>
      </div>
    </div>
  );
}
