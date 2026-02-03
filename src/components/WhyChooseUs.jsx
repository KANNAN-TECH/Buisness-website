import { motion } from 'framer-motion';

function WhyChooseUs() {
    const reasons = [
        { icon: '⚡', text: 'Fast loading websites (90+ Lighthouse score)' },
        { icon: '🔍', text: 'SEO optimized structure' },
        { icon: '📱', text: 'Mobile-first design' },
        { icon: '🔒', text: 'Secure backend architecture' },
        { icon: '💰', text: 'Affordable pricing' },
        { icon: '🎧', text: 'Dedicated support' },
        { icon: '🛠️', text: 'Custom solutions for every business' }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section className="why-choose-us section" id="why-choose-us" style={{ background: 'var(--bg-dark)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Why Choose KAdigtech
                </motion.h2>

                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    We deliver results that help your business grow online.
                </motion.p>

                <motion.div
                    className="reasons-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '20px',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}
                >
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass-card"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                padding: '20px 25px',
                                cursor: 'default'
                            }}
                            whileHover={{ scale: 1.02, x: 5 }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>{reason.icon}</span>
                            <span style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1rem',
                                fontWeight: '500'
                            }}>
                                {reason.text}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
