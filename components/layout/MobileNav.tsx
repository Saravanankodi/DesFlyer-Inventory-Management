"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Analysis from "../icons/Analysis"
import Expense from "../icons/Expense"
import Home from "../icons/Home"
import Plus from "../icons/Plus"
const menu = [
    {
        name: "Dashboard",
        href: "/",
        icon: Home,
    },
    {
        name: "Add Expense",
        href: "/add-expense",
        icon: Plus,
    },
    {
        name: "Expense Records",
        href: "/expense-records",
        icon: Expense,
    },
    {
        name: "Analytics",
        href: "/analytics",
        icon: Analysis,
    },
];
export default function MobileNav() {
    const pathname = usePathname();

    return (
        <nav
            className=" fixed bottom-2 left-3 right-3 z-50 flex h-15 items-center justify-around rounded-lg border-2 border-[#C9CBE2] bg-[#ffffff] px-3 md:hidden ">
            {menu.map((item) => {
                const Icon = item.icon;

                const active =
                    item.href === "/expense-records"
                        ? pathname === item.href ||
                        pathname.startsWith(`${item.href}/`)
                        : pathname === item.href;

                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        aria-label={item.name}
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-200  ${active
                            ? "text-primary"
                            : "text-black hover:bg-gray-50"
                                        }`}
                    >
                        <Icon className="w-6 h-6"/>
                    </Link>
                );
            })}
        </nav>
    );
}