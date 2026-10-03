'use client'

import { SideSheet } from "../shared-ui/side-sheet";
import { Container } from "../shared-ui/container";
import { Header } from "../shared-ui/header";
import { Logo } from "../shared-ui/logo";
import { Navigation } from "../shared-ui/navigation";
import { ThemeToggle } from "../shared-ui/toggle";
import { cn } from "cn";
import { LoginBtn, LogoutBtn, SignUpBtn } from "../implementions/button-impl";

export const HeaderSection = () => {

    return (
        <Container
            id="header"
            as={"header"}
            height={'header'}
            sticky={'top'}
            background={'background'}
            innerClassName={cn(
                "max-w-400",
            )}
        >

            <Header
                headerLeft={
                    <Logo />
                }

                headerCenter={
                    <Navigation width={"sm"} gap={"none"} className="max-mlg:hidden" />
                }

                headerRight={
                    <>
                        <SignUpBtn />
                        <LoginBtn className={"max-sm:hidden"} />
                        <LogoutBtn />
                        <ThemeToggle />
                    </>
                }

                sidebar={
                    <SideSheet
                        logo={<Logo />}
                        width="full"
                        height="lg"
                        gap="none"
                    />
                }
            />
        </Container>
    )
}