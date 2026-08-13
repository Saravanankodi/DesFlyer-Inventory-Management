import { Iceberg, Inter } from "next/font/google";

import Footer from "@/components/layout/footer";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import MobileNav from "@/components/layout/MobileNav";

const iceberg = Iceberg({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-heading",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
});

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${iceberg.variable} ${inter.variable} flex h-screen overflow-hidden bg-white`}>
            <div className="hidden lg:block">
                <Sidebar />
            </div>
            <div className="flex min-w-0 flex-1 flex-col pb-15 sm:pb-0">
                <div className="hidden sm:block"><Topbar /></div>
                <div className="sm:hidden mt-4">
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
                </div>
                <main className="flex-1 overflow-y-auto hide-scroll">
                    {children}
                </main>
                <footer className="hidden sm:block shrink-0">
                    <Footer />
                </footer>
            </div>
            <MobileNav />
        </div>
    );
}