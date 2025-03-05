interface TextProps {
    text?: string;
    textColor?: string;
    fullWidth?: string;
    font?: string;
    icon?: string;
}

export default function Text({ text, font, textColor, fullWidth, icon }: TextProps) {
    return (
        <div>
            <p className={`${text} ${fullWidth} ${icon} ${textColor} ${font}`}>
                {text}
            </p>
        </div>
    );
}