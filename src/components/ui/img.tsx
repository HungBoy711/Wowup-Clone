import Image from "next/image";
import { ReactNode } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement>

export default function Img({ className, ...props }: Props) {
    return (

        < img className={className} {...props} />

    );
}