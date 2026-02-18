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
            <div className="flex flex-col gap-6 h-full justify-center">
                <div className="grid grid-cols-5 gap-4">
                    {phases.map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 relative overflow-hidden group hover:border-zinc-600 transition-colors"
                        >
                            <phase.icon className={`w-8 h-8 mb-3 ${phase.color}`} />
                            <h3 className="font-bold text-sm mb-2">{phase.title}</h3>
                            <ul className="text-xs text-zinc-400 space-y-1 mb-4">
                                {phase.details.map((d, j) => (
                                    <li key={j}>• {d}</li>
                                ))}
                            </ul>

                            {/* Price Tag */}
                            <div className="mt-auto pt-3 border-t border-zinc-800 w-full">
                                <span className="text-xs font-mono text-emerald-400 flex items-center justify-center gap-1">
                                    <DollarSign className="w-3 h-3" />
                                    {phase.price}
                                </span>
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
                        <div className="p-3 bg-emerald-900/20 rounded-lg text-emerald-400">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">Total Estimated Cost</h4>
                            <p className="text-emerald-400 font-mono text-lg">$600 - $2,200</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800"
                    >
                        <h4 className="font-bold text-white mb-1">✔ Result</h4>
                        <p className="text-sm text-zinc-400">Manual tasks replaced with automated workflows.</p>
                        <p className="text-xs text-zinc-500 mt-2 italic">Ex: Google Form → DB → Email → Slack.</p>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
}
