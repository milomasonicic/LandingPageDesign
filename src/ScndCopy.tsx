"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";
import clsx from "clsx";  // Uvozi clsx za dinamičko dodavanje klasa

function Item({ children, hoverBg }: { children: React.ReactNode; hoverBg: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    return (
        <section style={itemContainer} className="max-w-[1440px] mx-auto">
            <div
                ref={ref}
                style={item}
                className={clsx(
                    "bg-slate-800 transition-colors duration-500 w-[70%]",
                    hoverBg  // Ovde koristimo hoverBg kao klasu
                )}
            >
                <figure style={progressIconContainer} className="bg-red-300">
                    <svg
                        style={progressIcon}
                        width="205"
                        height="205"
                        viewBox="0 0 100 100" // Osigurava ispravne koordinate
                    >
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="10"
                            pathLength="1"
                            style={{
                                ...progressIconIndicator,
                                pathLength: scrollYProgress,
                            }}
                        />
                    </svg>
                </figure>
                <div className="w-full h-full">{children}</div>
            </div>
        </section>
    );
}

export default function TrackElementWithinViewport() {
    return (
        <>
            <Item hoverBg="hover:bg-red-500"> {/* Ovde prosleđujemo Tailwind klasu */}
                <div className="flex flex-col items-center p-12">
                    <h1 className="text-center text-6xl mt-5 text-white font-mono">AI Hospital</h1>
                    <p className="text-white font-italic mt-4">
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, mollitia
                        beatae.
                    </p>
                </div>

                <div className="flex flex-col items-center p-12">
                    <h1 className="text-center text-6xl mt-5 text-white font-mono">AI Hospital</h1>
                    <p className="text-white font-italic mt-4">
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, mollitia
                        beatae.
                    </p>
                </div>
            </Item>
            <Item hoverBg="hover:bg-green-500"> {/* Drugi primer klasa */}
                <h1 className="text-white">Hi</h1>
            </Item>
           
        </>
    );
}

/**
 * ==============   Styles   ================
 */

const itemContainer: React.CSSProperties = {
    height: "100vh",
    maxHeight: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const progressIconContainer: React.CSSProperties = {
    position: "sticky",
    top: 0,
    width: 80,
    height: 80,
    margin: 0,
    padding: 0,
};

const processCircle: React.CSSProperties = {
    strokeDashoffset: 0,
    strokeWidth: 5,
    fill: "none",
};

const progressIcon: React.CSSProperties = {
    ...processCircle,
    transform: "translateX(-100px) rotate(-90deg)",
    stroke: "#ff0088",
};

const progressIconIndicator: React.CSSProperties = {
    ...processCircle,
    strokeDashoffset: 0,
    strokeWidth: 5,
    fill: "none",
};

const progressIconBg: React.CSSProperties = {
    opacity: 0.2,
};

const item: React.CSSProperties = {
    width: "35%",
    marginTop: "10px",
    height: 450,
    border: "2px dotted #ff0088",
    position: "relative",
};
