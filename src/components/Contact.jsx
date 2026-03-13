import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cobalt/10 skew-x-12 translate-x-20 hidden sm:block"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
                    {/* Left: Contact Info */}
                    <div className="w-full lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-periwinkle font-bold tracking-widest uppercase text-sm mb-4"
                        >
                            Get in Touch
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight"
                        >
                            Let's Build Something <br className="hidden sm:block" />
                            <span className="text-periwinkle">Remarkable</span> Together.
                        </motion.h3>

                        <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-12 max-w-md">
                            Ready to start your next heavy structure project? Our team is available 24/7 for support and sales inquiries.
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-periwinkle text-lg md:text-xl border border-white/10">
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Main Office</p>
                                    <a href="tel:+919746102236" className="text-lg md:text-xl font-bold hover:text-periwinkle transition-colors">+91 97461 02236</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-periwinkle text-lg md:text-xl border border-white/10">
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Contact Person</p>
                                    <a href="tel:+919846402236" className="text-lg md:text-xl font-bold hover:text-periwinkle transition-colors">+91 98464 02236</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-periwinkle text-lg md:text-xl border border-white/10">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Email Us</p>
                                    <p className="text-base md:text-xl font-bold break-all">anasfab23@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-periwinkle text-lg md:text-xl border border-white/10">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Visit Us</p>
                                    <p className="text-base md:text-xl font-bold">Chelembra, Malappuram, <br className="hidden sm:block" /> Kerala, 673634</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-8 md:mt-12">
                                <a
                                    href="https://wa.me/919746102236"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-900/40 text-sm sm:text-base"
                                >
                                    <FaWhatsapp className="text-xl sm:text-2xl flex-shrink-0" />
                                    <span>Chat with us on WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl"
                        >
                            <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-slate-700 text-sm font-bold mb-2">Name</label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 md:px-5 md:py-4 text-navy focus:outline-none focus:ring-2 focus:ring-cobalt/20 text-sm md:text-base" placeholder="Your Name" required />
                                    </div>
                                    <div>
                                        <label className="block text-slate-700 text-sm font-bold mb-2">Email</label>
                                        <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 md:px-5 md:py-4 text-navy focus:outline-none focus:ring-2 focus:ring-cobalt/20 text-sm md:text-base" placeholder="name@email.com" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-slate-700 text-sm font-bold mb-2">Service</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 md:px-5 md:py-4 text-navy focus:outline-none focus:ring-2 focus:ring-cobalt/20 text-sm md:text-base" placeholder="Service Required" />
                                </div>
                                <div>
                                    <label className="block text-slate-700 text-sm font-bold mb-2">Message</label>
                                    <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 md:px-5 md:py-4 text-navy h-28 md:h-32 focus:outline-none focus:ring-2 focus:ring-cobalt/20 text-sm md:text-base" placeholder="Tell us about your project..." required></textarea>
                                </div>
                                <button type="submit" className="w-full bg-cobalt hover:bg-navy text-white font-bold py-4 md:py-5 rounded-xl shadow-xl shadow-cobalt/20 transition-all transform hover:-translate-y-1 text-sm md:text-base">
                                    Send Inquiry Now
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-16 md:mt-24 h-64 sm:h-80 md:h-96 w-full rounded-3xl overflow-hidden relative group shadow-2xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8!2d75.8704729!3d11.148629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba651903380cfef%3A0x8ce1dfe7c885556!2sAnas%20Steel%20Fab!5e0!3m2!1sen!2sin!4v1709148400000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Anas Steel Fab Location"
                    ></iframe>
                    {/* Transparent full-cover overlay — tap anywhere to open Maps */}
                    <a
                        href="https://maps.app.goo.gl/K3BPGzMMQv7QcM8L8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label="Open Anas Steel Fab in Google Maps"
                    />
                    {/* Open in Maps badge */}
                    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20 flex items-center gap-2 bg-white text-navy font-bold text-xs md:text-sm px-3 py-2 md:px-4 md:py-2 rounded-xl shadow-lg pointer-events-none">
                        <FaMapMarkerAlt />
                        Tap to open in Google Maps
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
