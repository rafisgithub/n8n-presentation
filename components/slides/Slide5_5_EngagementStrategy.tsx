import { motion } from "framer-motion";
import { Handshake, Target, ArrowRight } from "lucide-react";
import SlideLayout from "../SlideLayout";

export default function Slide5_5_EngagementStrategy() {
    return (
        <SlideLayout title="How We Structure Offers" subtitle="We started with standard Full-Stack, but now power businesses with n8n Automation.">
            <div className="flex flex-col items-center justify-center h-full gap-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    {/* Strategy 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-10 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col items-center text-center relative overflow-hidden group hover:border-blue-500/50 transition-colors h-[500px]"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                        <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 transition-transform">
                            <span className="text-4xl font-black">01</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Build Only</h3>
                        <p className="text-xl text-zinc-400 mb-8 flex-grow">Traditional software development. You need a custom website or app built from scratch.</p>
                        <div className="mt-auto px-4 py-2 rounded-full bg-zinc-800 text-sm font-mono text-zinc-300">
                            Software Heavy
                        </div>
                    </motion.div>

                    {/* Strategy 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-10 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col items-center text-center relative overflow-hidden group hover:border-orange-500/50 transition-colors shadow-2xl shadow-orange-900/10 transform scale-110 z-10 h-[550px]"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-rose-500" />
                        <div className="w-20 h-20 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8 text-orange-400 group-hover:scale-110 transition-transform">
                            <span className="text-4xl font-black">02</span>
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-4">Hybrid</h3>
                        <p className="text-2xl text-zinc-400 mb-8 flex-grow">The sweet spot. Custom software powered by intelligent automation workflows.</p>
                        <div className="mt-auto px-4 py-2 rounded-full bg-orange-500/20 text-sm font-mono text-orange-400 border border-orange-500/30">
                            Best Value
                        </div>
                    </motion.div>

                    {/* Strategy 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-10 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col items-center text-center relative overflow-hidden group hover:border-purple-500/50 transition-colors h-[500px]"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />
                        <div className="w-20 h-20 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 text-purple-400 group-hover:scale-110 transition-transform">
                            <span className="text-4xl font-black">03</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Automate Only</h3>
                        <p className="text-xl text-zinc-400 mb-8 flex-grow">You have existing processes. We optimize and automate them without new software.</p>
                        <div className="mt-auto px-4 py-2 rounded-full bg-zinc-800 text-sm font-mono text-zinc-300">
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
