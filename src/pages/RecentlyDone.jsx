import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { FiArrowLeft, FiX, FiMaximize2, FiGrid } from 'react-icons/fi';

// This array will be where you add your new project images
// Categorized Gallery Structure
const categories = [
    {
        id: 13,
        name: 'Green Worms - Waste Management, Material Recovery & Recycling Plant',
        images: [
            // Kannur Site
            { url: '/projects/greenworms/kannur/DJI_0063.jpeg', title: 'Green Worms MRF - Kannur' },
            { url: '/projects/greenworms/kannur/DJI_20250106121148_0164_D (1).jpeg', title: 'Green Worms MRF - Kannur' },
            { url: '/projects/greenworms/kannur/WhatsApp Image 2026-02-26 at 8.15.00 PM (1).jpeg', title: 'Green Worms MRF - Kannur' },
            { url: '/projects/greenworms/kannur/WhatsApp Image 2026-02-26 at 8.15.00 PM (2).jpeg', title: 'Green Worms MRF - Kannur' },
            { url: '/projects/greenworms/kannur/generated-image.png', title: 'Green Worms MRF - Kannur' },
            { url: '/projects/greenworms/kannur/generated-image (1).png', title: 'Green Worms MRF - Kannur' },
            { url: '/projects/greenworms/kannur/generated-image (2).png', title: 'Green Worms MRF - Kannur' },
            { url: '/projects/greenworms/kannur/generated-image (3).png', title: 'Green Worms MRF - Kannur' },
            { url: '/projects/greenworms/kannur/generated-image (4).png', title: 'Green Worms MRF - Kannur' },

            // Kasaragod Site
            { url: '/projects/greenworms/kasaragod/DJI_0832.jpeg', title: 'Green Worms MRF - Kasaragod' },
            { url: '/projects/greenworms/kasaragod/DJI_0834.jpeg', title: 'Green Worms MRF - Kasaragod' },
            { url: '/projects/greenworms/kasaragod/DJI_0869.jpeg', title: 'Green Worms MRF - Kasaragod' },

            // Thamarassery Site
            { url: '/projects/greenworms/thamarassery/IMG_8944.JPG', title: 'Green Worms MRF - Thamarassery' },
            { url: '/projects/greenworms/thamarassery/IMG_8946.JPG', title: 'Green Worms MRF - Thamarassery' },
            { url: '/projects/greenworms/thamarassery/ff.png', title: 'Green Worms MRF - Thamarassery' },
            { url: '/projects/greenworms/thamarassery/generated-image.png', title: 'Green Worms MRF - Thamarassery' },
            { url: '/projects/greenworms/thamarassery/generated-image (1).png', title: 'Green Worms MRF - Thamarassery' },
            { url: '/projects/greenworms/thamarassery/generated-image (2).png', title: 'Green Worms MRF - Thamarassery' },
            { url: '/projects/greenworms/thamarassery/generated-image (3).png', title: 'Green Worms MRF - Thamarassery' },
            { url: '/projects/greenworms/thamarassery/generated-image (4).png', title: 'Green Worms MRF - Thamarassery' },
            { url: '/projects/greenworms/thamarassery/generated-image (5).png', title: 'Green Worms MRF - Thamarassery' }
        ]
    },
    {
        id: 1,
        name: 'CANOPY',
        images: [
            { url: '/projects/generated-image (3).png', title: 'Canopy Work 1' },
            { url: '/projects/generated-image (5).png', title: 'Canopy Work 2' },
            { url: '/projects/generated-image (6).png', title: 'Canopy Work 3' },
            { url: '/projects/generated-image (7).png', title: 'Canopy Work 4' }
        ]
    },
    {
        id: 2,
        name: 'ROOF TRUSS WORKS',
        images: [
            { url: '/projects/truss/Truss Work.png', title: 'Roof Truss Work 1' },
            { url: '/projects/truss/Truss Work 2.png', title: 'Roof Truss Work 2' },
            { url: '/projects/truss/Truss work 3.png', title: 'Roof Truss Work 3' }
        ]
    },

    {
        id: 4,
        name: 'STEEL STRUCTURAL WORK',
        images: [
            { url: '/projects/auditorium/generated-image (9).png', title: 'Auditorium Structural Work 1' },
            { url: '/projects/auditorium/generated-image (10).png', title: 'Auditorium Structural Work 2' },
            { url: '/projects/auditorium/generated-image (11).png', title: 'Auditorium Structural Work 3' },
            { url: '/projects/auditorium/generated-image (12).png', title: 'Auditorium Structural Work 4' },
            { url: '/projects/auditorium/generated-image (13).png', title: 'Auditorium Structural Work 5' },
            { url: '/projects/auditorium/generated-image (14).png', title: 'Auditorium Structural Work 6' },
            { url: '/projects/auditorium/generated-image (15).png', title: 'Auditorium Structural Work 7' }
        ]
    },

    {
        id: 9,
        name: 'ELEVATORS',
        images: [
            { url: '/projects/lift/WhatsApp Image 2026-02-26 at 8.26.25 PM (1).jpeg', title: 'Elevator Work 1' },
            { url: '/projects/lift/WhatsApp Image 2026-02-26 at 8.26.25 PM.jpeg', title: 'Elevator Work 2' },
            { url: '/projects/lift/WhatsApp Image 2026-02-26 at 8.45.56 PM.jpeg', title: 'Elevator Work 3' },
            { url: '/projects/lift/WhatsApp Image 2026-02-26 at 8.48.58 PM.jpeg', title: 'Elevator Work 4' },
            { url: '/projects/lift/WhatsApp Image 2026-02-26 at 8.48.59 PM.jpeg', title: 'Elevator Work 5' },
            { url: '/projects/lift/generated-image (8).png', title: 'Elevator Structure Render' }
        ]
    },

    {
        id: 11,
        name: 'EFFLUENT TREATMENT PLANT',
        images: [
            { url: '/projects/etp/ETP.jpeg', title: 'ETP Project 1' },
            { url: '/projects/etp/WhatsApp Image 2026-02-26 at 10.08.14 PM.jpeg', title: 'ETP Project 2' },
            { url: '/projects/etp/aa.jpeg', title: 'ETP Project 3' }
        ]
    },
    {
        id: 3,
        name: 'PUFF SHEET WORK',
        images: []
    },
    {
        id: 5,
        name: 'PERGOLAS',
        images: []
    },
    {
        id: 6,
        name: 'MEZZANINE FLOORS',
        images: []
    },
    {
        id: 7,
        name: 'CURVED ROOFINGS',
        images: []
    },
    {
        id: 8,
        name: 'GATES',
        images: []
    },
    {
        id: 12,
        name: 'Heavy Structure Fabrication & Erection',
        images: []
    }
];

