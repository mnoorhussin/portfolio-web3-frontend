'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Web3', href: '#web3' },
    { name: 'Contact', href: '#contact' },
];

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pt-6"
        >
            <nav className="glass flex items-center gap-6 px-6 py-3 rounded-full">
                <Link href="/" className="text-lg font-bold tracking-tight hover:text-primary transition-colors">
                    Mustafa <span className="text-primary">.</span>
                </Link>
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="h-4 w-px bg-border mx-2 hidden md:block" />
                <ThemeToggle />
            </nav>
        </motion.header>
    );
}
