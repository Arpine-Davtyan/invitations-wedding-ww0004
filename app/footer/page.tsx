"use client";

import { motion } from "motion/react";
import { weddingInfo } from "@/lib/contstants";
import Divider from "@/components/Divider";
import {
    footerTitle,
    footerItem,
    footerDivider,
} from "@/lib/animations";


const Footer = () => {
    return (
        <footer>
            <motion.h2
                variants={footerTitle}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.5,
                }}
            >
                {weddingInfo.name1} & {weddingInfo.name2}
            </motion.h2>

            <motion.div
                variants={footerDivider}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.5,
                }}
            >
                <Divider />
            </motion.div>

            <motion.h3
                variants={footerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.5,
                }}
            >
                {weddingInfo.date}
            </motion.h3>

            <motion.h3
                variants={footerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.5,
                }}
            >
                {weddingInfo.location}
            </motion.h3>
        </footer>
    )
}

export default Footer;