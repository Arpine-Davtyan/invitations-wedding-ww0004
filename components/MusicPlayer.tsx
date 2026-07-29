"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { weddingInfo } from "@/lib/contstants";
import { MusicNoteIcon } from "@phosphor-icons/react";
import {
    musicButton,
    musicIcon,
} from "@/lib/animations";

const MusicPlayer = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = async () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(weddingInfo.audioUrl);
            audioRef.current.loop = true;
            audioRef.current.volume = 0.5;
        }

        if (audioRef.current.paused) {
            await audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <motion.div
            variants={musicButton}
            initial="hidden"
            animate="visible"
        >
            <motion.button
                variants={musicButton}
                onClick={toggleMusic}
                className={`fixed right-5 top-5 flex-center cursor-pointer w-[48px] h-[48px] p-0 rounded-full bg-gold transition ${
                    isPlaying ? "animate-pulse" : ""
                }`}
                aria-label="Toggle music"
            >
                <motion.div
                    variants={musicIcon}
                    animate={isPlaying ? "playing" : "idle"}
                >
                    <MusicNoteIcon
                        size={24}
                        weight="fill"
                        className="text-white"
                    />
                </motion.div>
            </motion.button>
        </motion.div>
    )
}

export default MusicPlayer;