import { motion } from "framer-motion";
import React, { ReactNode } from "react";
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
        <div className="relative h-screen w-screen overflow-hidden bg-black text-white selection:bg-rose-500/30">
            <ScaleWrapper>
                <div className={cn(
                    "relative flex flex-col h-full w-full p-8 md:p-16",
                    className
                )}>
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
                                        className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400"
                                    >
                                        {title}
                                    </motion.h1>
                                )}
                                {subtitle && (
                                    <motion.p
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="mt-4 text-2xl md:text-3xl text-zinc-400 font-light"
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
                </div>
            </ScaleWrapper>
        </div>
    );
}

function ScaleWrapper({ children }: { children: ReactNode }) {
    const [scale, setScale] = React.useState(1);

    React.useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const targetWidth = 1920;
            const targetHeight = 1080;

            const scaleW = width / targetWidth;
            const scaleH = height / targetHeight;

            // Fit containment
            setScale(Math.min(scaleW, scaleH));
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            style={{
                width: 1920,
                height: 1080,
                transform: `scale(${scale}) translate(-50%, -50%)`,
                transformOrigin: "top left",
                position: "absolute",
                top: "50%",
                left: "50%",
            }}
        >
            {children}
        </div>
    );
}
