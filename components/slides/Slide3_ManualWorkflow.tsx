import { motion } from "framer-motion";
import { Mail, MessageSquare, AlertTriangle, Loader2 } from "lucide-react";
import SlideLayout from "../SlideLayout";

export default function Slide3_ManualWorkflow() {
    return (
        <SlideLayout title="The Old Way" subtitle="Manual processes are slow, error-prone, and unscalable.">
            <div className="relative h-full flex items-center justify-center pointer-events-none">
                {/* Chaos Container - Simulating a crowded desktop */}
                <div className="relative w-full max-w-5xl h-[500px] perspective-1000">

                    {/* Window 1: The Massive Spreadsheet (The Base of Misery) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-10 left-10 w-[70%] h-[350px] bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl overflow-hidden flex flex-col z-10"
                    >
                        {/* Title Bar */}
                        <div className="h-8 bg-zinc-800 flex items-center px-3 gap-2 border-b border-zinc-700">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs text-zinc-400 ml-2 font-mono">Master_Sheet_FINAL_v2_COPY(1).xlsx</span>
                        </div>
                        {/* Spreadsheet Grid */}
                        <div className="p-4 overflow-hidden relative">
                            <div className="grid grid-cols-4 gap-1 mb-2 opacity-50">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className="h-6 bg-zinc-800/50 rounded flex items-center px-2 text-[10px] text-zinc-500">
                                        {i === 7 ? <span className="text-red-500 font-bold">#REF!</span> : "Data..."}
                                    </div>
                                ))}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/80 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Window 2: Angry Email Client */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute top-24 right-16 w-[45%] h-[300px] bg-zinc-900 border border-zinc-700 rounded-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col z-20"
                    >
                        <div className="h-8 bg-blue-900/20 flex items-center px-3 border-b border-blue-900/30">
                            <Mail className="w-4 h-4 text-blue-400 mr-2" />
                            <span className="text-xs text-blue-200">Inbox (1,402 unread)</span>
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="bg-zinc-800/50 p-3 rounded border-l-2 border-red-500">
                                <p className="text-xs font-bold text-white">URGENT: Report is WRONG</p>
                                <p className="text-[10px] text-zinc-400 mt-1">From: Boss &lt;boss@company.com&gt;</p>
                                <p className="text-[10px] text-zinc-500 mt-1">Why is column C empty again?? The client is waiting...</p>
                            </div>
                            <div className="bg-zinc-800/30 p-3 rounded">
                                <p className="text-xs font-bold text-zinc-300">Re: Re: CSV Format?</p>
                                <p className="text-[10px] text-zinc-500 mt-1">Just download it manually and fix the dates.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Window 3: Slack/Chat Panic */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="absolute bottom-12 left-20 w-[40%] h-[180px] bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl z-30 flex flex-col"
                    >
                        <div className="h-8 bg-zinc-800 flex items-center px-3 border-b border-zinc-700">
                            <MessageSquare className="w-4 h-4 text-purple-400 mr-2" />
                            <span className="text-xs text-zinc-300">#general</span>
                        </div>
                        <div className="p-3 space-y-2">
                            <div className="flex gap-2">
                                <div className="w-6 h-6 rounded bg-purple-500/20 flex-shrink-0" />
                                <div className="bg-zinc-800 rounded p-2 text-[10px] text-zinc-300">
                                    Did the automation run? I don&apos;t see the order.
                                </div>
                            </div>
                            <div className="flex gap-2 flex-row-reverse">
                                <div className="w-6 h-6 rounded bg-blue-500/20 flex-shrink-0" />
                                <div className="bg-blue-500/10 rounded p-2 text-[10px] text-zinc-300">
                                    No, the API is down. Doing it manually now...
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Error Toasts */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 1.5, type: "spring" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-zinc-950 border border-red-500/50 rounded-lg shadow-2xl p-4 z-50 flex flex-col items-center text-center"
                    >
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-2">
                            <AlertTriangle className="w-5 h-5 text-red-500" />
                        </div>
                        <h3 className="text-white font-bold text-sm">Upload Failed</h3>
                        <p className="text-xs text-zinc-400 mt-1">Connection timed out after 300s.</p>
                        <button className="mt-3 px-4 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded transition-colors w-full">Retry (Manual)</button>
                    </motion.div>

                    <motion.div
                        className="absolute -right-4 top-40 bg-zinc-800 border border-zinc-700 p-2 rounded shadow-lg z-40 flex items-center gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2 }}
                    >
                        <Loader2 className="w-4 h-4 text-zinc-400 animate-spin" />
                        <span className="text-xs text-zinc-400">Loading huge_file.csv...</span>
                    </motion.div>

                </div>
            </div>
        </SlideLayout>
    );
}
