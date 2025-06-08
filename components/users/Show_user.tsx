import { UserType } from "@/types/users";
import { useRouter } from "next/router";

const Show_user = ({ data }: { data: UserType }) => {

    const router = useRouter();
    return (
        <div style={{
            maxWidth: "400px",
            margin: "20px auto",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            backgroundColor: "#f9f9f9",
            color: "#333"
        }}>



            <h2 style={{ textAlign: "center", marginBottom: "15px", color: "#0070f3" }}>
                اطلاعات کاربر
            </h2>

            <section style={{ marginBottom: "15px" }}>
                <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>مشخصات شخصی</h3>
                <p><strong>نام:</strong> {data.name}</p>
                <p><strong>نام کاربری:</strong> {data.username}</p>
                <p><strong>ایمیل:</strong> {data.email}</p>
                <p><strong>تلفن:</strong> {data.phone}</p>
                <p><strong>وبسایت:</strong> {data.website}</p>
            </section>

            <section style={{ marginBottom: "15px" }}>
                <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>آدرس</h3>
                <p><strong>شهر:</strong> {data.address.city}</p>
                <p><strong>خیابان:</strong> {data.address.street}</p>
                <p><strong>سوییت:</strong> {data.address.suite}</p>
                <p><strong>کدپستی:</strong> {data.address.zipcode}</p>
                <p><strong>مختصات جغرافیایی:</strong> lat {data.address.geo.lat} / lng {data.address.geo.lng}</p>
            </section>

            <section>
                <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>شرکت</h3>
                <p><strong>نام شرکت:</strong> {data.company.name}</p>
                <p><strong>شعار:</strong> {data.company.catchPhrase}</p>
                <p><strong>فعالیت:</strong> {data.company.bs}</p>
            </section>


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
    );
};

export default Show_user;
