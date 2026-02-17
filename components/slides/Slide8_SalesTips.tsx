import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import SlideLayout from "../SlideLayout";

const strategies = [
    {
        title: "1. Discovery Phase",
        question: "Where do you copy-paste data manually?",
        tactic: "Identify high-volume, repetitive tasks. Ask about 'shadow IT' or broken spreadsheet processes.",
        response: "We can automate that 4-hour task into a 30-second background process."
    },
    {
        title: "2. The 'MVP' Proposal",
        question: "Can we build a proof-of-concept in 48 hours?",
        tactic: "Don't sell a 6-month project. Sell a quick win. Build a small workflow live in front of them if possible.",
        response: "I'll bear the risk. If the demo doesn't work, you don't pay."
    },
    {
        title: "3. ROI Calculation",
        question: "How much is that error costing you?",
        tactic: "Quantify the problem. (Hours saved x Hourly Rate) + (Cost of Errors).",
        response: "This $5k automation saves you $20k/year in manual labor essentially paying for itself in 3 months."
    }
];

export default function Slide8_SalesTips() {
    return (
        <SlideLayout title="Sales Playbook" subtitle="Handling common client objections.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {strategies.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="group relative h-80 perspective-1000"
                    >
                        <div className="w-full h-full p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col transition-all duration-500 group-hover:border-rose-500/50 hover:bg-zinc-900/80">

                            <div className="mb-6">
                                <span className="text-xs font-bold tracking-wider text-rose-500 uppercase">{s.title}</span>
                                <h3 className="text-xl font-bold text-white mt-2 leading-tight">"{s.question}"</h3>
                            </div>

                            <div className="flex-grow flex flex-col justify-end">
                                <p className="text-zinc-400 text-sm mb-4 border-l-2 border-zinc-700 pl-3 italic">
                                    {s.tactic}
                                </p>
                                <div className="bg-rose-500/10 p-3 rounded-lg border border-rose-500/20">
                                    <p className="text-rose-200 text-sm font-medium">👉 {s.response}</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </SlideLayout>
    );
}
