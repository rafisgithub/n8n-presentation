import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";

export default function Slide1_Intro() {
    return (
        <SlideLayout>
            {/* Personal Branding Sidebar */}
            {/* Personal Branding Sidebar */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute left-8 bottom-8 hidden xl:flex flex-row gap-8 text-left items-center"
            >

            </motion.div>
            <div className="flex flex-col items-center justify-center h-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 flex flex-col items-center"
                >
                    <img
                        src="https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png"
                        alt="n8n Logo"
                        className="h-32 md:h-40 mb-10 drop-shadow-[0_0_20px_rgba(255,107,107,0.5)]"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 px-6 py-2 rounded-full border border-zinc-700 bg-zinc-800/50 backdrop-blur-sm"
                    >
                        <span className="text-base md:text-lg font-mono text-zinc-400 uppercase tracking-widest">Exclusively for <span className="text-white font-bold">Betopia Group</span></span>
                    </motion.div>
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600">
                        Automate with n8n
                    </h1>
                    <p className="text-2xl md:text-3xl text-zinc-400 mt-4 font-light">
                        From <span className="text-blue-400 font-medium">Traditional Full-Stack</span> to <span className="text-orange-500 font-medium">Intelligent Automation</span>.
                    </p>

                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-zinc-800"
                >
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZCuL2e4zC_4?si=TgpxD-sAhiU2_VWy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </motion.div>
            </div>
        </SlideLayout>
    );
}
