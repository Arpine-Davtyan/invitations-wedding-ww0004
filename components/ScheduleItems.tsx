"use client";

import { scheduleItems } from "@/lib/contstants";
import { MapPinIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { motion } from "motion/react";
import {
    scheduleItemReveal,
    scheduleImageReveal,
} from "@/lib/animations";

const ScheduleItems = () => {
    return (
        <div className="py-1 px-2 sm:px-7">
            {scheduleItems.map((item, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    variants={scheduleItemReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className={`grid gap-8 md:grid-cols-[1fr_200px] py-8 
                        ${index + 1 < scheduleItems.length
                            ? "border-b border-cream/30"
                            : ""
                        }
                    `}
                >
                    <div className="space-y-4">
                        <h5>{item.time}</h5>
                        <h4>{item.name}</h4>
                        <h3 className="text-left">
                            {item.title}
                        </h3>
                        <p className="small-text">
                            {item.text}
                        </p>
                    </div>

                    <motion.div
                        variants={scheduleImageReveal}
                        className="space-y-4"
                    >
                        <div className="relative aspect-3/2 overflow-hidden">
                            <Image
                                src={item.src}
                                alt={item.name}
                                priority={index < 2}
                                quality={85}
                                fill
                                className="object-cover transition-transform duration-1000 ease-out hover:scale-110"
                            />
                        </div>

                        <a
                            href={item.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-map"
                        >
                            <MapPinIcon
                                size={16}
                                weight="light"
                            />
                            Open in Maps
                        </a>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}

export default ScheduleItems;