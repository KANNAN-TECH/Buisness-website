import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

function Pricing() {
    const plans = [
        {
            plan: 'Starter',
            price: '₹4,999',
            description: 'Perfect for personal websites',
            features: [
                '3 Page Website',
                'Mobile Responsive',
                'Contact Form',
                'Social Media Links',
                '1 Round Revision',
                '3 Days Delivery'
            ],
            featured: false,
            animDirection: 'left'
        },
        {
            plan: 'Business',
            price: '₹9,999',
            description: 'Best for growing businesses',
            features: [
                '5+ Page Website',
                'Mobile Responsive',
                'Contact Form + Email',
                'SEO Optimization',
                'WhatsApp Integration',
                '2 Rounds Revision',
                '5 Days Delivery'
            ],
            featured: true,
            badge: '⭐ Most Popular',
            animDirection: 'center'
        },
        {
            plan: 'Premium Pro',
            price: '₹19,999',
            description: 'Complete business solution',
            features: [
                '10+ Page Website',
                'Admin Dashboard',
                'E-Commerce Ready',
                'Advanced SEO',
                'Payment Integration',
                'Unlimited Revisions',
                '7-10 Days Delivery',
                '3 Months Support'
            ],
            featured: false,
            animDirection: 'right'
        }
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

    // Card animations based on position
    const getCardVariants = (direction) => ({
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -80 : direction === 'right' ? 80 : 0,
            y: direction === 'center' ? 60 : 0,
            scale: direction === 'center' ? 0.8 : 0.95
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
                delay: direction === 'center' ? 0.2 : 0
            }
        }
    });

    return (
        <section className="pricing section" id="pricing">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                >
                    <motion.h2
                        className="section-title"
                        variants={titleVariants}
                    >
                        Simple & Transparent Pricing
                    </motion.h2>

                    <motion.p
                        className="section-subtitle"
                        variants={titleVariants}
                    >
                        Choose the perfect plan for your business needs
                    </motion.p>
                </motion.div>

                <motion.div
                    className="pricing-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={getCardVariants(plan.animDirection)}
                            className="pricing-card-wrapper"
                        >
                            <PricingCard
                                plan={plan.plan}
                                price={plan.price}
                                description={plan.description}
                                features={plan.features}
                                featured={plan.featured}
                                badge={plan.badge}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Pricing;
