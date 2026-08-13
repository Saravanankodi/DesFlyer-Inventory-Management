import {
    FileText,
    Gavel,
    Plus,
} from "lucide-react";

interface Document {
    name: string;
    size: string;
    type: string;
    image?: string;
}

const documents: Document[] = [
    {
        name: "Invoice.pdf",
        size: "1.2 MB",
        type: "PDF",
        image: "/bill.png",
    },
    {
        name: "Receipt.jpg",
        size: "3.4 MB",
        type: "PNG",
        
    },
    {
        name: "Warranty.pdf",
        size: "0.8 MB",
        type: "PDF",
        image: "/bill.png",
    },
];

export default function SupportingDocuments() {
    return (
        <section className="w-full rounded-[20px] border border-border bg-white p-5 shadow-sm sm:p-6 lg:p-7">

            {/* Header */}
            <div className="flex items-center justify-between gap-4">

                <h2 className="font-iceberg text-lg text-black sm:text-xl">
                    Supporting Documents
                </h2>

                <button
                    type="button"
                    className="flex shrink-0 items-center gap-1 font-inter text-[9px] text-primary transition hover:underline sm:text-[10px]"
                >
                    <Plus size={12} />
                    Add File
                </button>

            </div>

            {/* Documents */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {documents.map((document) => (
                    <DocumentCard
                        key={document.name}
                        document={document}
                    />
                ))}

            </div>

        </section>
    );
}

interface DocumentCardProps {
    document: Document;
}

function DocumentCard({ document }: DocumentCardProps) {
    return (
        <div className="rounded-xl border border-border bg-white p-3">

            {/* Preview */}
            <div className="flex h-[120px] items-center justify-center overflow-hidden rounded-lg bg-[#F7F9FC] sm:h-[135px]">

                {document.image ? (
                    <img
                        src={document.image}
                        alt={document.name}
                        className="h-full w-full object-cover"
                    />
                ) : document.type === "PDF" && document.name === "Warranty.pdf" ? (
                    <Gavel
                        size={28}
                        className="text-[#B9C3D6]"
                    />
                ) : (
                    <FileText
                        size={28}
                        className="text-[#B9C3D6]"
                    />
                )}

            </div>

            {/* Details */}
            <div className="mt-3">

                <p className="truncate font-iceberg text-xs text-black sm:text-sm">
                    {document.name}
                </p>

                <p className="mt-0.5 font-inter text-[8px] text-secondary sm:text-[9px]">
                    {document.size} • {document.type}
                </p>

            </div>

        </div>
    );
}