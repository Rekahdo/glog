'use client'

import { Container } from "../block/container";
import { Header } from "../block/header";
import { Logo } from "../block/logo";
import { Navigation } from "../block/navigation";
import { LoginBtn, LogoutBtn, SignUpBtn } from "../block/auth-btns";
import { ThemeToggle } from "../block/toggle";
import { SideBar } from "../block/side-bar";

interface NavbarProps {

}

export function Navbar(props: NavbarProps) {

    return (
        <Container
            as={"header"}
            height={"sm"}
            className="bg-background items-center"
        >

            <Header
                headerLeft={
                    <Logo />
                }

                headerCenter={
                    <Navigation width={"sm"} gap={"none"} className="max-md:hidden" justify={'start'}/>
                }

                headerRight={
                    <>
                        <SignUpBtn />
                        <LoginBtn className={"max-sm:hidden"} />
                        <LogoutBtn className={"max-sm:hidden"} />
                        <ThemeToggle />
                    </>
                }

                sidebar={
                    <SideBar
                        logo={<Logo />}
                        width= "full" 
                        height="lg" 
                        gap="none" 
                    />
                }
            />
        </Container>
    );
}
