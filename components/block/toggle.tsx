'use client'

import { useEffect, useState } from "react";
import { getRootDocument, themeIsDark, windowTheme } from "@/lib/utils";
import { Switch } from "../ui/switch";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Button } from "../ui/button";

export function ModeToggle({ className }: { className?: string }) {

    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
        applyTheme(themeIsDark());
        const system = windowTheme()!;

        function setToSystemTheme() {
            if (localStorage.dark === undefined) {
                localStorage.removeItem("dark");
                const isDark = themeIsDark();
                applyTheme(isDark); setChecked(isDark)
            }
        }

        if (localStorage.dark === undefined)
            system.addEventListener("change", setToSystemTheme)

        return () => {
            system.removeEventListener("change", setToSystemTheme)
        }
    }, []);

    useEffect(() => {
        applyTheme(checked)
        localStorage.dark = checked;
    }, [checked])

    function handleToggle(checked: boolean) {
        setChecked(checked)
    }

    function applyTheme(isDark: boolean) {
        isDark
            ? getRootDocument()?.classList.add("dark")
            : getRootDocument()?.classList.remove("dark")
    }

    return (
        <Switch checked={checked} onCheckedChange={handleToggle}
            className={className} variant={"inner"} size={"lg"} />
    )
}



// =======================================================================
// =======================================================================
// =======================================================================



export function ThemeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            } />
            
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}