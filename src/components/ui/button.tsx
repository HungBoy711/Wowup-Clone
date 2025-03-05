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
        <div >
            <button type="button"
                className={`${border} ${textColor} ${bgColor} ${fullWidth} `}
            >
                <span>{text}</span>
            </button>
        </div>
    );
}
