"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Slide1_Intro from "./slides/Slide1_Intro";
import Slide2_WhatIs from "./slides/Slide2_WhatIs";
import Slide3_ManualWorkflow from "./slides/Slide3_ManualWorkflow";
import Slide4_AutomatedWorkflow from "./slides/Slide4_AutomatedWorkflow";
import Slide5_Process from "./slides/Slide5_Process";
import Slide5_5_EngagementStrategy from "./slides/Slide5_5_EngagementStrategy";
import Slide6_FullStack from "./slides/Slide6_FullStack";
import Slide7_FullStackAutomation from "./slides/Slide7_FullStackAutomation";
import Slide8_AutomationOnly from "./slides/Slide8_AutomationOnly";
import Slide9_Outro from "./slides/Slide9_Outro";


const SLIDES = [
    Slide1_Intro,
    Slide2_WhatIs,
    Slide3_ManualWorkflow,
    Slide4_AutomatedWorkflow,
    Slide5_Process,
    Slide5_5_EngagementStrategy,
    Slide6_FullStack,
    Slide7_FullStackAutomation,
    Slide8_AutomationOnly,
    Slide9_Outro,

];

export default function Presentation() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === "Space") {
                setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
            } else if (e.key === "ArrowLeft") {
                setCurrentSlide((prev) => Math.max(prev - 1, 0));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const ActiveSlide = SLIDES[currentSlide];

    return (
        <div className="bg-black h-screen w-screen overflow-hidden text-white font-sans">
            <AnimatePresence mode="wait">
                <ActiveSlide key={currentSlide} />
            </AnimatePresence>

            {/* Optional: Slide Progress Indicator */}
            <div className="fixed bottom-0 left-0 h-1 bg-zinc-800 w-full z-50">
                <div
                    className="h-full bg-gradient-to-r from-rose-500 to-orange-500 transition-all duration-300 ease-out"
                    style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
                />
            </div>
        </div>
    );
}
