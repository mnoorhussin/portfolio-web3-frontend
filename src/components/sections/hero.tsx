'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export function Hero() {
    return (
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-medium text-muted-foreground mb-4"
                    >
                        <Code2 className="w-3 h-3" />
                        <span>Open for new opportunities</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
                    >
                        Building Enterprise Solutions with <span className="text-gradient">Low-Code</span> Excellence.
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
                    >
                        Mendix Developer & Low-Code Consultant with 3+ years of experience building,
                        deploying, and maintaining enterprise-grade applications in mission-critical banking environments.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-border bg-background font-medium hover:bg-muted transition-colors"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
