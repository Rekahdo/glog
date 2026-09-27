// import { Button as ButtonPrimitive } from "@base-ui/react/button"
// import { cva, type VariantProps } from "class-variance-authority"
// import { cn } from "cn"
// import { Download, ExternalLink } from "lucide-react";
// import Link from "next/link";
// import type { ButtonHTMLAttributes, ComponentProps, ReactElement, ReactNode } from "react"

// export const buttonVariants = cva(
//   cn(
//     // Base Layout & Alignment
//     "group/button inline-flex shrink-0 items-center justify-center select-none cursor-pointer",

//     // Typography & Motion
//     "text-sm font-bold whitespace-nowrap transition-all outline-none",

//     // Surface & Border Shapes
//     "rounded-lg border border-transparent bg-clip-padding",

//     // Focus & Interactive State Feedback
//     "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
//     "active:not-aria-[haspopup]:translate-y-px",
//     "disabled:pointer-events-none disabled:opacity-50",

//     // Form Validation (Error) States
//     "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
//     "dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",

//     // Child SVG Icon Sizing & Behavior
//     "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
//   ),
//   {
//     variants: {
//       variant: {
//         // Primary filled button
//         default: cn(
//           "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
//         ),

//         // Translucent background with crisp border
//         outline: cn(
//           "bg-background border-border text-foreground",
//           "hover:bg-accent hover:text-accent-foreground",
//           "aria-expanded:bg-accent aria-expanded:text-accent-foreground"
//         ),

//         // Secondary subtle background theme
//         secondary: cn(
//           "border-transparent bg-secondary text-secondary-foreground",
//           "hover:bg-secondary/80",
//           "aria-expanded:bg-secondary/80 aria-expanded:text-secondary-foreground"
//         ),

//         // Borderless hover-only background
//         ghost: cn(
//           "hover:bg-accent hover:text-accent-foreground",
//           "aria-expanded:bg-accent aria-expanded:text-accent-foreground"
//         ),

//         // Destructive / Danger actions
//         destructive: cn(
//           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//           "focus-visible:border-destructive/40 focus-visible:ring-destructive/20"
//         ),

//         // Inline text link styling
//         link: cn(
//           "text-forground underline-offset-4 font-semibold",
//         ),
        
//         navlink: cn(),

//         toggle: cn(
//           "focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-muted",
//           "active:not-aria-[haspopup]:translate-y-0",
//           "disabled:pointer-events-none disabled:opacity-50",
//           "text-xs font-medium border-0 text-muted-foreground transition-all duration-200",
//           "hover:text-foreground data-[active=true]:bg-primary data-[active=true]:text-primary-foreground",
//           "data-[active=true]:shadow-sm data-[active=true]:px-4"
//         )
//       },

//       size: {
//         default: "h-8 gap-1.5 px-2.5",
//         toggle: "h-7 gap-1 px-2 text-xs",
//         xs: "h-6 gap-1 px-2 text-xs rounded-[min(var(--radius-md),10px)] [&_svg:not([class*='size-'])]:size-3",
//         sm: "h-10 gap-1 px-2.5 text-[0.8rem] rounded-[min(var(--radius-md),12px)] [&_svg:not([class*='size-'])]:size-3.5",
//         lg: "h-12 gap-1.5 px-4",
//         icon: "size-8",
//         "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] [&_svg:not([class*='size-'])]:size-3",
//         "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)]",
//         "icon-lg": "size-9",
//       },

//       underline:{
//         hover: "hover:underline",
//       },

//       withIcon: {
//         true: "gap-2",
//         false: "",
//       },

//       fullWidth: {
//         true: "w-full",
//         false: "",
//       },
      
//       textAt: {
//         all: "[&_[data-slot=button-text]]:inline",
//         sm: "[&_[data-slot=button-text]]:hidden sm:[&_[data-slot=button-text]]:inline",
//         md: "[&_[data-slot=button-text]]:hidden md:[&_[data-slot=button-text]]:inline",
//         lg: "[&_[data-slot=button-text]]:hidden lg:[&_[data-slot=button-text]]:inline",
//       },
      
//       rounded:{
//         full: "rounded-full"
//       }
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//       withIcon: false,
//       fullWidth: false,
//       textAt: 'all',
//     },
//   }
// );

// export type ButtonType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">
//   & ButtonPrimitive.Props & VariantProps<typeof buttonVariants> & {
//     text?: string;
//     children?: ReactNode;
//     icon?: ReactNode;
//     iconPosition?: "start" | "end";
//     showTextAt?: "all" | "sm" | "md" | "lg";
//     active?: boolean;
//   };

// export function Button({
//   className,
//   children,
//   variant,
//   size,
//   fullWidth,
//   underline,
//   icon,
//   iconPosition = "start",
//   text,
//   showTextAt = "all",
//   rounded,
//   active,
//   ...props
// }: ButtonType) {
//   const hasIcon = Boolean(icon);
//   const hasText = Boolean(text) || Boolean(children);

//   return (
//     <ButtonPrimitive data-slot="button"
//       data-icon-position={hasIcon ? iconPosition : undefined}
//       data-active={active}
//       className={cn(
//         buttonVariants({
//           variant,
//           size, underline,
//           withIcon: hasIcon && hasText,
//           textAt: showTextAt, rounded,
//           fullWidth: Boolean(fullWidth),
//         }), className)} {...props} >

//       {hasIcon && iconPosition === "start" && icon}

//       {hasText && (
//         <span data-slot="button-text" className="hidden">
//           {text}
//           {children}
//         </span>
//       )}

//       {hasIcon && iconPosition === "end" && icon}
//     </ButtonPrimitive>
//   )
// }