import {Avatar, AvatarImage} from "@/components/ui/avatar";
import ThemeButton from "@/components/theme/theme-button";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {LucideGithub} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import React from "react";

const links = [
    {
        name: "홈",
        href: "/"
    },
    {
        name: "프로젝트",
        href: "project"
    }
]

export default function Navbar() {
    return (
        <div className="bg-white dark:bg-neutral-900 shadow">
            <div
                className="container flex flex-col md:flex-row items-center p-5 mx-auto space-y-2.5 md:space-y-0 md:justify-between">
                <Link href="/" className="flex items-center gap-3.5 select-none">
                    <Avatar>
                        <AvatarImage src="images/profile.png" alt="@shadcn"/>
                    </Avatar>
                    <span className="text-xl font-semibold text-foreground/85 tracking-wide">은현의 포트폴리오</span>
                </Link>
                <nav className="flex items-center md:ml-auto md:mr-4">
                    <ul className="flex gap-2 text-foreground/85">
                        {links.map((link) => (
                            <Button asChild variant="ghost" key={link.name}>
                                <Link href={link.href}>
                                    <li className="text-sm font-semibold">{link.name}</li>
                                </Link>
                            </Button>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center gap-1.5">
                    <GithubButton/>
                    <ThemeButton/>
                </div>
            </div>
        </div>
    );
}

function GithubButton() {
    return (
        <TooltipProvider delayDuration={250}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://github.com/eunhyun05" target="_blank">
                            <LucideGithub className="h-[1.3rem] w-[1.3rem] text-foreground/85"/>
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="font-bold">깃허브</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}