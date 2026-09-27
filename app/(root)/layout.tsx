import { Navbar } from "@/components/web/navbar";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {

    return (
        <section>
            <Navbar />
            {props.children}
        </section>
    );
}
