"use client";

import { weddingInfo } from "@/lib/contstants";
import CountdownTimer from "@/components/CountDownTimer";
import { motion } from "motion/react";
import { CaretDownIcon } from "@phosphor-icons/react";
import {
    heroContainer,
    heroElegant,
    heroNames,
    scrollButton,
} from "@/lib/animations";

const Hero = () => {
    const scrollDown = () => {
        document
            .getElementById("story")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="section hero">

            <motion.div
                variants={heroContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center"
            >

                <motion.h2
                    variants={heroElegant}
                    className="text-gold"
                >
                    {weddingInfo.date}
                </motion.h2>


                <motion.h1
                    variants={heroNames}
                >
                    {weddingInfo.name1}
                    <span className="marked-text">
                        and
                    </span>
                    {weddingInfo.name2}
                </motion.h1>


                <motion.div variants={heroElegant}>
                    <CountdownTimer />
                </motion.div>

            </motion.div>


            <motion.button
                variants={scrollButton}
                initial="hidden"
                animate="visible"
                onClick={scrollDown}
                className="absolute bottom-12 cursor-pointer outline-0 animate-bounce"
                aria-label="Scroll down"
            >
                <CaretDownIcon
                    size={20}
                    weight="light"
                    fill="gold"
                />
            </motion.button>

        </section>
    )
}

export default Hero;