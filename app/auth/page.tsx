"use client";

import { useState } from "react";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
} from "lucide-react";

import Input from "@/components/base/Input";
import Button from "@/components/base/Button";
import Tags from "@/components/base/Tags";
import Footer from "@/components/layout/footer";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);

    return (
        <main className="min-h-screen bg-[#F7F9FC]">

            <div className="flex min-h-screen flex-col">

                {/* Login Section */}
                <section className="flex flex-1 flex-col items-center px-4 py-8 sm:py-8 md:py-8">

                    {/* Logo */}
                    <div className="flex flex-col items-center">

                        <img
                            src="/logo.png"
                            alt="DesFlyer"
                            className="w-32 sm:w-36 md:w-40"
                        />

                        <p className="mt-2 font-iceberg text-[10px] tracking-[0.25em] text-secondary sm:text-xs">
                            INTERNAL EXPENSE MANAGEMENT SYSTEM
                        </p>

                    </div>


                    {/* Login Card */}
                    <div className="mt-4 w-full max-w-130 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:mt-4 sm:p-7 md:p-6">

                        {/* Tag */}
                        <Tags
                            words="WORKSPACE ACCESS"
                            color="text-primary"
                            bg="bg-primary/10"
                        />


                        {/* Heading */}
                        <div className="mt-3">

                            <h1 className="font-iceberg text-[24px] leading-8 text-black sm:text-[26px]">
                                Welcome Back
                            </h1>

                            <p className="mt-1 font-iceberg text-sm leading-6 text-secondary sm:text-[15px]">
                                Login in to access your secure DesFlyer workspace.
                            </p>

                        </div>


                        {/* Form */}
                        <form className="mt-5 space-y-5">

                            {/* Email */}
                            <div>

                                <label className="mb-2 block font-iceberg text-xs text-black sm:text-sm">
                                    Work Email
                                </label>

                                <div className="relative">

                                    <Mail
                                        size={17}
                                        strokeWidth={1.7}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary"
                                    />

                                    <Input
                                        type="email"
                                        placeholder="john.doe@desflyer.com"
                                        className="h-11 rounded-lg pl-10 pr-4 text-sm"
                                    />

                                </div>

                            </div>


                            {/* Password */}
                            <div>

                                <label className="mb-2 block font-iceberg text-xs text-black sm:text-sm">
                                    Password
                                </label>

                                <div className="relative">

                                    <Lock
                                        size={17}
                                        strokeWidth={1.7}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary"
                                    />

                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="h-11 rounded-lg pl-10 pr-10 text-sm"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-secondary transition hover:text-primary"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={17} />
                                        ) : (
                                            <Eye size={17} />
                                        )}
                                    </button>

                                </div>

                            </div>


                            {/* Remember / Forgot */}
                            <div className="flex items-center justify-between">

                                <label className="flex cursor-pointer items-center gap-2">

                                    <input
                                        type="checkbox"
                                        checked={remember}
                                        onChange={(e) =>
                                            setRemember(e.target.checked)
                                        }
                                        className="h-4 w-4 cursor-pointer accent-primary"
                                    />

                                    <span className="font-iceberg text-xs text-black sm:text-sm">
                                        Remember Me
                                    </span>

                                </label>


                                <button
                                    type="button"
                                    className="font-iceberg text-xs text-primary hover:underline sm:text-sm"
                                >
                                    Forgot Password?
                                </button>

                            </div>


                            {/* Login */}
                            <Button
                                variant="primary"
                                type="submit"
                                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg font-iceberg text-base"
                            >
                                Login In
                                <ArrowRight size={18} />
                            </Button>

                        </form>


                        {/* Divider */}
                        <div className="my-5 border-t border-border" />


                        {/* Security */}
                        <div className="flex items-center justify-center gap-2">

                            <Lock
                                size={12}
                                className="shrink-0 text-secondary"
                            />

                            <p className="font-iceberg text-[10px] text-secondary sm:text-xs">
                                Secure access for authorized DesFlyer employees only
                            </p>

                        </div>

                    </div>


                    {/* Login Information */}
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-2 font-iceberg text-[10px] text-secondary sm:mt-7 sm:text-xs">

                        <span>© 2026 DesFlyer</span>

                        <span>•</span>

                        <span>Internal Use Only</span>

                        <span>•</span>

                        <button
                            type="button"
                            className="hover:text-primary"
                        >
                            Privacy
                        </button>

                        <span>•</span>

                        <button
                            type="button"
                            className="hover:text-primary"
                        >
                            Support
                        </button>

                        <span>•</span>

                        <span>Version 1.0</span>

                    </div>

                </section>


                {/* Existing Footer Component */}
                <Footer />

            </div>

        </main>
    );
}