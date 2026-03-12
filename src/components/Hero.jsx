import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextType from './TextType';

// Static Data defined outside component for stable references
const POPULAR_ITEMS = [
    {
        id: 1,
        title: 'Waste Management & Recycling Plant',
        tag: 'Sustainability',
        tagline: 'Turning waste into worth — steel-engineered for a cleaner tomorrow.',
        image: '/services/waste.webp'
    },
    {
        id: 2,
        title: 'Effluent Treatment Plant',
        tag: 'Water Treatment',
        tagline: 'Precision-built structures that protect our planet, drop by drop.',
        image: '/services/ETP.webp'
    },
    {
        id: 3,
        title: 'Heavy Structure Fabrication & Erection',
        tag: 'Structural',
        tagline: 'Rising steel, built right — safe, swift, and uncompromising.',
        image: '/services/erection.webp'
    },
    {
        id: 4,
        title: 'Roofing Solutions',
        tag: 'Infrastructure',
        tagline: 'Engineered covers that shield every structure with strength.',
        image: '/services/roofsolution.webp'
    },
];

const TYPING_TEXTS = ["Soul & Strength", "Design Excellence", "Industrial Power"];

// Memoized TextType to ignore parent re-renders unless its own props change
const MemoizedTextType = memo(TextType);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % POPULAR_ITEMS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen w-full flex items-start justify-center overflow-hidden bg-black font-sans">
            {/* Dynamic Animated Background */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={POPULAR_ITEMS[currentIndex].image}
                        alt="Background"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>
                {/* Fallback/Overlay sparks image for cinematic feel */}
                <div className="absolute inset-0 z-10 opacity-10 mix-blend-overlay">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-20"></div>
            </div>

            {/* Left Side: Text — responsive vertical positioning */}
            <div className="absolute top-[28vh] sm:top-[35vh] md:top-[45vh] left-0 z-30 w-full max-w-xl px-5 sm:px-8">
                <div className="flex flex-col items-start">

                    {/* Dynamic Tag + Tagline from active slide */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.5 }}
                            className="mb-2 sm:mb-3 flex flex-col items-start gap-1 sm:gap-1.5"
                        >
                            <span className="inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full bg-periwinkle/80 text-white backdrop-blur-sm">
                                {POPULAR_ITEMS[currentIndex].tag}
                            </span>
                            <p className="text-white/60 text-xs sm:text-sm md:text-base font-light italic leading-snug max-w-xs sm:max-w-sm">
                                &quot;{POPULAR_ITEMS[currentIndex].tagline}&quot;
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 uppercase tracking-tight"
                    >
                        Steel With <br />
                        <span className="text-periwinkle">Precision</span>
                    </motion.h1>

                </div>
            </div>

            {/* Bottom Cards — responsive layout */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-30 px-3 sm:px-5 lg:px-0 lg:right-6 lg:left-auto lg:w-[58%]">
                <div className="flex gap-2 sm:gap-3 md:gap-4 w-full">
                    {POPULAR_ITEMS.slice(0, 4).map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: index === currentIndex ? 1.06 : 1,
                                borderColor: index === currentIndex ? "rgba(204, 204, 255, 0.6)" : "rgba(255, 255, 255, 0.1)"
                            }}
                            transition={{ duration: 0.6 }}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex-1 aspect-[2/3] sm:aspect-[2/3.5] relative rounded-2xl sm:rounded-3xl overflow-hidden group border-2 sm:border-4 shadow-2xl cursor-pointer transition-all duration-500 ${index === currentIndex ? 'z-50 shadow-periwinkle/20' : 'opacity-60 grayscale-[0.5] hover:opacity-100 hover:grayscale-0'}`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className={`w-full h-full object-cover transition-transform duration-1000 ${index === currentIndex ? 'scale-110' : 'group-hover:scale-110'}`}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                            <div className={`absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 transition-all duration-500 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                                <span className="hidden sm:inline-block px-2 py-0.5 mb-1 sm:mb-2 text-[9px] sm:text-[10px] font-black uppercase tracking-widest rounded-full bg-periwinkle/80 text-white">
                                    {item.tag}
                                </span>
                                <p className="hidden sm:block text-white font-black text-xs sm:text-sm md:text-base leading-tight mb-1">
                                    {item.title}
                                </p>
                            </div>
                            {index === currentIndex && (
                                <motion.div
                                    layoutId="activeBar"
                                    className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-periwinkle"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Hero;
