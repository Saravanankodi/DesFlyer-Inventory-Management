"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    House,
    CirclePlus,
    ReceiptText,
    ChartColumn,
} from "lucide-react";
const menu = [
    {
        name: "Dashboard",
        href: "/",
        icon: House,
    },
    {
        name: "Add Expense",
        href: "/add-expense",
        icon: CirclePlus,
    },
    {
        name: "Expense Records",
        href: "/expense-records",
        icon: ReceiptText,
    },
    {
        name: "Analytics",
        href: "/analytics",
        icon: ChartColumn,
    },
];
export default function MobileNav() {
    const pathname = usePathname();

    return (
        <nav
            className=" fixed bottom-2 left-3 right-3 z-50 flex h-15 items-center justify-around rounded-[24px] border-[4px] border-[#C9CBE2] bg-[#F8F9FF] px-3 md:hidden ">
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
                        className={` flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-200
                            ${active
                                ? "text-primary"
                                : "text-black"
                            }
                        `}
                    >
                        <Icon
                            size={27}
                            strokeWidth={2}
                        />
                    </Link>
                );
            })}
        </nav>
    );
}