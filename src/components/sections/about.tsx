'use client';

import { motion } from 'framer-motion';
import { Layers, Shield, Cpu, Zap, Globe, Package } from 'lucide-react';

const skills = [
    {
        category: 'Low-Code & Automation',
        icon: <Zap className="w-5 h-5" />,
        items: ['Mendix', 'Automation Anywhere (RPA)', 'Microflows', 'Nanoflows', 'Business Process Automation']
    },
    {
        category: 'Development & Integration',
        icon: <Layers className="w-5 h-5" />,
        items: ['JavaScript', 'SQL', 'REST API', 'JSON', 'React', 'HTML5/CSS3']
    },
    {
        category: 'Enterprise & Agile',
        icon: <Package className="w-5 h-5" />,
        items: ['Agile (Scrum, Kanban)', 'SAFe', 'Jira', 'GitHub', 'ServiceNow', 'DevOps']
    }
];

export function About() {
    return (
        <section id="about" className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Business into <span className="text-primary">Digital Solutions</span></h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Mendix Developer with 3+ years of experience building scalable applications within mission-critical
                            banking environments. I specialize in bridging requirements and digital execution through Low-Code,
                            RPA, and modern web technologies.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Lausanne-based professional with a strong focus on enterprise-grade security, process automation,
                            and seamless user experiences. Actively expanding technical depth in Java to support
                            complex hybrid development contexts.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Agile Mindset</h4>
                                    <p className="text-sm text-muted-foreground">Certified Scrum Master I.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Compliance</h4>
                                    <p className="text-sm text-muted-foreground">Banking security standards.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        id="skills"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="p-1 pr-6 pb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-primary" />
                                Technical Arsenal
                            </h3>
                            <div className="grid gap-4">
                                {skills.map((skill) => (
                                    <div key={skill.category} className="group p-4 rounded-2xl border border-border bg-background hover:shadow-lg hover:shadow-primary/5 transition-all">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                {skill.icon}
                                            </div>
                                            <h4 className="font-semibold">{skill.category}</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item) => (
                                                <span key={item} className="px-3 py-1 rounded-full bg-muted text-xs font-mono text-muted-foreground">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
