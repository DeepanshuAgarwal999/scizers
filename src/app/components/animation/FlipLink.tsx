"use client"
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// export const RevealLinks = () => {
//     return (
//         <section className="grid place-content-center gap-2 bg-green-300 px-8 py-24 text-black">
//             <FlipLink href="#">Twitter</FlipLink>
//             <FlipLink href="#">Linkedin</FlipLink>
//             <FlipLink href="#">Facebook</FlipLink>
//             <FlipLink href="#">Instagram</FlipLink>
//         </section>
//     );
// };

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({ children, href, className }: { children: string, href?: string, className?: string }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className={twMerge("relative block overflow-hidden whitespace-nowrap uppercase text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold font-oswald tracking-wider ", className)}
            style={{
                lineHeight: 1,
            }}
        >
            <span>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </span>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};