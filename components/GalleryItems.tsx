"use client";

import { galleryImages } from "@/lib/contstants";
import Image from "next/image";
import { motion } from "motion/react";
import { galleryImage } from "@/lib/animations";

const GalleryItems = () => {
    return (
        <div className="gallery-items">
            {galleryImages.map((src, index) => (
                <motion.div
                    key={`${src}-${index}`}
                    custom={index}
                    variants={galleryImage}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className={`gallery-item group 
                        ${index % 2 == 0
                            ? "translate-y-5 md:translate-y-8"
                            : ""
                        }
                    `}
                >
                    <Image
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        fill
                        priority={index < 2}
                        quality={85}
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                        className="gallery-image transition-transform duration-700 group-hover:scale-105"
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default GalleryItems;