import { motion } from 'framer-motion';

function Hero() {
    // Container for stagger children
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.3
            }
        }
    };

    // Individual item animation - slide up reveal
    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    // Floating shapes animation
    const shapeVariants = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" id="hero">
            {/* Animated background shapes */}
            <div className="hero-shapes">
                <motion.div
                    className="hero-shape hero-shape-1"
                    variants={shapeVariants}
                    animate="animate"
                />
                <motion.div
                    className="hero-shape hero-shape-2"
                    variants={shapeVariants}
                    animate="animate"
                    style={{ animationDelay: '2s' }}
                />
                <motion.div
                    className="hero-shape hero-shape-3"
                    variants={shapeVariants}
                    animate="animate"
                    style={{ animationDelay: '4s' }}
                />
            </div>

            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* Line 1 - Small Tag */}
                <motion.div
                    className="hero-badge"
                    variants={itemVariants}
                >
                    <span className="badge-icon">🚀</span>
                    <span>Professional Web & App Development</span>
                </motion.div>

                {/* Line 2 - Main Big Heading */}
                <motion.h1
                    className="hero-title"
                    variants={itemVariants}
                >
                    <span className="title-word">KAdigtech – </span>
                    <span className="title-word highlight">Professional</span>
                    <span className="title-word"> Web & App Development Company</span>
                </motion.h1>

                {/* Line 3 - Subtext */}
                <motion.p
                    className="hero-description"
                    variants={itemVariants}
                >
                    We design high-performance websites and mobile applications that help businesses grow faster online.
                    From modern UI design to powerful backend systems, we deliver complete digital solutions that convert visitors into customers.
                </motion.p>

                {/* Feature Checkmarks */}
                <motion.div
                    className="hero-features"
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '15px',
                        justifyContent: 'center',
                        marginBottom: '30px'
                    }}
                >
                    {['Business Websites', 'E-Commerce Platforms', 'Mobile Apps', 'Custom Software Solutions'].map((feature, index) => (
                        <span
                            key={index}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                background: 'rgba(124, 58, 237, 0.1)',
                                border: '1px solid rgba(124, 58, 237, 0.3)',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)'
                            }}
                        >
                            <span style={{ color: '#22c55e' }}>✓</span>
                            {feature}
                        </span>
                    ))}
                </motion.div>

                {/* Line 4 - Buttons */}
                <motion.div
                    className="hero-buttons"
                    variants={itemVariants}
                >
                    <motion.a
                        href="#contact"
                        className="btn btn-primary"
                        onClick={(e) => handleNavClick(e, 'contact')}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="btn-icon">💬</span>
                        Get Free Quote
                    </motion.a>
                    <motion.a
                        href="#pricing"
                        className="btn btn-secondary"
                        onClick={(e) => handleNavClick(e, 'pricing')}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="btn-icon">💎</span>
                        View Pricing
                    </motion.a>
                </motion.div>

                {/* CTA Text */}
                <motion.p
                    variants={itemVariants}
                    style={{
                        marginTop: '20px',
                        fontSize: '0.95rem',
                        color: 'var(--text-muted)'
                    }}
                >
                    Start your digital journey with KAdigtech today.
                </motion.p>
            </motion.div>
        </section>
    );
}

export default Hero;
