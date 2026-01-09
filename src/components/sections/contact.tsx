'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
    return (
        <section id="contact" className="py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto rounded-[3rem] bg-muted/50 border border-border p-6 md:p-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build the <span className="text-primary">Future</span>?</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                            Whether you're starting a new Web3 venture or need a frontend expert for your next
                            big project, I'm always open to discussing technical challenges and premium collaborations.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
                            <Link
                                href="mailto:hi@muste.io"
                                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:opacity-90 transition-opacity"
                            >
                                <Mail className="w-5 h-5" />
                                hi@muste.io
                                <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Find me on</span>
                            <div className="flex gap-8">
                                <Link href="https://github.com/mnoorhussin" target="_blank" className="p-3 rounded-2xl bg-background border border-border hover:border-primary hover:text-primary transition-all">
                                    <Github className="w-6 h-6" />
                                </Link>
                                <Link href="https://linkedin.com/in/mnoorhussin" target="_blank" className="p-3 rounded-2xl bg-background border border-border hover:border-primary hover:text-primary transition-all">
                                    <Linkedin className="w-6 h-6" />
                                </Link>
                                <Link href="https://x.com/MNoorhussin" target="_blank" className="p-3 rounded-2xl bg-background border border-border hover:border-primary hover:text-primary transition-all">
                                    <Twitter className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
