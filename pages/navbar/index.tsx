import { NavbarType } from "@/types/navbar";
import Link from "next/link";

const Navbar = () => {

    const linkData: NavbarType[] = [
        { id: 1, href: "/", name: "home" },
        { id: 2, href: "/about", name: "aboutUs" },
        { id: 3, href: "/users", name: "users  " },
        { id: 4, href: "/posts", name: "posts " },
        { id: 5, href: "/todos", name: "todos " },
        { id: 6, href: "/comments", name: "comments " }
    ];

    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "25px",
                padding: "15px",
                backgroundColor: "#0070f3",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                position: "sticky",
                top: 0
            }}
        >
            {linkData.map((val) => (
                <Link key={val.id} href={val.href} passHref className=" rounded-lg p-1 bg-blue-100 min-w-20  " style={{ display: "flex", justifyContent: "center" }}>
                    {val.name}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
