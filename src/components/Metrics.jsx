import React from 'react';

const Metrics = () => {
    const metrics = [
        { label: "Performance ROI", value: "300%+", subtext: "Гарантированный рост" },
        { label: "Опыт на рынке", value: "4+ года", subtext: "Более 100 проектов" },
        { label: "Экономия бюджета", value: "60%", subtext: "За счет AI-оптимизации" }
    ];

    return (
        <section className="bg-bg pb-6">
            <div className="page-container">
                <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-6 px-2 sm:px-0">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <div className="text-[7px] sm:text-[10px] md:text-sm font-bold text-brand-purple uppercase tracking-widest md:tracking-[0.2em] mb-1 sm:mb-2 md:mb-4">
                                {metric.label}
                            </div>
                            <div className="text-sm sm:text-2xl md:text-5xl font-display font-bold text-text mb-1 sm:mb-2 md:mb-4 whitespace-nowrap">
                                {metric.value}
                            </div>
                            <div className="text-[8px] sm:text-xs md:text-base text-muted-text font-medium leading-tight max-w-[100px] sm:max-w-none">
                                {metric.subtext}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metrics;
