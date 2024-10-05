"use client";

import Lottie from 'react-lottie-player';
import lottieJson from '@/../public/animation.json';
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.7}}
            className="h-full"
        >
            <main className="container mx-auto p-5 flex flex-col md:flex-row items-center h-screen overflow-auto">
                <div className="flex flex-col space-y-9 py-10 md:py-24 flex-[7] overflow-auto">
                    <div className="space-y-4 max-w-[700px]">
                        <Badge>풀스택</Badge>
                        <h1 className="text-4xl">안녕하세요 개발자 은현입니다 👋</h1>
                        <p className="text-lg text-foreground/60 leading-relaxed">
                            인간의 그들의 가장 피다. 천고에 것은 끝까지 풍부하게 그것을 풀이 길지 피다. 굳세게 인생의 사람은 따뜻한 시들어 끓는 그들에게 튼튼하며, 위하여, 듣는다. 가치를
                            그림자는 이것은 자신과 듣기만 소리다.이것은 이것이다. 얼마나 위하여 뜨거운지라, 철환하였는가? 위하여서, 그들의 피고 되려니와, 봄바람을 남는 영락과 천지는 같은
                            것이다.
                            만물은 황금시대를 투명하되 그림자는 전인 우리는 가는 무엇을 있으랴? 이상 이것은 인간의 것은 청춘의 황금시대다. 사랑의 풀이 대한 위하여서 것이다.
                        </p>
                    </div>
                    <Button className="max-w-fit" aria-label="프로젝트 보러가기" asChild>
                        <Link href="/project">
                            프로젝트 보러가기
                        </Link>
                    </Button>
                </div>
                <div className="flex-[4] md:max-w-[40%] overflow-hidden">
                    <Lottie
                        loop
                        animationData={lottieJson}
                        play
                        style={{width: '100%', height: '100%'}}
                    />
                </div>
            </main>
        </motion.div>
    );
}