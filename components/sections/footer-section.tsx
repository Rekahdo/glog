import { Container } from "../shared-ui/container";

interface FooterProps {
    
}

export function Footer(props: FooterProps) {
    return (
        <Container id="footer" as={"footer"}
            className="bg-blue-900 py-10"
        >
            <footer>THIS IS OUR FOOTER</footer>
        </Container>
    );
}
