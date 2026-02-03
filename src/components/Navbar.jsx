import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [hoveredLink, setHoveredLink] = useState(null);
    const [showMegaMenu, setShowMegaMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['hero', 'services', 'about', 'pricing', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
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
            setActiveSection(targetId);
        }
    };

    const navLinks = [
        { name: 'Home', id: 'hero', icon: '🏠' },
        { name: 'Services', id: 'services', icon: '⚙️', hasMegaMenu: true },
        { name: 'About', id: 'about', icon: '👤' },
        { name: 'Pricing', id: 'pricing', icon: '💎' },
        { name: 'Contact', id: 'contact', icon: '📧' },
    ];

    const megaMenuItems = [
        { icon: '💻', title: 'Website Design', desc: 'Modern UI/UX' },
        { icon: '⚙️', title: 'Web Development', desc: 'React & Spring Boot' },
        { icon: '🛒', title: 'E-Commerce', desc: 'Online Stores' },
        { icon: '🚀', title: 'SEO Optimization', desc: 'Rank Higher' },
    ];

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'scrolled glass-navbar' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div className="container">
                <motion.a
                    href="#"
                    className="navbar-brand"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    KAdigtech
                </motion.a>

                <ul className={`navbar-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.id}
                            className="nav-item"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.4 }}
                            onMouseEnter={() => {
                                setHoveredLink(link.id);
                                if (link.hasMegaMenu) setShowMegaMenu(true);
                            }}
                            onMouseLeave={() => {
                                setHoveredLink(null);
                                if (link.hasMegaMenu) setShowMegaMenu(false);
                            }}
                        >
                            <motion.a
                                href={`#${link.id}`}
                                onClick={(e) => handleNavClick(e, link.id)}
                                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* Active pill background */}
                                {activeSection === link.id && (
                                    <motion.span
                                        layoutId="active-pill"
                                        className="active-pill"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}

                                {/* Icon + Text with hover effect */}
                                <span className="nav-link-content">
                                    <motion.span
                                        className="nav-icon"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{
                                            opacity: hoveredLink === link.id ? 1 : 0,
                                            scale: hoveredLink === link.id ? 1 : 0
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {link.icon}
                                    </motion.span>

                                    {/* Slide down text reveal */}
                                    <motion.span
                                        className="nav-text"
                                        animate={{
                                            y: hoveredLink === link.id ? 0 : 0,
                                            color: hoveredLink === link.id ? 'var(--primary)' : 'inherit'
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {link.name}
                                    </motion.span>
                                </span>

                                {/* Underline grow animation */}
                                <motion.span
                                    className="nav-underline"
                                    initial={{ scaleX: 0 }}
                                    animate={{
                                        scaleX: hoveredLink === link.id || activeSection === link.id ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                            </motion.a>

                            {/* Mega Menu for Services */}
                            {link.hasMegaMenu && (
                                <AnimatePresence>
                                    {showMegaMenu && (
                                        <motion.div
                                            className="mega-menu"
                                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.25, ease: "easeOut" }}
                                        >
                                            <div className="mega-menu-grid">
                                                {megaMenuItems.map((item, i) => (
                                                    <motion.a
                                                        key={i}
                                                        href="#services"
                                                        className="mega-menu-item"
                                                        onClick={(e) => handleNavClick(e, 'services')}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        whileHover={{ scale: 1.02, x: 5 }}
                                                    >
                                                        <span className="mega-icon">{item.icon}</span>
                                                        <div className="mega-content">
                                                            <span className="mega-title">{item.title}</span>
                                                            <span className="mega-desc">{item.desc}</span>
                                                        </div>
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </motion.li>
                    ))}
                </ul>

                <div className="navbar-actions">
                    <ThemeToggle />

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
            </div>
        </motion.nav>
    );
}

export default Navbar;
