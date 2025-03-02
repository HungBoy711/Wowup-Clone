import Image from "next/image";

interface ButtonProps {
    text?: string;
    textColor?: string;
    bgColor?: string;
    fullWidth?: string;
    icon?: string;
    border?: string;
}

export default function Button({ text, textColor, bgColor, fullWidth, border, icon }: ButtonProps) {
    return (
        <button type="button"
            className={`${border} ${textColor} ${bgColor} ${fullWidth} `}
        >
            <span>{text}</span>
        </button>
    );
}
