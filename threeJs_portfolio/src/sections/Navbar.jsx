import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='fixed top-0 left-0 w-full h-16 z-50 bg-black/90'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>Sahil</a>
                    
                    {/* Desktop menu */}
                    <nav className='hidden md:flex space-x-8'>
                        <a href="#projects" className='text-neutral-400 hover:text-white transition-colors'>Projects</a>
                        <a href="#about" className='text-neutral-400 hover:text-white transition-colors'>About Me</a>
                        <a href="#contact" className='text-neutral-400 hover:text-white transition-colors'>Contact</a>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className='md:hidden text-neutral-400 hover:text-white focus:outline-none'
                        onClick={toggleMenu}
                    >
                        <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                    </button>
                </div>

                {/* Mobile menu */}
                <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4`}>
                    <a href="#projects" className='block text-neutral-400 hover:text-white transition-colors py-2'>Projects</a>
                    <a href="#about" className='block text-neutral-400 hover:text-white transition-colors py-2'>About Me</a>
                    <a href="#contact" className='block text-neutral-400 hover:text-white transition-colors py-2'>Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;


