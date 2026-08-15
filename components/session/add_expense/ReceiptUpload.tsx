"use client";

import { ChangeEvent, useRef, useState } from "react";
import {
    CloudUpload,
    FileText,
    Image as ImageIcon,
    X,
} from "lucide-react";

interface ReceiptUploadProps {
    onFileChange?: (file: File | null) => void;
}

export default function ReceiptUpload({
    onFileChange,
}: ReceiptUploadProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState("");

    const handleFile = (selectedFile: File | undefined) => {
        if (!selectedFile) return;

        setError("");

        const allowedTypes = [
            "application/pdf",
            "image/jpeg",
            "image/png",
        ];

        const maxSize = 5 * 1024 * 1024;

        if (!allowedTypes.includes(selectedFile.type)) {
            setError("Only PDF, JPG or PNG files are allowed.");
            return;
        }

        if (selectedFile.size > maxSize) {
            setError("File size must be less than 5MB.");
            return;
        }

        setFile(selectedFile);
        onFileChange?.(selectedFile);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleFile(event.target.files?.[0]);
    };

    const removeFile = () => {
        setFile(null);
        setError("");

        if (inputRef.current) {
            inputRef.current.value = "";
        }

        onFileChange?.(null);
    };

    return (
        <div className="w-full">
            <input
                ref={inputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleChange}
                className="hidden"
            />

            {!file ? (
                <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    className=" flex min-h-50 w-full flex-col items-center justify-center rounded-lg border border-border bg-white px-4 py-5 text-center transition-all hover:border-primary hover:bg-primary/[0.02]
                    "
                >
                    <span
                        className=" flex h-18 w-18 items-center justify-center rounded-full bg-primary/10 text-primary
                        "
                    >
                        <CloudUpload size={27} />
                    </span>

                    <span className="mt-2 font-inter text-base font-medium text-black sm:text-sm">
                        Upload Bill / Receipt
                    </span>

                    <span className="mt-0.5 font-inter text-xs text-secondary">
                        PDF, JPG or PNG (Max 5MB)
                    </span>
                </button>
            ) : (
                <div className="flex min-h-50 items-center gap-3 rounded-lg border border-primary/30 bg-primary/[0.03] px-3 py-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {file.type === "application/pdf" ? (
                            <FileText size={18} />
                        ) : (
                            <ImageIcon size={18} />
                        )}
                    </div>

                    <div className="min-w-0 flex-1 text-left">
                        <p className="truncate font-inter text-xs font-medium text-black">
                            {file.name}
                        </p>

                        <p className="mt-0.5 font-inter text-[9px] text-secondary">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={removeFile}
                        className=" flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-secondary transition hover:bg-red-50 hover:text-red-500
                        "
                    >
                        <X size={14} />
                    </button>

                </div>
            )}

            {error && (
                <p className="mt-1.5 font-inter text-[9px] text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}