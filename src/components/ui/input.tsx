import React from "react";
import { cva, type VariantProps } from "class-variance-authority";



const inputVariants = cva(
    "px-4 py-2 rounded font-semibold transition-colors duration-200",
    {
        variants: {
            variant: {
                primary: "input-gamic-primary",
                secondary: "input-gamic-secondary",
                danger: "bg-red-900/50 text-white border border-red-500 focus:outline-none focus:border-red-400 focus:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
            },
            size: {
                sm: "py-1 px-2 text-sm",
                md: "py-2 px-4 text-base",
                lg: "py-3 px-6 text-lg"
            },
            isLoading: {
                true: "opacity-50 cursor-not-allowed"
            }
        }
    }
)
// Native <input> elements already have a 'size' attribute that expects a Number.
// Because we want our 'size' to be "sm" | "md" | "lg", we must Omit the native 'size' first!
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    className?: string
    variant?: "primary" | "secondary" | "danger"
    size?: "sm" | "md" | "lg"
    isLoading?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    // 2. Add 'ref' as the second parameter here!
    ({ variant, size, isLoading, className, ...props }, ref) => {
        return (
            // 3. <input> is a self-closing tag (<input />).
            // 4. Attach the ref={ref} to it.
            <input 
                ref={ref}
                className={inputVariants({ variant, size, isLoading, className })} 
                {...props} 
            />
        )
    }
)
Input.displayName = "Input"
export default Input  