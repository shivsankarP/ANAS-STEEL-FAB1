import React from 'react';

const Footer = () => {
    return (
        <footer className="py-10 md:py-12 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <div className="flex items-center">
                        <span className="font-ethnocentric text-sm md:text-xl tracking-wide flex items-center text-navy">
                            ANAS&nbsp;<span className="text-cobalt">STEEL</span>&nbsp;FAB
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-500">
                        <a href="#" className="hover:text-cobalt transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-cobalt transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-cobalt transition-colors">Cookie Settings</a>
                    </div>

                    <div className="text-slate-400 text-xs sm:text-sm text-center md:text-right">
                        © {new Date().getFullYear()} ANAS STEEL FAB. Built to Last.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