const RecentlyDone = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [searchParams] = useSearchParams();
    const filterId = searchParams.get('filter');

    const filteredCategories = filterId
        ? categories.filter(cat => cat.id.toString() === filterId)
        : categories;

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                return;
            }
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-40 min-h-screen bg-white text-navy">
            <div className="container mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-navy hover:text-cobalt font-bold transition-all group"
                    >
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    {filterId && (
                        <Link
                            to="/recently-done"
                            className="inline-flex items-center gap-2 text-cobalt hover:text-navy font-bold transition-all group"
                        >
                            <FiGrid className="group-hover:rotate-12 transition-transform" />
                            View All Projects
                        </Link>
                    )}
                </div>
            </div>

            <div className="container mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-navy">Recently Done....</h1>
                    <p className="text-slate-500 text-lg max-w-2xl font-light italic">
                        A visual chronicle of our engineering precision, organized by category.
                    </p>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 pb-24 space-y-20">
                {filteredCategories.map((category) => (
                    <div key={category.id} id={`category-${category.id}`} className="relative scroll-mt-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <h2 className="text-2xl md:text-3xl font-black text-navy uppercase tracking-widest">
                                {category.name}
                            </h2>
                            <div className="h-[2px] flex-grow bg-slate-100 rounded-full" />
                        </motion.div>

                        {category.images.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.images.map((img, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => setSelectedImg(img)}
                                        className="flex flex-col gap-3 group cursor-pointer"
                                    >
                                        <div className="relative overflow-hidden rounded-2xl shadow-md border border-slate-100 aspect-[4/3]">
                                            <img
                                                src={img.url}
                                                alt={category.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                                <FiMaximize2 className="text-3xl text-white" />
                                            </div>
                                        </div>
                                        {category.name === 'Green Worms - Waste Management, Material Recovery & Recycling Plant' && (
                                            <p className="text-navy font-bold text-center text-sm md:text-base px-2 group-hover:text-cobalt transition-colors">
                                                {img.title}
                                            </p>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-12 px-8 rounded-3xl border-2 border-dashed border-slate-100 bg-slate-50/50 text-center">
                                <p className="text-slate-400 font-medium italic">No Images Yet....</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox for full-view */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                    >
                        <button
                            className="absolute top-8 right-8 text-navy text-4xl hover:text-cobalt transition-colors"
                            onClick={() => setSelectedImg(null)}
                        >
                            <FiX />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            src={selectedImg.url}
                            alt={selectedImg.title}
                            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-2xl border-4 border-white"
                        />
                        <div className="absolute bottom-10 left-0 right-0 text-center">
                            <p className="text-navy font-black uppercase tracking-[0.3em] text-lg">
                                {selectedImg.title}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RecentlyDone;
