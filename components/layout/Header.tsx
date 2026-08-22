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
        <section className={`flex w-full gap-0 md:gap-4 
        ${children
            ?"flex-row items-center justify-between"
            :""
        }`}>
            {/* Heading */}
            <div className={`min-w-0
                ${children
                    ?"w-[70%] md:full":"w-full"
                }`}>
                <h2 className={`font-iceberg text-2xl font-normal leading-tight text-black sm:text-3xl md:text-4xl
               `}>
                    {heading}
                </h2>
                {description && (
                    <p className="mt-1 font-iceberg text-[13px] text-secondary sm:text-sm md:text-base">
                        {description}
                    </p>
                )}
            </div>
            {/* Right Content */}
            <div>
            {children && (
                <div className=" w-full">
                    {children}
                </div>
            )}
            </div>
        </section>
    );
};

export default Header;