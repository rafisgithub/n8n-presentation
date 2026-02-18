import { motion } from "framer-motion";
import { User, IdCard, Briefcase, MapPin, Users } from "lucide-react";
import SlideLayout from "../SlideLayout";

export default function Slide9_Outro() {
    return (
        <SlideLayout title="Thank You" subtitle="Let's build something amazing together.">
            <div className="flex flex-col items-center justify-center h-full">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center max-w-2xl w-full"
                >
                    {/* Animated Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-500/10 via-purple-500/10 to-blue-500/10 pointer-events-none" />

                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-rose-600 mb-8 flex items-center justify-center shadow-lg"
                    >
                        <User className="w-16 h-16 text-white" />
                    </motion.div>

                    <h2 className="text-6xl font-black text-white mb-4">Rafi Ahmed</h2>
                    <p className="text-zinc-400 mb-12 font-light text-2xl">Automation Specialist & Full-Stack Developer</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full text-left">

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-zinc-800 text-zinc-400">
                                    <IdCard className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold">Employee ID</p>
                                    <p className="text-white font-mono text-xl">15355</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-zinc-800 text-purple-400">
                                    <Briefcase className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold">Company</p>
                                    <p className="text-white text-xl">Betopia Group</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-zinc-800 text-blue-400">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold">Branch</p>
                                    <p className="text-white text-xl">Softvence</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-zinc-800 text-orange-400">
                                    <Users className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold">Team</p>
                                    <p className="text-white text-xl">Dotpy</p>
                                </div>
                            </div>
                        </motion.div >

                    </div >

                </motion.div >

                <p className="absolute bottom-8 text-zinc-600 text-sm font-mono">End of Presentation</p>

            </div>
        </SlideLayout>
    );
}
