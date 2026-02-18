import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Database, Bot, Mail, Check, Terminal, Zap } from "lucide-react";
import SlideLayout from "../SlideLayout";

// --- Components ---
const Node = ({ icon: Icon, label, status, x, y, delay }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            className={`absolute flex flex-col items-center gap-2 p-4 rounded-2xl border-2 w-32 backdrop-blur-md shadow-2xl z-10 
            ${status === "waiting" ? "border-zinc-800 bg-zinc-900/80 text-zinc-600" : ""}
            ${status === "active" ? "border-orange-500 bg-zinc-900 text-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.3)] ring-1 ring-orange-500/50" : ""}
            ${status === "success" ? "border-green-500 bg-zinc-900 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.2)]" : ""}
            `}
            style={{ left: x, top: y }}
        >
            <div className={`p-3 rounded-full transition-colors duration-300 ${status === "active" ? "bg-orange-500/20 animate-pulse" : "bg-zinc-800"}`}>
                <Icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold whitespace-nowrap">{label}</span>

            {/* Connector Points */}
            <div className="absolute -right-1.5 top-1/2 w-3 h-3 rounded-full bg-zinc-700 border border-zinc-900" />
            <div className="absolute -left-1.5 top-1/2 w-3 h-3 rounded-full bg-zinc-700 border border-zinc-900" />

            {status === "success" && (
                <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="absolute -top-3 -right-3 bg-green-500 text-black rounded-full p-1 border-4 border-zinc-950"
                >
                    <Check className="w-3 h-3 stroke-[4]" />
                </motion.div>
            )}
        </motion.div>
    );
};

const Connection = ({ startX, endX, y, active }: any) => {
    return (
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 1000 450" preserveAspectRatio="none">
            <motion.path
                d={`M ${startX} ${y} C ${startX + 50} ${y}, ${endX - 50} ${y}, ${endX} ${y}`}
                fill="none"
                stroke={active ? "#f97316" : "#27272a"}
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
            />
            {active && (
                <motion.circle
                    r="6"
                    fill="#f97316"
                    style={{ offsetPath: `path("M ${startX} ${y} C ${startX + 50} ${y}, ${endX - 50} ${y}, ${endX} ${y}")` }}
                    animate={{ offsetDistance: ["0%", "100%"] }}
                    transition={{ duration: 0.8, ease: "linear", repeat: Infinity, repeatDelay: 0.2 }}
                />
            )}
        </svg>
    );
};

export default function Slide4_AutomatedWorkflow() {
    const [step, setStep] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        let mounted = true;
        const sequence = async () => {
            if (!mounted) return;

            const addLog = (msg: string) => setLogs(prev => {
                const newLogs = [...prev, msg];
                return newLogs.slice(-5);
            });

            // Reset
            setStep(0);
            setLogs([]);
            await new Promise(r => setTimeout(r, 1000));

            // Step 1: Webhook
            if (!mounted) return;
            setStep(1);
            addLog("> WEBHOOK_RECEIVED: { id: 'evt_8392' }");
            await new Promise(r => setTimeout(r, 1000));

            // Step 2: Database
            if (!mounted) return;
            setStep(2);
            addLog("> POSTGRES: Fetching user profile...");
            await new Promise(r => setTimeout(r, 1200));

            // Step 3: AI
            if (!mounted) return;
            setStep(3);
            addLog("> OPENAI: Generating personalized email...");
            await new Promise(r => setTimeout(r, 1500));

            // Step 4: Email
            if (!mounted) return;
            setStep(4);
            addLog("> GMAIL: Sent successfully (200 OK)");
            addLog("> WORKFLOW_COMPLETED in 1.4s");
        };

        sequence();
        const interval = setInterval(sequence, 6500);
        return () => { mounted = false; clearInterval(interval); };
    }, []);

    return (
        <SlideLayout title="The n8n Way" subtitle="Visual, automated, and infinitely scalable.">
            <div className="relative h-full flex flex-col items-center justify-center">

                {/* Workflow Canvas */}
                <div className="relative w-full max-w-5xl h-[450px] bg-[#09090b] rounded-xl border border-zinc-800 shadow-2xl overflow-hidden group">

                    {/* Grid Background */}
                    <div className="absolute inset-0 opacity-20"
                        style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "24px 24px" }}
                    />

                    {/* Nodes & Connections */}
                    {/* Width 1000px context */}
                    {/* Node Width 128px (w-32) */}

                    <Node
                        icon={Globe} label="Webhook" x="5%" y="40%" delay={0}
                        status={step >= 1 ? (step > 1 ? "success" : "active") : "waiting"}
                    />
                    {/* 5% of 1000 = 50. Center Y ~225. + 40 (center of node height approx) -> actually using top:40% so ~180px + node half height */}
                    {/* Let's align Y in Connection to Node center. Node is top 40%. Height w-32 is width, height auto. p-4 + icon + text. Approx 110px. Center ~55px. */}
                    {/* 40% of 450 = 180. Center Y = 180 + 55 = 235. */}

                    <Connection startX={178} endX={300} y={235} active={step >= 2} />

                    <Node
                        icon={Database} label="Get User Data" x="30%" y="40%" delay={0.1}
                        status={step >= 2 ? (step > 2 ? "success" : "active") : "waiting"}
                    />
                    <Connection startX={428} endX={550} y={235} active={step >= 3} />

                    <Node
                        icon={Bot} label="AI Generate" x="55%" y="40%" delay={0.2}
                        status={step >= 3 ? (step > 3 ? "success" : "active") : "waiting"}
                    />
                    <Connection startX={678} endX={800} y={235} active={step >= 4} />

                    <Node
                        icon={Mail} label="Send Email" x="80%" y="40%" delay={0.3}
                        status={step >= 4 ? "success" : "waiting"}
                    />

                    {/* Console Log Overlay */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="absolute bottom-6 left-6 w-96 bg-black/90 backdrop-blur-md rounded-lg border border-zinc-800 p-4 font-mono text-[10px] shadow-2xl"
                    >
                        <div className="flex items-center gap-2 mb-3 border-b border-zinc-800 pb-2">
                            <Terminal className="w-3 h-3 text-zinc-500" />
                            <span className="text-zinc-500 font-bold">LIVE EXECUTION LOGS</span>
                        </div>
                        <div className="flex flex-col gap-1.5 h-24 overflow-hidden">
                            <AnimatePresence mode="popLayout">
                                {logs.map((log, i) => (
                                    <motion.div
                                        key={`${i}-${log}`}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        layout
                                        className={`flex items-center gap-2 ${log.includes("SUCCESS") ? "text-green-400" : log.includes("WEBHOOK") ? "text-blue-400" : log.includes("OPENAI") ? "text-purple-400" : "text-zinc-400"}`}
                                    >
                                        <div className={`w-1.5 h-1.5 rounded-full ${log.includes("SUCCESS") ? "bg-green-500" : "bg-zinc-700"}`} />
                                        {log}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Efficiency Metric */}
                    <motion.div
                        className="absolute top-6 right-6 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <Zap className="w-4 h-4 text-green-400 fill-current" />
                        <span className="text-sm font-bold text-green-400">Time Saved: 15m 30s</span>
                    </motion.div>

                </div>

            </div>
        </SlideLayout>
    );
}
