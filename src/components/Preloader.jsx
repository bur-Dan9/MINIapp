import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            // Add a small delay for the "wow" factor
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F8FAFC]"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Futuristic background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-purple/10 blur-[100px] rounded-full" />

                        {/* Main Loader Visual */}
                        <div className="relative">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="w-24 h-24 border-2 border-brand-purple/20 border-t-brand-purple rounded-full"
                            />

                            <motion.div
                                animate={{
                                    scale: [1.2, 1, 1.2],
                                    rotate: [0, -180, -360],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute inset-0 w-24 h-24 border-2 border-brand-magenta/10 border-b-brand-magenta rounded-full"
                            />
                        </div>

                        {/* Logo/Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 flex items-center gap-3"
                        >
                            <div className="w-8 h-8 rounded-lg bg-brand-purple flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-purple/20">
                                A
                            </div>
                            <span className="font-display font-bold text-2xl tracking-tighter text-[#0F172A]">
                                AWM OS
                            </span>
                        </motion.div>

                        {/* Loading Bar */}
                        <div className="mt-8 w-48 h-1 bg-slate-200 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="h-full bg-gradient-to-r from-brand-purple to-brand-magenta"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
