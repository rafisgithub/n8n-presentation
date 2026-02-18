import { motion } from "framer-motion";
import { Search, PenTool, GitMerge, ShieldCheck, Rocket, DollarSign } from "lucide-react";
import SlideLayout from "../SlideLayout";

const phases = [
    {
        title: "Phase 1: Analysis",
        icon: Search,
        details: ["Understand Manual Work", "Define Goals"],
        price: "$(100 - 300)",
        color: "text-blue-400"
    },
    {
        title: "Phase 2: Workflow Design",
        icon: PenTool,
        details: ["Logic Planning", "Integration Mapping"],
        price: "$(100 - 300)",
        color: "text-cyan-400"
    },
    {
        title: "Phase 3: Development",
        icon: GitMerge,
        details: ["Build Automation", "Connect Tools"],
        price: "$(300 - 1000)",
        color: "text-orange-500"
    },
    {
        title: "Phase 4: Testing",
        icon: ShieldCheck,
        details: ["Error Handling", "Optimization"],
        price: "$(100 - 300)",
        color: "text-green-400"
    },
    {
        title: "Phase 5: Deploy",
        icon: Rocket,
        details: ["Live Automation", "Client Training"],
        price: "$(100 - 300)",
        color: "text-purple-400"
    }
];

export default function Slide8_AutomationOnly() {
    return (
        <SlideLayout title="3. Automation-Only Project" subtitle="No software development. Automating existing business processes.">
            <div className="flex flex-col gap-8 h-full justify-center">
                <div className="grid grid-cols-5 gap-6 w-full max-w-7xl">
                    {phases.map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 relative overflow-hidden group hover:border-zinc-500 hover:bg-zinc-800/80 transition-all duration-300 h-[350px] shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className={`p-4 rounded-full bg-zinc-900/50 mb-6 group-hover:bg-zinc-800 transition-colors border border-zinc-800 group-hover:border-zinc-600`}>
                                <phase.icon className={`w-10 h-10 ${phase.color}`} />
                            </div>
                            <h3 className="font-bold text-xl mb-4 text-white group-hover:text-blue-200 transition-colors">{phase.title}</h3>
                            <ul className="text-sm text-zinc-400 space-y-2 mb-6 flex-grow">
                                {phase.details.map((d, j) => (
                                    <li key={j} className="flex items-center justify-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-zinc-600" />
                                        {d}
                                    </li>
                                ))}
                            </ul>

                            {/* Price Tag */}
                            <div className="mt-auto w-full pt-4 border-t border-zinc-800/50">
                                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-sm font-bold group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all">
                                    <DollarSign className="w-3.5 h-3.5" />
                                    {phase.price}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800 flex items-center gap-4"
                    >
                        <div className="p-4 bg-emerald-900/20 rounded-xl text-emerald-400">
                            <DollarSign className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-xl">Total Estimated Cost</h4>
                            <p className="text-emerald-400 font-mono text-3xl">$600 - $2,200</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800"
                    >
                        <h4 className="font-bold text-white mb-2 text-xl">✔ Result</h4>
                        <p className="text-xl text-zinc-400">Manual tasks replaced with automated workflows.</p>
                        <p className="text-sm text-zinc-500 mt-2 italic">Ex: Google Form → DB → Email → Slack.</p>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
}
