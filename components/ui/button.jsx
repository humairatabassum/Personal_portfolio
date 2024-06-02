import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
 "inline-flex items-center justify-center uppercase whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-purple-500 text-primary-foreground hover:bg-purple-400",
        primary: "bg-primary text-white",
        outline: " border border-purple-500 bg-transparent text-purple-500 hover:bg-purple-500 hover:text-primary"
        
      },
      size: {
        default: "h-[44px] px-6 rounded-full",
        sm: "h-9 rounded-md px-3",
        md:"h-[48px] px-6",
        lg: "h-[56px] rounded-full px-8 text-sm uppercase tracking-[2px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
