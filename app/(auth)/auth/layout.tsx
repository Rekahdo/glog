'use client'

import { Container } from "@/components/shared-ui/container";
import { buttonVariants } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function SignUp(props: LayoutProps) {

    const { isAuthenticated, isLoading } = useConvexAuth();
    if (isAuthenticated) console.log("Auth Page not showing")

    return (
        <Container
            id="signup"
            className="min-h-screen flex items-center justify-center">
            <div className="absolute top-5 left-5">
                <Link href="/" className={buttonVariants()}>
                    <ArrowLeft /> Home
                </Link>
            </div>

            <div className="w-full max-w-md mx-auto">
                {props.children}
            </div>
        </Container>
    );
}
