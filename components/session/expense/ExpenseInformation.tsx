interface InformationItem {
    label: string;
    value: string;
    badge?: string;
    fullWidth?: boolean;
}

const information: InformationItem[] = [
    {
        label: "Paid For",
        value: "ABC Technologies",
        badge: "Client",
    },
    {
        label: "Department",
        value: "Development",
    },
    {
        label: "Purpose",
        value: "Hardware Procurement",
    },
    {
        label: "Project",
        value: "Inventory Management System",
    },
    {
        label: "Category",
        value: "Hardware",
    },
    {
        label: "Notes",
        value: "Purchased external SSD and accessories for the development team.",
    },
];

export default function ExpenseInformation() {
    return (
        <section className="w-full rounded-[20px] border border-border bg-white p-5 shadow-sm sm:p-6 lg:p-7">

            <h2 className="font-iceberg text-lg text-black sm:text-xl">
                Expense Information
            </h2>

            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">

                {information.map((item) => (
                    <div
                        key={item.label}
                        className={`
                            rounded-xl
                            border border-border
                            bg-[#F7F9FC]
                            px-4 py-3
                            sm:px-5 sm:py-3.5
                            ${item.fullWidth ? "sm:col-span-2" : ""}
                        `}
                    >

                        <p className="font-inter text-[8px] text-secondary sm:text-xs">
                            {item.label}
                        </p>

                        <div className="mt-1 flex flex-wrap items-center gap-2">

                            <p className="font-iceberg text-xs leading-5 text-black sm:text-base">
                                {item.value}
                            </p>

                            {item.badge && (
                                <span className="rounded-md bg-primary/10 px-2 py-0.5 font-inter text-[8px] text-primary">
                                    {item.badge}
                                </span>
                            )}

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}