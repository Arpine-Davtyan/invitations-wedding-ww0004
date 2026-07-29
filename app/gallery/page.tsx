"use client";

import { motion } from "motion/react";
import Divider from "@/components/Divider";
import GalleryItems from "@/components/GalleryItems";
import {
    galleryItem,
    galleryFrame,
    dividerReveal,
} from "@/lib/animations";

const Gallery = () => {
    return (
        <section className="section">
            <motion.h3
                variants={galleryItem}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.4,
                }}
            >
                Moments Together
            </motion.h3>

            <motion.h2
                variants={galleryItem}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.4,
                }}
                className="text-dark-green"
            >
                Our Gallery
            </motion.h2>

            <motion.div
                variants={dividerReveal}
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
                variants={galleryFrame}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.25,
                }}
                className="frame-cream max-w-xs sm:max-w-2xl p-4 mt-4"
            >
                <GalleryItems />
            </motion.div>
        </section>
    )
}

export default Gallery;