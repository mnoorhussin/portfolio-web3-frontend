'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
    {
        title: 'Junior Applications Developer',
        company: 'Banque Pictet & Cie',
        location: 'Geneva, Switzerland',
        period: 'Aug 2020 – Feb 2022',
        description: [
            'Contributed to development and improvement of internal Mendix applications using low-code components.',
            'Developed multiple RPA robots using Automation Anywhere to optimize business processes.',
            'Managed production monitoring, deployment checks, and release support for banking systems.',
            'Ensured compliance with strict security, quality, and confidentiality requirements.'
        ]
    },
    {
        title: 'Applications Developer Intern',
        company: 'Banque Pictet & Cie',
        location: 'Geneva, Switzerland',
        period: 'Aug 2019 – Aug 2020',
        description: [
            '12-month internship in the Technology & Operations division.',
            'Assisted with Mendix development tasks and automation initiatives.',
            'Gained practical experience in enterprise development standards and internal processes.'
        ]
    },
    {
        title: 'IT Assistant',
        company: 'Centre formation EVAM',
        location: 'Lausanne, Switzerland',
        period: 'Sep 2017 – Aug 2018',
        description: [
            'Managed day-to-day operations of the cybercafé.',
            'Provided technical support and troubleshooting for hardware/software issues.',
            'Delivered basic IT training to users.'
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Professional <span className="text-primary">Journey</span></h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title + exp.period}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l border-border pb-8 last:pb-0"
                        >
                            <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold">{exp.title}</h3>
                                    <p className="text-primary font-medium">{exp.company}</p>
                                </div>
                                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        {exp.location}
                                    </div>
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {exp.description.map((item, idx) => (
                                    <li key={idx} className="text-muted-foreground flex gap-3 text-sm leading-relaxed">
                                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
