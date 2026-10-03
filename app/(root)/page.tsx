import Auth from "../(auth)/auth/page";
import { Container } from "@/components/shared-ui/container";

interface PageProps {
}

export default function Welcome(props: PageProps) {

    return (
        <Container id="welcome" as={"main"} height={'hero'}>
            <h1>WELCOME SCREEN</h1> 
            <Auth />
        </Container>
    );
}
