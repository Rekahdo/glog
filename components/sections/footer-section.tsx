import { Container } from "../shared-ui/container";

interface FooterProps {
    
}

export function Footer(props: FooterProps) {
    return (
        <Container 
            id="footer" 
            as={"footer"}
            width={'w400'}
            py={'section'}
            background={'secondary'}
        >
            <footer>THIS IS OUR FOOTER</footer>
        </Container>
    );
}
