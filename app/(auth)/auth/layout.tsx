'use client'

import { Container } from "@/components/block/container";
import { buttonVariants } from "@/components/ui/button";
import { router } from "better-auth/api";
import { useConvexAuth } from "convex/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export type ErrorType = {
    error: {
        message?: string;
        status: number;
        statusText: string;
    };
}

export default function SignUp(props: LayoutProps) {

    const { isAuthenticated, isLoading } = useConvexAuth();
    if (isAuthenticated) console.log("Auth Page not showing")

    return (
        <Container className="min-h-screen flex items-center justify-center">
            <div className="absolute top-5 left-5">
                <Link href="/" className={buttonVariants()}>
                    <ArrowLeft /> Go Back
                </Link>
            </div>

            <div className="w-full max-w-md mx-auto">
                {props.children}
            </div>
        </Container>
    );
}
