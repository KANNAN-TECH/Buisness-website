import { motion } from 'framer-motion';

function About() {
    const stats = [
        { number: '50+', label: 'Projects Completed' },
        { number: '40+', label: 'Happy Clients' },
        { number: '2+', label: 'Years Experience' },
        { number: '100%', label: 'Client Satisfaction' }
    ];

    // Title animation
    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Stats animation
    const statsContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const statItemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="about section" id="about">
            <div className="container">
                <motion.div
                    className="about-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.div className="about-text" variants={titleVariants}>
                        <h2 className="section-title">Why Choose KAdigtech?</h2>
                        <p>
                            We're a passionate team dedicated to creating beautiful,
                            functional websites that help businesses grow online.
                            Our focus is on delivering quality work that exceeds expectations.
                        </p>
                        <p>
                            From simple landing pages to complex web applications,
                            we have the expertise to bring your vision to life.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-stats"
                        variants={statsContainerVariants}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-item"
                                variants={statItemVariants}
                                whileHover={{
                                    scale: 1.1,
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.span
                                    className="stat-number"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                                    viewport={{ once: true }}
                                >
                                    {stat.number}
                                </motion.span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="about-mission glass-card"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                >
                    <motion.div
                        className="mission-icon"
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        🎯
                    </motion.div>
                    <h3>Our Mission</h3>
                    <p>
                        To empower businesses with professional web presence that drives
                        growth and success in the digital world. We believe every business
                        deserves a website that works as hard as they do.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
