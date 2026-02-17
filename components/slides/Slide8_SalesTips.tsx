import { motion } from "framer-motion";
import { X, Check, Shield, Code, DollarSign } from "lucide-react";
import SlideLayout from "../SlideLayout";

const cards = [
    {
        icon: Code,
        objection: "It's too technical for us.",
        solution: "Low-code. Drag & drop for 90% of tasks. Code is optional.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Shield,
        objection: "What about data privacy?",
        solution: "Self-hostable. Your data never leaves your infrastructure.",
        color: "from-rose-500 to-orange-500"
    },
    {
        icon: DollarSign,
        objection: "Is it expensive?",
        solution: "Fair-code model. Free to start, pay only when you scale.",
        color: "from-green-500 to-emerald-500"
    }
];

export default function Slide8_SalesTips() {
    return (
        <SlideLayout title="Sales Battle Cards" subtitle="Flip the objection. Win the deal.">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 h-full mt-4">
                {cards.map((card, i) => (
                    <div key={i} className="group w-72 h-96 [perspective:1000px]">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                        >
                            {/* Front of Card (Objection) */}
                            <div className="absolute inset-0 w-full h-full bg-zinc-900 border border-zinc-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl [backface-visibility:hidden]">
                                <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mb-6 border border-zinc-700 group-hover:border-red-500/50 transition-colors">
                                    <X className="w-10 h-10 text-red-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-300 mb-2">"{card.objection}"</h3>
                                <p className="text-sm text-zinc-500 mt-4 font-mono uppercase tracking-widest">Hover to Solve</p>
                            </div>

                            {/* Back of Card (Solution) */}
                            <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${card.color} rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(0,0,0,0.5)] [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                                    <Check className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{card.solution}</h3>
                                <card.icon className="w-8 h-8 text-white/50 absolute bottom-6" />
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </SlideLayout>
    );
}
