import Image from "next/image";
import { ReactNode } from "react";

interface BoxProps {
    bgColor?: string;
    fullWidth?: string;
    icon?: string;
    border?: string;
    alignment?: string;
    image?: string;
    children?: ReactNode;
}

export default function Box({ bgColor, fullWidth, icon, border, children, alignment, image }: BoxProps) {
    return (
        <div>
            <div className={`${bgColor} ${fullWidth} ${icon} ${border} ${alignment} ${image} `}>
                {children}
                <img className="p4 w-full h-full object-cover " src={image} />
            </div>
        </div>
    );
}