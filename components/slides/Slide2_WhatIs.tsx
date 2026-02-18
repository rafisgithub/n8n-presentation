import { motion } from "framer-motion";
import { Network, Zap, GitBranch } from "lucide-react";
import SlideLayout from "../SlideLayout";

const features = [
    {
        icon: Network,
        title: "Node-Based Visual Editor",
        desc: "Build complex workflows by connecting nodes. No coding required for 90% of tasks.",
    },
    {
        icon: GitBranch,
        title: "Fair-Code & Self-Hostable",
        desc: "Host on your own server. Keep your data private. Extendable source code.",
    },
    {
        icon: Zap,
        title: "Developer Power",
        desc: "Write JavaScript/Python when you need it. Connect to any API, Database, or AI Agent.",
    },
];

export default function Slide2_WhatIs() {
    return (
        <SlideLayout title="What is n8n?" subtitle="A powerful, low-code workflow automation tool designed to connect web applications, databases, and AI tools to automate repetitive tasks.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.2 }}
                        className="p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-rose-500/50 transition-colors group flex flex-col justify-center min-h-[300px]"
                    >
                        <div className="mb-8 p-6 rounded-full bg-zinc-800 w-fit group-hover:bg-rose-500/20 transition-colors">
                            <f.icon className="w-12 h-12 text-rose-500" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6">{f.title}</h3>
                        <p className="text-xl text-zinc-400 leading-relaxed">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </SlideLayout>
    );
}
