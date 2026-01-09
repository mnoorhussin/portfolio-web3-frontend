'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

const projects = [
    {
        title: 'Domani',
        description: 'A high-performance domain discovery engine for traditional DNS and Web3 namespaces, featuring smart name generation.',
        tech: ['Next.js', 'Tailwind', 'Framer Motion', 'Branding'],
        github: '#',
        live: 'https://domanihq.com/',
        image: '/projects/domani.png',
        imageAlt: 'Domani Discovery Engine'
    },
    {
        title: 'CrushPDF',
        description: 'Privacy-focused PDF management tool for merging, splitting, and converting documents directly in the browser.',
        tech: ['Next.js', 'Firebase', 'Genkit', 'Tailwind'],
        github: 'https://github.com/mnoorhussin/CrushPDF',
        live: 'https://www.crushpdf.com/',
        image: '/projects/crushpdf.png',
        imageAlt: 'CrushPDF Management Tool'
    },
    {
        title: 'TimeSync Pro',
        description: 'Smart multi-time zone scheduler for global teams to find mutual availability across multiple cities instantly.',
        tech: ['Next.js', 'Firebase', 'Date-fns', 'Tailwind'],
        github: 'https://github.com/mnoorhussin/TimeSync-Pro',
        live: 'https://www.timesync.work/',
        image: '/projects/timesync.png',
        imageAlt: 'TimeSync Pro Scheduler'
    }
];

export function Projects() {
    return (
        <div className="space-y-20">
            {/* General Projects Section */}
            <section id="projects" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected <span className="text-primary">Work</span></h2>
                            <p className="text-muted-foreground">
                                Highlighting enterprise-grade low-code solutions and process automations
                                delivered within mission-critical environments.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative rounded-3xl overflow-hidden border border-border bg-card transition-all hover:shadow-2xl hover:shadow-primary/5"
                            >
                                <div className="aspect-video bg-muted relative flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.imageAlt}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                    ) : null}
                                    <div className={`${project.image ? 'hidden' : ''} text-muted-foreground/20 group-hover:scale-110 transition-transform duration-500`}>
                                        <ImageIcon className="w-12 h-12" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground px-2 py-1 rounded-md bg-muted">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                                    <div className="flex gap-4">
                                        <Link href={project.live} className="flex items-center gap-2 text-sm font-semibold hover:underline">
                                            Live Demo <ExternalLink className="w-4 h-4" />
                                        </Link>
                                        <Link href={project.github} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
                                            GitHub <Github className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
