import React from 'react'

const Aboutus = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                // background: "linear-gradient(135deg, #6366f1 0%, #a5b4fc 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Vazirmatn, sans-serif",
                padding: "2rem",
                position: "relative",
                overflow: "hidden"
            }}
        >
            {/* Glassmorphism Card */}
            <div
                style={{
                    background: "rgba(255,255,255,0.75)",
                    borderRadius: "1.5rem",
                    boxShadow: "0 8px 32px rgba(99,102,241,0.15)",
                    padding: "3rem 2.5rem",
                    maxWidth: "520px",
                    width: "100%",
                    textAlign: "center",
                    backdropFilter: "blur(8px)",
                    border: "1.5px solid rgba(99,102,241,0.15)",
                    position: "relative",
                    zIndex: 2
                }}
            >
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "1.5rem"
                }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#6366f1" opacity="0.15"/>
                        <path d="M12 12c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.67 0-8 1.337-8 4v2h16v-2c0-2.663-5.33-4-8-4z" fill="#6366f1"/>
                    </svg>
                </div>
                <h1 style={{
                    color: "#3730a3",
                    marginBottom: "1.2rem",
                    fontWeight: 800,
                    fontSize: "2rem",
                    letterSpacing: "-1px"
                }}>
                    درباره ما
                </h1>
                <p style={{
                    color: "#64748b",
                    fontSize: "1.15rem",
                    marginBottom: "1.5rem",
                    lineHeight: "2",
                    fontWeight: 500
                }}>
                    ما یک تیم جوان و خلاق هستیم که با هدف ارائه بهترین خدمات و تجربه کاربری، این وب‌سایت را توسعه داده‌ایم.
                    تمرکز ما بر نوآوری، سادگی و کیفیت است تا بتوانیم نیازهای شما را به بهترین شکل برآورده کنیم.
                </p>
                <p style={{
                    color: "#334155",
                    fontSize: "1rem",
                    lineHeight: "2",
                    marginBottom: "2rem"
                }}>
                    در مسیر رشد و پیشرفت، همواره پذیرای ایده‌ها و نظرات شما هستیم.
                    با ما همراه باشید تا آینده‌ای بهتر و هوشمندانه‌تر بسازیم.
                </p>
                <button
                    style={{
                        background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "0.75rem",
                        padding: "0.9rem 2.2rem",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        boxShadow: "0 2px 8px rgba(99,102,241,0.10)",
                        cursor: "pointer",
                        transition: "background 0.2s"
                    }}
                >
                    تماس با ما
                </button>
            </div>
            {/* Decorative Circles */}
            <div style={{
                position: "absolute",
                top: "-80px",
                left: "-80px",
                width: "180px",
                height: "180px",
                background: "radial-gradient(circle, #818cf8 60%, transparent 100%)",
                borderRadius: "50%",
                zIndex: 1,
                opacity: 0.25
            }} />
            <div style={{
                position: "absolute",
                bottom: "-60px",
                right: "-60px",
                width: "140px",
                height: "140px",
                background: "radial-gradient(circle, #6366f1 60%, transparent 100%)",
                borderRadius: "50%",
                zIndex: 1,
                opacity: 0.18
            }} />
        </div>
    )
}

export default Aboutus