import React from 'react';
import { motion } from 'framer-motion';
import { FaIndustry, FaProjectDiagram, FaHardHat, FaArchway } from 'react-icons/fa';

const services = [
    {
        title: 'Waste Management, Material Recovery & Recycling Plant',
        desc: 'Comprehensive waste management solutions including material recovery and recycling plant design and fabrication with precision steel engineering.',
        icon: <FaIndustry />,
        image: '/services/waste.webp'
    },
    {
        title: 'Effluent Treatment Plant',
        desc: 'Advanced effluent treatment plant structures and systems built with high-grade steel for industrial and commercial applications.',
        icon: <FaProjectDiagram />,
        image: '/services/ETP.webp'
    },
    {
        title: 'Heavy Structure Fabrication & Erection',
        desc: 'Professional on-site erection services for complex steel structures following strict safety standards.',
        icon: <FaHardHat />,
        image: '/services/fab_erection.webp'
    },
    {
        title: 'Puff Sheet Work',
        desc: 'Premium puff sheet roofing and cladding solutions for industrial and commercial buildings, offering superior insulation and durability.',
        icon: <FaArchway />,
        image: '/services/puff_sheet.webp'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-cobalt font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Our Core Expertise
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy"
                    >
                        Specialized Solutions
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="h-48 sm:h-56 md:h-64 relative overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-navy/20 group-hover:bg-cobalt/20 transition-colors"></div>
                                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-cobalt text-xl md:text-2xl shadow-lg">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="p-6 md:p-8 lg:p-10">
                                <h4 className="text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4 leading-snug">{service.title}</h4>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-5 md:mb-6">
                                    {service.desc}
                                </p>
                                <div className="h-1 w-12 bg-periwinkle group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
