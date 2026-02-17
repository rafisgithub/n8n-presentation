import { motion } from "framer-motion";
import { Zap, CheckCircle, Database, Mail, Globe } from "lucide-react";
import SlideLayout from "../SlideLayout";

export default function Slide4_AutomatedWorkflow() {
    const steps = [
        { icon: Globe, label: "Webhook" },
        { icon: Database, label: "Process Data" },
        { icon: Mail, label: "Send Email" },
        { icon: CheckCircle, label: "Update CRM" },
    ];

    return (
        <SlideLayout title="The n8n Way" subtitle="Speed, reliability, and full visibility.">
            <div className="relative h-full flex flex-col items-center justify-center">

                {/* Workflow Screenshot Container */}
                <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
                    <img
                        src="https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-screenshot.png"
                        alt="n8n Workflow Editor"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Animated Overlays */}
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + (i * 0.3) }}
                            className="absolute bg-zinc-900/90 backdrop-blur-md border border-zinc-700 p-3 rounded-lg flex items-center gap-3 shadow-xl"
                            style={{
                                top: `${20 + (i * 15)}%`,
                                left: `${10 + (i * 20)}%`
                            }}
                        >
                            <step.icon className="w-5 h-5 text-rose-500" />
                            <span className="text-xs font-bold text-white uppercase tracking-wider">{step.label}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Efficiency Metric */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-16 flex items-center gap-4 px-8 py-4 bg-green-500/10 border border-green-500/20 rounded-full text-green-400"
                >
                    <Zap className="w-5 h-5 fill-current" />
                    <span className="font-bold text-lg">Efficiency: 100% (Instant)</span>
                </motion.div>

            </div>
        </SlideLayout>
    );
}
