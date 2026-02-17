import { motion } from "framer-motion";
import { Lock, Server, Code, Layers, Zap, Bot } from "lucide-react";
import SlideLayout from "../SlideLayout";

const features = [
    { icon: Lock, title: "Enterprise Secure", desc: "SOC2 compliant, SSO, and Role-Based Access Control (RBAC)." },
    { icon: Server, title: "Self-Hostable", desc: "Docker/Kubernetes ready. Keep data in your VPC." },
    { icon: Code, title: "Developer Friendly", desc: "First-class support for TypeScript, Python, and raw JSON manipulation." },
    { icon: Layers, title: "Visual Logic", desc: "Complex branching, merging, and error handling nodes." },
    { icon: Zap, title: "Real-Time Triggers", desc: "Webhooks, Cron, and event listeners for instant execution." },
    { icon: Bot, title: "AI Native", desc: "Integrated LangChain nodes for LLMs, Vector Stores, and Agents." },
];

export default function Slide6_Features() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <SlideLayout title="Why n8n?" subtitle="Built for scale, security, and complexity.">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        className="p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-800 hover:border-zinc-600 transition-all hover:scale-105"
                    >
                        <f.icon className="w-10 h-10 text-orange-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-white">{f.title}</h3>
                        <p className="text-sm text-zinc-500">{f.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </SlideLayout>
    );
}
