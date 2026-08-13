"use client";

import { usePathname } from "next/navigation";
import Search from "@/components/base/Search";
import {
    Bell,
    CalendarDays,
} from "lucide-react";

import Button from "@/components/base/Button";

export default function Topbar() {
    const pathname = usePathname();

    const titles: { [key: string]: string } = {
        "/": "Dashboard",
        "/add-expense": "Add Expense",
        "/expense-records": "Expense Records",
        "/analytics": "Analytics",
    };

    const title =
        titles[pathname] ||
        (pathname.startsWith("/expense-records/")
            ? "Expense Records"
            : "Dashboard");

    return (
        <header
            className=" sticky top-0 z-40 flex min-h-[60px] w-full items-center justify-between border-b border-border bg-white px-4 sm:px-5 md:px-6 lg:px-8" >

            <h1
                className=" shrink-0 font-iceberg text-base text-primary sm:text-lg md:text-xl  "  >
                {title}
            </h1>



            <div
                className=" flex items-center gap-2 sm:gap-3 md:gap-4  " >

                {/* Search */}

                <div
                    className=" hidden md:block md:w-[200px] lg:w-[245px]  " >
                    <Search
                        placeholder="Search expenses..."
                        className="w-full"
                    />
                </div>


                {/* Notification */}

                <button
                    type="button"
                    aria-label="Notifications"
                    className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-secondary transition-colors hover:bg-primary/10 hover:text-primary sm:h-10 sm:w-10  ">
                    <Bell
                        size={18}
                        strokeWidth={2}
                        className="sm:h-5 sm:w-5"
                    />
                </button>


                {/* Calendar */}

                <button
                    type="button"
                    aria-label="Calendar"
                    className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-secondary transition-colors hover:bg-primary/10 hover:text-primary sm:h-10 sm:w-10  ">
                    <CalendarDays
                        size={18}
                        strokeWidth={2}
                        className="sm:h-5 sm:w-5"
                    />
                </button>


                {/* Download Report */}

                <div className="hidden sm:block">
                    <Button
                        variant="primary"
                        className=" m-0 w-auto whitespace-nowrap px-3 py-2 font-iceberg text-sm md:px-4">
                        Download Report
                    </Button>
                </div>

            </div>
        </header>
    );
}