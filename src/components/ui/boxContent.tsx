import Image from "next/image";
import { ReactNode } from "react";

interface BoxContentProps {
    bgColor?: string;
    fullWidth?: string;
    icon?: string;
    border?: string;
    alignment?: string;
    children?: ReactNode;
}

export default function BoxContent({ bgColor, fullWidth, icon, border, children, alignment }: BoxContentProps) {
    return (
        <div>
            <div className={`${bgColor} ${fullWidth} ${icon} ${border} ${alignment} `}>
                {children}
            </div>
        </div>
    );
}