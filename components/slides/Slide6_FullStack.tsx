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
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="flex flex-col items-center text-center p-8 rounded-2xl bg-zinc-900/80 border-2 border-zinc-700/50 hover:border-blue-500/50 hover:bg-zinc-800 transition-all duration-300 transform hover:-translate-y-2 h-full justify-between shadow-lg"
                        >
                            <div className="flex flex-col items-center">
                                <phase.icon className={`w-14 h-14 mb-5 ${phase.color} drop-shadow-lg`} />
                                <h3 className="font-extrabold text-2xl mb-4 tracking-tight leading-snug min-h-[3.5rem] flex items-center justify-center">{phase.title}</h3>
                            </div>
                            <ul className="text-base font-medium text-zinc-300 space-y-2.5 w-full">
                                {phase.details.map((d, j) => (
                                    <li key={j} className="flex items-center justify-center bg-white/5 rounded-lg py-1 px-2">
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="mt-10 p-10 rounded-3xl bg-gradient-to-br from-blue-950/60 to-purple-900/60 border-2 border-blue-400/40 text-center shadow-[0_0_50px_-10px_rgba(59,130,246,0.4)] backdrop-blur-sm"
                >
                    <h3 className="text-5xl font-black text-white mb-4 drop-shadow-xl tracking-tight">
                        <span className="text-blue-400 mr-3">✔</span>
                        Result: User must <span className="text-blue-200">operate manually</span>.
                    </h3>
                    <p className="text-2xl font-light text-zinc-200 max-w-4xl mx-auto leading-relaxed">
                        Example: E-commerce site, Portfolio website, Booking app (without auto-sync).
                    </p>
                </motion.div>
            </div>
        </SlideLayout>
    );
}
