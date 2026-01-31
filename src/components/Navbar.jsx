import { useState, useEffect } from 'react';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Home', id: 'hero' },
        { name: 'Services', id: 'services' },
        { name: 'About', id: 'about' },
        { name: 'Pricing', id: 'pricing' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="navbar-brand">KAdigtech</a>

                <ul className={`navbar-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={(e) => handleNavClick(e, link.id)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
