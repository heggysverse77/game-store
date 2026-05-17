import React from "react";
import { cva, type VariantProps } from "class-variance-authority";



const buttonVariants = cva(
  "px-4 py-2 rounded font-semibold transition-colors duration-200",
  {
    variants: {
      variant: {
        primary: "btn-gamic-primary",
        secondary: "btn-gamic-secondary",
        danger: "bg-red-600 text-white hover:bg-red-700 shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_rgba(220,38,38,0.8)]"
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
// 1. Capitalize the interface name (Best Practice)
// 2. Extend native button attributes so you get onClick, disabled, type, etc. for free!
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: "primary" | "secondary" | "danger"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
  children?: React.ReactNode // Usually optional for buttons
}

// 3. We wrap the component in React.forwardRef so it can accept a 'ref'
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, isLoading, className, ...props }, ref) => {
    return (
      <button 
        ref={ref} // 4. Attach the ref to the actual HTML button
        className={buttonVariants({ variant, size, isLoading, className })}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button" 

export default Button