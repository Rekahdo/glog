'use client'

import { SideSheet } from "../shared-ui/side-sheet";
import { Container } from "../shared-ui/container";
import { Header } from "../shared-ui/header";
import { Logo } from "../shared-ui/logo";
import { Navigation } from "../shared-ui/navigation";
import { cn } from "cn";
import { LoginBtn, LogoutBtn, SignUpBtn } from "../shared-ui/button-impl";
import { ThemeToggle } from "../shared-ui/toggle";

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
                    <Navigation width={"sm"} gap={"none"} className="max-md:hidden" />
                }

                headerRight={
                    <>
                        <SignUpBtn />
                        <LoginBtn showTextAt="sm" variant={'outline'} />
                        <LogoutBtn showTextAt={'sm'} />
                        <ThemeToggle className="max-sm:hidden" />
                        <SideSheet
                            width="full"
                            height="lg"
                            gap="none"
                        />
                    </>
                }
            />
        </Container>
    )
}