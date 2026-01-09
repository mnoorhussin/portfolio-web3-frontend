'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
    return (
        <section id="contact" className="py-24 border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-primary">Connect</span></h2>
                        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                            Looking for a Mendix Developer or Low-Code Consultant to streamline your business processes?
                            I'm available for technical collaborations and consulting roles.
                        </p>

                        <div className="flex flex-col items-center gap-10">
                            <Link
                                href="mailto:hi@muste.io"
                                className="group relative inline-flex items-center gap-2 text-2xl md:text-3xl font-bold hover:text-primary transition-colors italic"
                            >
                                hi@muste.io
                                <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300" />
                            </Link>

                            <div className="flex items-center gap-6">
                                <Link href="https://github.com/mnoorhussin" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Github className="w-5 h-5" />
                                </Link>
                                <Link href="https://linkedin.com/in/mnoorhussin" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                                <Link href="https://x.com/MNoorhussin" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
