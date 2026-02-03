import { motion } from 'framer-motion';

function CTASection() {
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            className="cta-section section"
            id="cta"
            style={{
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(192, 132, 252, 0.05) 100%)',
                textAlign: 'center',
                padding: '80px 0'
            }}
        >
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '20px' }}
                >
                    Ready to Grow Your Business Online?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto 30px',
                        lineHeight: '1.7'
                    }}
                >
                    Let's build a powerful website or mobile app that brings you real customers.
                    Contact KAdigtech today and get a free consultation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <motion.a
                        href="#contact"
                        className="btn btn-primary"
                        onClick={(e) => handleNavClick(e, 'contact')}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ fontSize: '1.1rem', padding: '16px 40px' }}
                    >
                        <span style={{ marginRight: '10px' }}>📞</span>
                        Contact Us Now
                    </motion.a>
                    <motion.a
                        href="https://wa.me/917010585097"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ fontSize: '1.1rem', padding: '16px 40px' }}
                    >
                        <span style={{ marginRight: '10px' }}>💬</span>
                        WhatsApp Us
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

export default CTASection;
