"use client";

import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {LucideMoon, LucideSun} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

export default function ThemeButton() {
    const {theme, setTheme} = useTheme();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [setLoaded]);

    return (
        <TooltipProvider delayDuration={250}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            variant="ghost"
                            size="icon"
                    >
                        {loaded && (
                            <div className="flex justify-center font-semibold text-foreground/85">
                                {theme === "light" ? (
                                    <LucideSun
                                        className="h-[1.3rem] w-[1.3rem]"/>
                                ) : (
                                    <LucideMoon
                                        className="h-[1.3rem] w-[1.3rem]"/>
                                )}
                            </div>
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="font-bold">{loaded && theme === "light" ? "어두운 테마" : "밝은 테마"}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};