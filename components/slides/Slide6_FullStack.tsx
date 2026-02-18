import { motion } from "framer-motion";
import { Globe, Layout, Database, CheckCircle, Rocket } from "lucide-react";
import SlideLayout from "../SlideLayout";

const phases = [
    {
        title: "Phase 1: UI/UX Design",
        icon: Layout,
        details: ["Wireframes", "User flow", "Visual design"],
        color: "text-blue-400"
    },
    {
        title: "Phase 2: Frontend Dev",
        icon: Globe,
        details: ["Website/App Interface", "Responsive Design", "User Dashboard"],
        color: "text-blue-500"
    },
    {
        title: "Phase 3: Backend Dev",
        icon: Database,
        details: ["Database Setup", "APIs & Auth", "Admin Panel"],
        color: "text-indigo-500"
    },
    {
        title: "Phase 4: Testing",
        icon: CheckCircle,
        details: ["Bug Fixing", "Performance Tests"],
        color: "text-violet-500"
    },
    {
        title: "Phase 5: Deployment",
        icon: Rocket,
        details: ["Hosting Setup", "Launch"],
        color: "text-purple-500"
    }
];

export default function Slide6_FullStack() {
    return (
        <SlideLayout title="1. Normal Full-Stack Project" subtitle="Traditional web or app development — no automation.">
            <div className="flex flex-col gap-8 h-full justify-center">
                <div className="grid grid-cols-5 gap-4">
                    {phases.map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800"
                        >
                            <phase.icon className={`w-8 h-8 mb-3 ${phase.color}`} />
                            <h3 className="font-bold text-sm mb-2">{phase.title}</h3>
                            <ul className="text-xs text-zinc-400 space-y-1">
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
                    className="mt-4 p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 text-center"
                >
                    <h3 className="text-xl font-bold text-blue-200 mb-2">✔ Result: User must operate the system manually.</h3>
                    <p className="text-zinc-400">Example: E-commerce site, Portfolio website, Booking app (without auto-sync).</p>
                </motion.div>
            </div>
        </SlideLayout>
    );
}
