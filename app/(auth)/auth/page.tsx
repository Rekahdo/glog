import Link from "next/link";
import { ReactNode } from "react";

interface PageProps {
}

export default function Auth(props: PageProps) {

    return (
        <section className="flex flex-col">
            <Link href={"/auth/login"}>Login</Link>
            <Link href={"/auth/signup"}>Sign Up</Link>
        </section>
    );
}
