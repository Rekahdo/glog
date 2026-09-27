import { ReactNode } from "react";
import Auth from "../(auth)/auth/page";
import { Container } from "@/components/block/container";

interface PageProps {
}

export default function Welcome(props: PageProps) {

    return (
        <Container as={"main"}>
            <h1>WELCOME SCREEN</h1>
            <Auth />
        </Container>
    );
}
