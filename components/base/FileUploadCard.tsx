"use client";

import { UploadCloud } from "lucide-react";

interface FileUploadCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    file: File | null;
    accept?: string;
    multiple?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileUploadCard({
    title,
    description,
    icon,
    file,
    accept,
    multiple = false,
    onChange,
}: FileUploadCardProps) {
    return (
        <label
            className="box  w-full  p-6  flex  flex-col  items-center  justify-center  cursor-pointer  hover:border-primary  transition "
        >
            <input
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={onChange}
                className="hidden"
            />

            <div className="flex items-center justify-center">
                {icon}
            </div>

            <h3 className="subtitle mt-4 text-center">
                {title}
            </h3>

            <p className="body-text mt-2 text-center text-secondary">
                {description}
            </p>

            <UploadCloud
                size={28}
                className="mt-5 text-secondary"
            />

            {file && (
                <p className="body-text mt-4 truncate text-primary font-medium">
                    {file.name}
                </p>
            )}
        </label>
    );
}



// const [file, setFile] = useState<File | null>(null);

// <FileUploadCard
//     title="Upload Resume"
//     description="PDF, DOC, DOCX (Max 5MB)"
//     icon={<UploadCloud className="text-primary" size={30} />}
//     file={file}
//     accept=".pdf,.doc,.docx"
//     onChange={(e) =>
//         setFile(e.target.files?.[0] || null)
//     }
// />