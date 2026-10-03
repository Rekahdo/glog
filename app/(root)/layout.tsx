import { HeaderSection } from "@/components/sections/header-section";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {

    return (
        <section>
            <HeaderSection/>
            {props.children}
        </section>
    );
}
