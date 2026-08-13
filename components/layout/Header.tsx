import React from "react";

interface HeaderProps {
    heading: string;
    description?: string;
    children?: React.ReactNode;
}

const Header = ({
    heading,
    description,
    children,
}: HeaderProps) => {
    return (
        <section className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            {/* Heading */}
            <div className="min-w-0 flex-1">

                <h2 className="font-iceberg text-xl font-normal leading-tight text-black sm:text-2xl md:text-[30px]">
                    {heading}
                </h2>

                {description && (
                    <p className="mt-1 font-iceberg text-xs text-black sm:text-sm md:text-base">
                        {description}
                    </p>
                )}

            </div>

            {/* Right Content */}
            {children && (
                <div className="w-full sm:w-fit">
                    {children}
                </div>
            )}

        </section>
    );
};

export default Header;