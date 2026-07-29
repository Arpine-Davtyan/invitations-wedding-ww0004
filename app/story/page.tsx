"use client";

import { motion } from "motion/react";
import Divider from "@/components/Divider";
import {
    storyFrame,
    storyText,
} from "@/lib/animations";

const Story = () => {
    return (
        <section id="story" className="section">

            <motion.div
                variants={storyFrame}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                className="frame-cream max-w-xs sm:max-w-2xl px-7 py-14 gap-8"
            >
                <motion.h3 variants={storyText}>
                    We're getting married
                </motion.h3>

                <motion.p
                    variants={storyText}
                    className="big-text"
                >
                    After 8 wonderful years, we're making it official — and we'd be honored to have you there.
                </motion.p>

                <motion.div variants={storyText}>
                    <Divider />
                </motion.div>

                <motion.p
                    variants={storyText}
                    className="simple-text"
                >
                    Alexandra & Samuel invite you to celebrate the beginning of their next chapter — an evening of vows, feasting, and dancing under the stars.
                </motion.p>
            </motion.div>
        </section>
    )
}

export default Story;