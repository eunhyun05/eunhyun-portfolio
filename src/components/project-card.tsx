"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { LucideGithub } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export interface ProjectCardProps {
    name: string;
    description: string;
    github: string;
    tags: string[];
    imageUrl?: string;
}

export default function ProjectCard({ data }: { data: ProjectCardProps }) {
    const imageUrl = data.imageUrl || "https://i.imgur.com/usfKLri.png";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="h-full"
        >
            <Card className="transition-all duration-300 hover:scale-105 h-full flex flex-col justify-between">
                <div>
                    <CardHeader className="relative w-full aspect-video">
                        <Image
                            src={imageUrl}
                            alt="test"
                            objectFit="cover"
                            className="rounded-t-xl"
                            fill
                        />
                    </CardHeader>
                    <CardContent className="pt-8 pb-4 relative flex-grow">
                        <Link href={data.github} target="_blank">
                            <div className="absolute top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center">
                                <LucideGithub />
                            </div>
                        </Link>
                        <div>
                            <span className="font-semibold text-lg">{data.name}</span>
                            <p className="text-sm text-foreground/80">{data.description}</p>
                        </div>
                    </CardContent>
                </div>
                <CardFooter className="gap-1 flex flex-wrap">
                    {data.tags.map((tag, index) => (
                        <Badge key={index}>{tag}</Badge>
                    ))}
                </CardFooter>
            </Card>
        </motion.div>
    );
}