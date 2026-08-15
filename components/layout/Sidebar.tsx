"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    CirclePlus,
    FileText,
    ChartNoAxesColumn,
    Settings,
    CircleHelp,
    Plus,
} from "lucide-react";

import Button from "../base/Button";
import { Analysis, Expense } from "../icons";

const menu = [
    {
        name: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
    },
    {
        name: "Add Expense",
        href: "/add-expense",
        icon: CirclePlus,
    },
    {
        name: "Expense Records",
        href: "/expense-records",
        icon: Expense,
        custom: true,
    },
    {
        name: "Analytics",
        href: "/analytics",
        icon: Analysis,
        custom: true,
    },
];
export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="sticky top-0 z-50 h-screen w-55 shrink-0 border-r border-[#BCCBB94D] bg-white">
            <div className="flex h-screen flex-col items-center justify-between px-4 py-4">

              
                <main className="w-full">

                    {/* Logo */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/logo.png"
                            alt="DesFlyer"
                            className="h-12 w-auto object-contain"
                        />

                        <p className="mt-1 font-iceberg text-xl text-[#414755]">
                            Internal Expense
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="mt-6 flex flex-col gap-2 space-y-4">

                         
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
                                    className={`relative flex h-11 items-center gap-3 px-1 transition
                ${active
                                            ? "bg-primary/10 text-primary"
                                            : "text-black hover:bg-gray-50"
                                        }
            `}
                                >
                                    <Icon
                                        size={22}
                                        {...(item.custom ? { active } : {})}
                                    />

                                    <span className="font-iceberg text-xl">
                                        {item.name}
                                    </span>

                                    {active && (
                                        <span className="absolute bottom-0 left-0 h-1 w-full rounded-t-full bg-primary" />
                                    )}
                                </Link>
                            );
                        })}

                    </nav>
                </main>

            
                <div className="w-full">

                    {/* New Report */}
                    <div className="flex justify-center">
                        <Button
                            variant="primary"
                            className="m-0"
                        >
                            <Plus size={18} />
                            <span>New Report</span>
                        </Button>
                    </div>

                    <div className="my-4 border-t border-border" />

                    {/* Settings */}
                    <Link
                        href="/settings"
                        className=" flex items-center gap-3 px-2 py-1.5 font-iceberg text-lg text-black hover:text-primary" >
                        <Settings size={18} />
                        <span>Settings</span>
                    </Link>

                    {/* Help */}
                    <Link
                        href="/help"
                        className=" flex items-center gap-3 px-2 py-1.5 font-iceberg text-lg text-black hover:text-primary" >
                        <CircleHelp size={18} />
                        <span>Help/Support</span>
                    </Link>

                    {/* User */}
                    <div className="mt-3 flex items-center gap-2 px-2">

                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                            <img
                                src="/user.png"
                                alt="Admin User"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="min-w-0">
                            <p className="font-iceberg text-base font-medium text-black">
                                Admin User
                            </p>

                            <p className="font-iceberg text-xs text-secondary">
                                Finance Dept.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </aside>
    );
}