import { motion } from 'framer-motion';

function PricingCard({ plan, price, description, features, featured = false, badge = '' }) {
    return (
        <motion.div
            className={`pricing-card glass-card ${featured ? 'featured' : ''}`}
            whileHover={{
                scale: featured ? 1.03 : 1.05,
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
        >
            {badge && (
                <motion.div
                    className="pricing-badge"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                >
                    {badge}
                </motion.div>
            )}

            <div className="pricing-header">
                <h3 className="pricing-plan">{plan}</h3>
                <p className="pricing-description">{description}</p>
            </div>

            <motion.div
                className="pricing-price"
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            >
                {price}
            </motion.div>

            <ul className="pricing-features">
                {features.map((feature, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <span className="check">✓</span>
                        {feature}
                    </motion.li>
                ))}
            </ul>

            <motion.a
                href="#contact"
                className="btn btn-primary pricing-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Get Started
            </motion.a>
        </motion.div>
    );
}

export default PricingCard;
