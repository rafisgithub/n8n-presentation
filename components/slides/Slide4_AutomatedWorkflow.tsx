import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Database, Bot, Mail, Check, Terminal, Zap, FileSpreadsheet, MessageSquare } from "lucide-react";
import SlideLayout from "../SlideLayout";

// --- Components ---
// --- Components ---
const Node = ({ icon: Icon, label, status, x, y, delay }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            className={`absolute flex flex-col items-center gap-3 p-4 rounded-2xl border-2 w-40 backdrop-blur-md shadow-2xl z-10 
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
                    r="4"
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
                return newLogs.slice(-6);
            });

            // Reset
            setStep(0);
            setLogs([]);
            await new Promise(r => setTimeout(r, 1000));

            // Step 1: Scrape Lead
            if (!mounted) return;
            setStep(1);
            addLog("> SEARCH: Found new lead 'Sarah Connors'");
            await new Promise(r => setTimeout(r, 1000));

            // Step 2: AI Analyze & Write
            if (!mounted) return;
            setStep(2);
            addLog("> AI: Profile analysis: CTO @ TechCorp");
            addLog("> AI: Drafting personalized 'Series A' email...");
            await new Promise(r => setTimeout(r, 1200));

            // Step 3: Send Email
            if (!mounted) return;
            setStep(3);
            addLog("> GMAIL: Sending outreach... 200 OK");
            await new Promise(r => setTimeout(r, 1500));

            // Step 4: Check Reply
            if (!mounted) return;
            setStep(4);
            addLog("> IMAP: New reply detected!");
            addLog("> AI: Sentiment analysis: POSITIVE (0.98)");
            await new Promise(r => setTimeout(r, 1000));

            // Step 5: Store in Sheet
            if (!mounted) return;
            setStep(5);
            addLog("> SHEETS: Added lead to 'Hot Prospects'");
            addLog("> WORKFLOW_COMPLETED");
        };

        sequence();
        const interval = setInterval(sequence, 8000);
        return () => { mounted = false; clearInterval(interval); };
    }, []);

    return (
        <SlideLayout title="The n8n Way" subtitle="Automate complex business logic visually.">
            <div className="relative h-full flex flex-col items-center justify-center">

                {/* Workflow Canvas */}
                <div className="relative w-full max-w-7xl h-[600px] bg-[#09090b] rounded-xl border border-zinc-800 shadow-2xl overflow-hidden group">

                    {/* Grid Background */}
                    <div className="absolute inset-0 opacity-20"
                        style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "24px 24px" }}
                    />

                    {/* Nodes & Connections - 5 Steps */}
                    {/* Canvas Width ~1200px (max-w-7xl) but SVG viewbox is 1000. Let's map appropriately. */}
                    {/* Node Width 160px (w-40) */}

                    {/* 1. Scrape Lead */}
                    <Node
                        icon={Globe} label="Find Lead" x="4%" y="40%" delay={0}
                        status={step >= 1 ? (step > 1 ? "success" : "active") : "waiting"}
                    />
                    <Connection startX={120} endX={240} y={300} active={step >= 2} />

                    {/* 2. AI Analyze */}
                    <Node
                        icon={Bot} label="AI Personalize" x="24%" y="40%" delay={0.1}
                        status={step >= 2 ? (step > 2 ? "success" : "active") : "waiting"}
                    />
                    <Connection startX={320} endX={440} y={300} active={step >= 3} />

                    {/* 3. Send Email */}
                    <Node
                        icon={Mail} label="Send Email" x="44%" y="40%" delay={0.2}
                        status={step >= 3 ? (step > 3 ? "success" : "active") : "waiting"}
                    />
                    <Connection startX={520} endX={640} y={300} active={step >= 4} />

                    {/* 4. Check Reply */}
                    <Node
                        icon={MessageSquare} label="Check Reply" x="64%" y="40%" delay={0.3}
                        status={step >= 4 ? (step > 4 ? "success" : "active") : "waiting"}
                    />
                    <Connection startX={720} endX={840} y={300} active={step >= 5} />

                    {/* 5. Update Sheet */}
                    <Node
                        icon={FileSpreadsheet} label="Update CRM" x="84%" y="40%" delay={0.4}
                        status={step >= 5 ? "success" : "waiting"}
                    />

                    {/* Console Log Overlay */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="absolute bottom-8 left-8 w-[500px] bg-black/90 backdrop-blur-md rounded-lg border border-zinc-800 p-6 font-mono text-xs shadow-2xl"
                    >
                        <div className="flex items-center gap-2 mb-3 border-b border-zinc-800 pb-2">
                            <Terminal className="w-3 h-3 text-zinc-500" />
                            <span className="text-zinc-500 font-bold">LIVE EXECUTION LOGS</span>
                        </div>
                        <div className="flex flex-col gap-1.5 h-32 overflow-hidden">
                            <AnimatePresence mode="popLayout">
                                {logs.map((log, i) => (
                                    <motion.div
                                        key={`${i}-${log}`}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        layout
                                        className={`flex items-center gap-2 ${log.includes("SUCCESS") || log.includes("POSITIVE") ? "text-green-400" :
                                            log.includes("SEARCH") ? "text-blue-400" :
                                                log.includes("AI") ? "text-purple-400" :
                                                    log.includes("Warning") ? "text-yellow-400" :
                                                        "text-zinc-400"}`}
                                    >
                                        <div className={`w-1.5 h-1.5 rounded-full ${log.includes("SUCCESS") || log.includes("POSITIVE") ? "bg-green-500" :
                                            log.includes("AI") ? "bg-purple-500" :
                                                "bg-zinc-700"}`}
                                        />
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
                        <span className="text-sm font-bold text-green-400">Automated Leads: +142 today</span>
                    </motion.div>

                </div>

            </div>
        </SlideLayout>
    );
}
