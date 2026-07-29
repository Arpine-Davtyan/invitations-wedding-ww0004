"use client";

import { motion } from "motion/react";
import Divider from "@/components/Divider";
import RSVPForm from "@/components/RSVPForm";
import {
    rsvpFrame,
    rsvpItem,
    rsvpFormReveal,
    rsvpDivider,
} from "@/lib/animations";

const RSVP = () => {
    return (
        <section className="section bg-green">
            <motion.div
                variants={rsvpFrame}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.25,
                }}
                className="frame-cream max-w-xs sm:max-w-2xl gap-1 sm:gap-3 p-5 sm:p-8"
            >
                <motion.h3 variants={rsvpItem}>
                    Kindly Respond
                </motion.h3>

                <motion.h2
                    variants={rsvpItem}
                    className="text-dark-green"
                >
                    RSVP
                </motion.h2>

                <motion.div variants={rsvpDivider}>
                    <Divider />
                </motion.div>

                <motion.p
                    variants={rsvpItem}
                    className="small-text text-center text-sage"
                >
                    Please reply by August 30, 2026 so we can save you a seat.
                </motion.p>

                <motion.div variants={rsvpFormReveal}>
                    <RSVPForm />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default RSVP;