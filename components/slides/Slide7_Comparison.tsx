import { motion } from "framer-motion";
import { Clock, Zap, XCircle, CheckCircle } from "lucide-react";
import SlideLayout from "../SlideLayout";

export default function Slide7_Comparison() {
    return (
        <SlideLayout className="!p-0">
            <div className="flex flex-col md:flex-row h-full w-full">

                {/* Left: Manual (Bad) */}
                <div className="flex-1 bg-zinc-900 flex flex-col items-center justify-center p-8 relative overflow-hidden border-r border-zinc-800">
                    <motion.div
                        className="absolute inset-0 bg-red-500/5"
                        animate={{ opacity: [0.5, 0.2, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <Clock className="w-24 h-24 text-zinc-600 mb-8" />
                    <h2 className="text-4xl font-bold text-zinc-400 mb-4">Manual</h2>
                    <ul className="space-y-4 text-zinc-500 text-lg">
                        <li className="flex items-center gap-2"><XCircle className="w-5 h-5" /> Slow Turnaround</li>
                        <li className="flex items-center gap-2"><XCircle className="w-5 h-5" /> Human Error</li>
                        <li className="flex items-center gap-2"><XCircle className="w-5 h-5" /> Expensive</li>
                        <li className="flex items-center gap-2"><XCircle className="w-5 h-5" /> Unscalable</li>
                    </ul>
                </div>

                {/* Right: Automated (Good) */}
                <div className="flex-1 bg-black flex flex-col items-center justify-center p-8 relative overflow-hidden text-center z-10">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-rose-500/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    />

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                    >
                        <Zap className="w-24 h-24 text-rose-500 mb-8 fill-rose-500/20" />
                        <h2 className="text-4xl font-bold text-white mb-4">Automated with n8n</h2>
                        <ul className="space-y-4 text-zinc-300 text-lg text-left inline-block">
                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Instant Results</motion.li>
                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> 100% Accuracy</motion.li>
                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Cost Effective</motion.li>
                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Infinite Scale</motion.li>
                        </ul>
                    </motion.div>
                </div>

            </div>
        </SlideLayout>
    );
}
