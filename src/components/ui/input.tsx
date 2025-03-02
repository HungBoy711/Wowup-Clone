import Image from "next/image";

interface InputProps {
    placeholder?: string;
    textColor?: string;
    bgColor?: string;
    fullWidth?: string;
    border?: string;
    type?: string;
}

export default function Input({ placeholder, textColor, bgColor, fullWidth, border, type = "text" }: InputProps) {
    return (
        <div className={`flex items-center ${border} ${bgColor} ${fullWidth}`}>
            <input
                type={type}
                placeholder={placeholder}
                className={`outline-none ${textColor} bg-transparent w-full`}
            />
        </div>
    );
}
