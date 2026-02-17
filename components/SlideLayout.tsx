import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SlideLayoutProps {
    children: ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
}

export default function SlideLayout({
    children,
    className,
    title,
    subtitle,
}: SlideLayoutProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "relative flex flex-col h-screen w-screen overflow-hidden bg-black text-white p-8 md:p-16 selection:bg-rose-500/30",
                className
            )}
        >
            {/* Background Grid Pattern (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full w-full max-w-7xl mx-auto">
                {(title || subtitle) && (
                    <header className="mb-8 md:mb-12">
                        {title && (
                            <motion.h1
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400"
                            >
                                {title}
                            </motion.h1>
                        )}
                        {subtitle && (
                            <motion.p
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-2 text-xl md:text-2xl text-zinc-400 font-light"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </header>
                )}

                <main className="flex-1 flex flex-col justify-center">
                    {children}
                </main>

                {/* Footer / Navigation Hint */}
                <footer className="absolute bottom-8 right-8 text-zinc-600 text-sm animate-pulse hidden md:block">
                    Use ← → keys to navigate
                </footer>
            </div>
        </motion.div>
    );
}
