import { motion } from "framer-motion";
import { Play, Activity, ArrowRight } from "lucide-react";
import SlideLayout from "../SlideLayout";

const processSteps = [
    {
        icon: Play,
        title: "1. Build Visually",
        points: ["Drag & Drop Nodes", "Connect Apps via API", "Set Triggers (Webhook/Cron)", "Map Data JSON"],
        color: "text-orange-500"
    },
    {
        icon: Activity,
        title: "2. Test Logic",
        points: ["Run Individual Nodes", "Inspect Input/Output Data", "Debug in Real-Time", "Fix Errors Quickly"],
        color: "text-rose-500"
    },
    {
        icon: ArrowRight,
        title: "3. Activate",
        points: ["One-Click Deployment", "Set Production Variables", "Monitor Executions", "Scale Immediately"],
        color: "text-purple-500"
    }
];

export default function Slide5_Process() {
    return (
        <SlideLayout title="How It Works" subtitle="A visual development environment for workflows.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto place-items-center">
                {processSteps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.4 }}
                        className="w-full max-w-sm"
                    >
                        <div className={`text-8xl font-black opacity-10 mb-[-2rem] ml-4 ${step.color}`}>0{i + 1}</div>
                        <div className="p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm relative z-10 hover:bg-zinc-900/60 transition-colors h-[450px] flex flex-col">
                            <div className={`mb-8 p-6 rounded-xl bg-black/50 w-fit border border-zinc-800 ${step.color}`}>
                                <step.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-bold mb-8">{step.title}</h3>
                            <ul className="space-y-4">
                                {step.points.map((p, j) => (
                                    <motion.li
                                        key={j}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: (i * 0.4) + (j * 0.1) + 0.5 }}
                                        className="flex items-center gap-3 text-zinc-400"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-zinc-600" />
                                        <span className="text-lg">{p}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SlideLayout>
    );
}
