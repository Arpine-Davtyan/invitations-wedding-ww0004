import type { Variants } from "motion/react";

export const heroContainer: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.2,
        },
    },
};

export const heroElegant: Variants = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const heroNames: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const scrollButton: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 2,
            duration: 1.2,
            ease: "easeOut",
        },
    },
};

export const storyFrame: Variants = {
    hidden: {
        opacity: 0,
        y: 35,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const storyText: Variants = {
    hidden: {
        opacity: 0,
        y: 15,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const galleryItem: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const galleryFrame: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.97,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const dividerReveal: Variants = {
    hidden: {
        opacity: 0,
        scaleX: 0.4,
    },
    visible: {
        opacity: 1,
        scaleX: 1,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const scheduleText: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const scheduleFrame: Variants = {
    hidden: {
        opacity: 0,
        y: 35,
        scale: 0.97,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const scheduleDivider: Variants = {
    hidden: {
        opacity: 0,
        scaleX: 0.3,
    },
    visible: {
        opacity: 1,
        scaleX: 1,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const rsvpFrame: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const rsvpItem: Variants = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const rsvpFormReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const rsvpDivider: Variants = {
    hidden: {
        opacity: 0,
        scaleX: 0.4,
    },
    visible: {
        opacity: 1,
        scaleX: 1,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const footerTitle: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const footerItem: Variants = {
    hidden: {
        opacity: 0,
        y: 15,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const footerDivider: Variants = {
    hidden: {
        opacity: 0,
        scaleX: 0.3,
    },
    visible: {
        opacity: 1,
        scaleX: 1,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const galleryImage: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
        scale: 0.96,
    },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: index * 0.12,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export const scheduleItemReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.15,
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export const scheduleImageReveal: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const musicButton: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.7,
        y: -20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const musicIcon: Variants = {
    idle: {
        rotate: 0,
    },
    playing: {
        rotate: [0, 10, -10, 0],
        transition: {
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export const successContainer: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const successIcon: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.6,
        rotate: -10,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const successText: Variants = {
    hidden: {
        opacity: 0,
        y: 15,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};