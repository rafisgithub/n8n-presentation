import { motion } from "framer-motion";
import { Globe, RefreshCw, Database, CheckCircle, Zap } from "lucide-react";
import SlideLayout from "../SlideLayout";

const phases = [
    {
        title: "Phase 1-3: Full-Stack Dev",
        icon: Globe,
        details: ["UI/UX Design", "Frontend Dev", "Backend Dev"],
        color: "text-zinc-400"
    },
    {
        title: "Phase 4: Automation using n8n",
        icon: Zap,
        details: ["Workflow Automation", "AI Integrations", "Email / CRM Sync", "Payment Auto-handling"],
        color: "text-orange-500" // Highlighted
    },
    {
        title: "Phase 5: Testing & Launch",
        icon: CheckCircle,
        details: ["System Testing", "Automation Testing", "Production Launch"],
        color: "text-green-500"
    }
];

export default function Slide7_FullStackAutomation() {
    return (
        <SlideLayout title="2. Full-Stack + Automation(n8n)" subtitle="Software + automatic workflows using n8n.">
            <div className="flex flex-col gap-8 h-full justify-center">
                <div className="grid grid-cols-3 gap-6">
                    {phases.map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className={`flex flex-col items-center text-center p-6 rounded-xl border ${i === 1 ? 'bg-orange-950/20 border-orange-500/50 scale-105 shadow-[0_0_30px_rgba(249,115,22,0.1)]' : 'bg-zinc-900/50 border-zinc-800'}`}
                        >
                            <phase.icon className={`w-10 h-10 mb-4 ${phase.color}`} />
                            <h3 className="font-bold text-lg mb-2">{phase.title}</h3>
                            <ul className="text-sm text-zinc-400 space-y-2">
                                {phase.details.map((d, j) => (
                                    <li key={j}>• {d}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-orange-900/20 to-rose-900/20 border border-orange-500/30 text-center"
                >
                    <h3 className="text-xl font-bold text-orange-200 mb-2">✔ Result: System runs automatically with minimal manual work.</h3>
                    <p className="text-zinc-400">Example: Lead capture → Auto Email → CRM Update → Invoice → Notification.</p>
                </motion.div>
            </div>
        </SlideLayout>
    );
}
