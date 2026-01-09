'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
    { name: 'Full Stack Web Development', year: '2019', issuer: 'PowerCoders | Lausanne' },
    { name: 'Mendix Rapid Developer', year: '2021', issuer: 'Mendix' },
    { name: 'Scrum Master I', year: '2022', issuer: 'Scrum.org' },
    { name: 'Meta Front-End Developer', year: '2023', issuer: 'Meta' },
    { name: 'Automation Anywhere Advanced', year: '2021', issuer: 'Automation Anywhere' },
    { name: 'Google Data Analytics', year: '2022', issuer: 'Google' },
    { name: 'Certified Blockchain Expert', year: '2022', issuer: 'Blockchain Council' },
    { name: 'Certified Data Engineer', year: '2025', issuer: 'DataCamp' }
];

export function Education() {
    return (
        <section id="education" className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-12">
                    {/* Certifications */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-2 text-center">
                            <Award className="w-6 h-6 text-primary" />
                            Certifications
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="p-4 rounded-xl border border-border bg-background hover:border-primary transition-colors group"
                                >
                                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{cert.name}</h4>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-[10px] text-muted-foreground uppercase">{cert.issuer}</span>
                                        <span className="text-[10px] font-mono text-primary">{cert.year}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
