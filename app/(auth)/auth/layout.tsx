import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function SignUp(props: LayoutProps) {

    return (
        <section>
            {props.children}
        </section>
    );
}
