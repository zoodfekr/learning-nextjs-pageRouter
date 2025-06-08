const NotFound = () => {


    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
                    fontFamily: "sans-serif"
                }}
            >
                <div style={{
                    background: "#fff",
                    padding: "2rem 3rem",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    textAlign: "center",
                    color: "#ef4444",
                    fontWeight: "bold"
                }}>
                    اطلاعاتی یافت نشد
                </div>
            </div>

        </>
    )
};
export default NotFound;
