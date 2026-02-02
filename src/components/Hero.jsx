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
                    <span>Your Digital Growth Partner</span>
                </motion.div>

                {/* Line 2 - Main Big Heading */}
                <motion.h1
                    className="hero-title"
                    variants={itemVariants}
                >
                    <span className="title-word">Design.</span>
                    <span className="title-word highlight"> Develop.</span>
                    <span className="title-word"> Dominate.</span>
                </motion.h1>

                {/* Line 3 - Subtext */}
                <motion.p
                    className="hero-description"
                    variants={itemVariants}
                >
                    We build modern websites that grow your business online.
                </motion.p>

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
            </motion.div>
        </section>
    );
}

export default Hero;
