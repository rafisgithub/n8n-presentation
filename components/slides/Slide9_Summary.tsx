import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";

export default function Slide9_Summary() {
    return (
        <SlideLayout>
            <div className="flex flex-col items-center justify-center h-full text-center">
                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl font-bold mb-8"
                >
                    Start Automating Today.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col gap-4 text-xl text-zinc-400 mb-12"
                >
                    <p>✓ Save Time</p>
                    <p>✓ Reduce Errors</p>
                    <p>✓ Scale Operations</p>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-gradient-to-r from-rose-600 to-orange-500 rounded-full text-2xl font-bold text-white shadow-[0_0_40px_rgba(244,63,94,0.4)] hover:shadow-[0_0_60px_rgba(244,63,94,0.6)] transition-shadow"
                >
                    Get Started with n8n
                </motion.button>

                <footer className="absolute bottom-8 text-zinc-700 text-sm">
                    Press &apos;Left Arrow&apos; to restart
                </footer>
            </div>
        </SlideLayout>
    );
}
