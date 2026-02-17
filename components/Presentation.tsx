"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Slide1_Intro from "./slides/Slide1_Intro";
import Slide2_WhatIs from "./slides/Slide2_WhatIs";
import Slide3_ManualWorkflow from "./slides/Slide3_ManualWorkflow";
import Slide4_AutomatedWorkflow from "./slides/Slide4_AutomatedWorkflow";
import Slide5_Process from "./slides/Slide5_Process";
import Slide6_Features from "./slides/Slide6_Features";
import Slide7_Comparison from "./slides/Slide7_Comparison";
import Slide8_SalesTips from "./slides/Slide8_SalesTips";
import Slide9_Summary from "./slides/Slide9_Summary";

const SLIDES = [
    Slide1_Intro,
    Slide2_WhatIs,
    Slide3_ManualWorkflow,
    Slide4_AutomatedWorkflow,
    Slide5_Process,
    Slide6_Features,
    Slide7_Comparison,
    Slide8_SalesTips,
    Slide9_Summary,
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
