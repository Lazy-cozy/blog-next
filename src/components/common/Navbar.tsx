import React from "react";
import Link from "next/link";

interface NavbarItem {
    id: number;
    title: string;
    path: string;
}

const Navbar: React.FC = () => {
    const navbarData: NavbarItem[] = [
        {
            id: 1,
            title: "Articles",
            path: "/",
        },
        {
            id: 2,
            title: "About",
            path: "/about",
        },
    ];

    return (
        <nav
            aria-label="Main Navigation"
            className="border-b-4 border-green-700 text-center fixed top-0 bg-green-600 font-bold w-full text-lg text-white"
        >
            <ul>
                {navbarData.map((item) => (
                    <li key={item.id} className="inline-block py-4">
                        <Link href={item.path} aria-label={item.title} className="pl-6 pr-8">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
