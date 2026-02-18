import { motion } from "framer-motion";
import { Handshake, Target, ArrowRight } from "lucide-react";
import SlideLayout from "../SlideLayout";

export default function Slide5_5_EngagementStrategy() {
    return (
        <SlideLayout title="How We Structure Offers" subtitle="We started with standard Full-Stack, but now power businesses with n8n Automation.">
            <div className="flex flex-col items-center justify-center h-full gap-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    {/* Strategy 1: Build Only */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 flex flex-col items-center text-center relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 h-[500px]"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                        <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-4xl font-black">01</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Build Only</h3>
                        <p className="text-lg text-zinc-400 mb-8 flex-grow leading-relaxed">
                            Custom software development. We build your website, app, or platform from the ground up using modern tech.
                        </p>
                        <div className="mt-auto px-5 py-2 rounded-full bg-zinc-800/50 border border-zinc-700 text-sm font-mono text-zinc-300">
                            Software Heavy
                        </div>
                    </motion.div>

                    {/* Strategy 2: Hybrid (Highlighted) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-3xl bg-zinc-900 border-2 border-orange-500/30 flex flex-col items-center text-center relative overflow-hidden group hover:border-orange-500 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(249,115,22,0.15)] transform scale-105 z-10 h-[500px]"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-rose-500" />
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500/20 to-rose-500/20 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                            <span className="text-5xl font-black">02</span>
                        </div>
                        <h3 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Hybrid</h3>
                        <p className="text-xl text-zinc-300 mb-8 flex-grow leading-relaxed">
                            <span className="text-orange-400 font-semibold">The Sweet Spot.</span> <br />
                            We build custom software *and* power it with intelligent automation workflows.
                        </p>
                        <div className="mt-auto px-6 py-2.5 rounded-full bg-orange-500/10 text-sm font-mono text-orange-400 border border-orange-500/20 font-bold uppercase tracking-wider">
                            Best Value
                        </div>
                    </motion.div>

                    {/* Strategy 3: Automate Only */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 flex flex-col items-center text-center relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 h-[500px]"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />
                        <div className="w-20 h-20 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-4xl font-black">03</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">n8n Only</h3>
                        <p className="text-lg text-zinc-400 mb-8 flex-grow leading-relaxed">
                            Process optimization. We connect your existing apps and automate workflows without writing new software.
                        </p>
                        <div className="mt-auto px-5 py-2 rounded-full bg-zinc-800/50 border border-zinc-700 text-sm font-mono text-zinc-300">
                            Process Heavy
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-3 text-zinc-500"
                >
                    <Handshake className="w-6 h-6" />
                    <span className="text-xl">Let's find the model that fits your needs</span>
                    <ArrowRight className="w-5 h-5 ml-2 animate-bounce-x" />
                </motion.div>

            </div>
        </SlideLayout>
    );
}
