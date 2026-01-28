import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode
    type?: "button" | "submit"
    variant?: "primary" | "secondary" | "tertiary" | "PrimaryLarge"
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string;
}

export default function Button({
                                   children,
                                   variant = "primary",
                                   type = "button",
                                   onClick,
                                   className = ""
}: ButtonProps) {

    const base = "border rounded-full px-8 py-3 transition-all duration-150 hover:cursor-pointer"

    const variants = {
        primary:
            "bg-emerald-600 text-white hover:bg-emerald-700 focus:bg-emerald-800 hover:scale-105 active:scale-95",
        secondary: "",
        tertiary: "",
        PrimaryLarge:
            "bg-emerald-600 text-white hover:bg-emerald-700 focus:bg-emerald-800 hover:scale-105 transition mt-5",
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    )
}