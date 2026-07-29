"use client";

import { motion } from "motion/react";
import Divider from "@/components/Divider";
import ScheduleItems from "@/components/ScheduleItems";
import {
    scheduleText,
    scheduleFrame,
    scheduleDivider,
} from "@/lib/animations";

const Schedule = () => {
    return (
        <section className="section bg-green">
            <motion.h3
                variants={scheduleText}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.4,
                }}
            >
                The Celebration
            </motion.h3>

            <motion.h2
                variants={scheduleText}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.4,
                }}
            >
                Schedule of Events
            </motion.h2>

            <motion.div
                variants={scheduleDivider}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.5,
                }}
            >
                <Divider />
            </motion.div>

            <motion.div
                variants={scheduleFrame}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.25,
                }}
                className="max-w-xs sm:max-w-3xl frame-green p-4 mt-4"
            >
                <ScheduleItems />
            </motion.div>
        </section>
    )
}

export default Schedule;