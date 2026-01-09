import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-border mt-20">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        Mustafa <span className="text-primary">.</span>
                    </Link>
                    <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
                        Crafting premium web experiences at the intersection of Frontend and Blockchain.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex gap-6">
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
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Mustafa NOORHUSSIN. Built with Next.js & Tailwind 4.
                    </p>
                </div>
            </div>
        </footer>
    );
}
