import * as React from "react"
import { cn } from "../../lib/utils"

// 1. الحاوية الأساسية للـ Card
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-gray-700 bg-gray-800 text-gray-100 shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

// 2. الـ Header (القسم اللي فوق في الـ Card)
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

// 3. العنوان جوه الـ Header
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-bold leading-none tracking-tight text-white", className)}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

// 4. وصف صغير تحت العنوان
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-gray-400", className)}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

// 5. المحتوى الأساسي للـ Card
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

// 6. الفوتر (القسم اللي تحت، غالباً بيتحط فيه زراير)
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
