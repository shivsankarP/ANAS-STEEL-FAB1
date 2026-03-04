import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projectItems = [
    {
        title: 'Waste Management, Material Recovery & Recycling Plant',
        location: 'Industrial Sector',
        country: 'India',
        image: '/services/waste.jpg',
        galleryId: 13
    },
    {
        title: 'CANOPY',
        location: 'Commercial Center',
        country: 'Kerala, India',
        image: '/projects/canopy.jpg',
        galleryId: 1
    },
    {
        title: 'ROOF TRUSS WORKS',
        location: 'Storage Facility',
        country: 'Kochi, India',
        image: '/projects/rooftruss.jpg',
        galleryId: 2
    },
    {
        title: 'PUFF SHEET WORK',
        location: 'Cold Storage Lab',
        country: 'Calicut, India',
        image: '/projects/puffsheet.jpg',
        galleryId: 3
    },
    {
        title: 'STEEL STRUCTURAL WORK',
        location: 'Business Park',
        country: 'Trivandrum, India',
        image: '/projects/steelstructure.jpg',
        galleryId: 4
    },
    {
        title: 'PERGOLAS',
        location: 'Leisure Club',
        country: 'Munnar, India',
        image: '/projects/pergolas1.jpg',
        galleryId: 5
    },
    {
        title: 'MEZZANINE FLOORS',
        location: 'Distribution Hub',
        country: 'Palakkad, India',
        image: '/projects/mezzanine.jpg',
        galleryId: 6
    },
    {
        title: 'CURVED ROOFINGS',
        location: 'Sports Arena',
        country: 'Wayanad, India',
        image: '/projects/curvedroof.jpg',
        galleryId: 7
    },
    {
        title: 'GATES',
        location: 'Luxury Estate',
        country: 'Kottayam, India',
        image: '/projects/gates.jpg',
        galleryId: 8
    },
    {
        title: 'ELEVATORS',
        location: 'Commercial & Residential',
        country: 'Kerala, India',
        image: '/projects/elevators.jpg',
        galleryId: 9
    },
    {
        title: 'EFFLUENT TREATMENT PLANT',
        location: 'Chemical Industry',
        country: 'India',
        image: '/services/ETP.jpg',
        galleryId: 11
    },
    {
        title: 'SITE ERECTION',
        location: 'Mainland Sites',
        country: 'India',
        image: '/services/erection.png',
        galleryId: 12
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-navy tracking-tight"
                    >
                        We Do....
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto mb-8 font-light"
                    >
                        Engineering excellence for Kerala's skyline. We transform raw steel into landmarks with unmatched durability and design.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            to="/recently-done"
                            className="inline-block px-8 py-3 bg-navy text-white font-bold rounded-full hover:bg-cobalt transition-all shadow-lg active:scale-95 whitespace-nowrap"
                        >
                            Most Recent Work
                        </Link>
                        <span className="text-slate-500 font-semibold italic text-lg">
                            To Experience Our More Works
                        </span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {projectItems.map((project, index) => (
                        <Link
                            key={index}
                            to={project.galleryId ? `/recently-done?filter=${project.galleryId}` : '/recently-done'}
                            className="block"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group relative bg-white/40 backdrop-blur-md rounded-[24px] border border-white/20 shadow-lg overflow-hidden cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.33,1,0.68,1)] hover:-translate-y-1.5 hover:shadow-xl h-full"
                            >
                                {/* Top: Image Section */}
                                <div className="relative aspect-[16/10] overflow-hidden m-3 rounded-[18px]">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                                </div>

                                {/* Bottom: Info Section */}
                                <div className="px-5 pb-5">
                                    <div className="overflow-hidden mb-1">
                                        <h3 className="text-base font-bold text-navy mb-0.5 group-hover:text-cobalt transition-colors duration-300 truncate">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
