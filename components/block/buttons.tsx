import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import Link from "next/link";
import { LogIn, LogOut } from "lucide-react";
import { ReactNode } from "react";
import { Button, buttonVariants } from "../ui/button";
import { text } from "stream/consumers";

type ButtonsType = VariantProps<typeof ButtonsVariants> & {
  className?: string;
  btns: ReactNode[]
}

const ButtonsVariants = cva(
  [
    "flex flex-wrap gap-4 md:gap-6 align-center justify-center",
  ],
  {
    variants: {
      width: {
        stretch: "w-full",
        fit: "w-fit",
      },
    },
    defaultVariants: {
      width: 'stretch',
    }
  }
)

export function Buttons({ btns, width, className }: ButtonsType) {
  if (!btns) return null;
  return (
    <div className={cn(ButtonsVariants({ width, className }))}>
      {btns}
    </div>
  )
}

// ======================================================================================================
// ======================================================================================================
// ======================================================================================================

type WebBtnType = VariantProps<typeof buttonVariants> & {
  text?: string;
  href: string;
  visible?: boolean;
  className?: string;
  onClick?: () => void
}

export function PageBtn({ 
  text, 
  href, 
  visible = true, 
  className, 
  onClick, 
  ...props 
}: WebBtnType) {
  if (!visible) return null;

  return (
    <Link href={href} onClick={onClick}
      className={cn(buttonVariants({...props}), className)}>
        {text}
    </Link>
  );
}

export function AnchorBtn({
  text,  
  href, 
  visible = true, 
  className, 
  onClick, 
  ...props 
}: WebBtnType) {
  if (!visible) return null;

  const scrollToId = () => {
    if (onClick) onClick();
    const element = document.getElementById(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a href={href} onClick={(e) => { e.preventDefault(); scrollToId() }}
      className={cn(buttonVariants({...props}), className, "text-start")} >
        {text}
    </a>
  );
}

export function LoginBtn({ 
  text, 
  visible = true, 
  className, 
  onClick, 
  ...props 
}: Omit<WebBtnType, "href">) {
  if (!visible) return null;

  return (
    <Link href={"/auth/login"} onClick={onClick} tabIndex={-1}
      className={cn(buttonVariants({variant: "outline", ...props}), className)}>
        Login
    </Link>
  );
}

export function LogoutBtn({ 
  text, 
  visible = true, 
  className, 
  onClick, 
  ...props 
}: Omit<WebBtnType, "href">) {
  if (!visible) return null;

  return (
    <Link href={"/auth/l"} onClick={onClick} tabIndex={-1}
      className={cn(buttonVariants({variant: "outline", ...props}), className)}>
        Logout
    </Link>
  );
}

export function SignUpBtn({ 
  text, 
  visible = true, 
  className, 
  onClick, 
  ...props 
}: Omit<WebBtnType, "href">) {
  if (!visible) return null;

  return (
    <Link href={"/auth/signup"} onClick={onClick} tabIndex={-1}
      className={cn(buttonVariants({...props}), className)}>
        Sign Up
    </Link>
  );
}