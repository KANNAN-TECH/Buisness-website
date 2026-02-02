import { motion } from 'framer-motion';

function Testimonials() {
    const testimonials = [
        {
            name: 'Priya Sharma',
            role: 'Boutique Owner',
            content: 'KAdigtech transformed my small business with a stunning website. Sales increased by 40% in just 2 months!',
            rating: 5
        },
        {
            name: 'Rajesh Kumar',
            role: 'Restaurant Owner',
            content: 'The team delivered beyond expectations. Our online orders have doubled since the new website launch.',
            rating: 5
        },
        {
            name: 'Anitha Devi',
            role: 'Fitness Coach',
            content: 'Professional, responsive, and creative. They understood exactly what I needed for my fitness brand.',
            rating: 5
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

    // Card container
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    // Card animation
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                >
                    <motion.h2
                        className="section-title"
                        variants={titleVariants}
                    >
                        What Our Clients Say
                    </motion.h2>

                    <motion.p
                        className="section-subtitle"
                        variants={titleVariants}
                    >
                        Real results from real businesses we've helped grow
                    </motion.p>
                </motion.div>

                <motion.div
                    className="testimonials-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card glass-card"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.03,
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className="testimonial-rating"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: { staggerChildren: 0.1, delayChildren: 0.5 }
                                    }
                                }}
                            >
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.span
                                        key={i}
                                        className="star"
                                        variants={{
                                            hidden: { opacity: 0, scale: 0, rotate: -180 },
                                            visible: {
                                                opacity: 1,
                                                scale: 1,
                                                rotate: 0,
                                                transition: { type: "spring", stiffness: 300 }
                                            }
                                        }}
                                    >
                                        ⭐
                                    </motion.span>
                                ))}
                            </motion.div>
                            <p className="testimonial-content">"{testimonial.content}"</p>
                            <div className="testimonial-author">
                                <strong>{testimonial.name}</strong>
                                <span>{testimonial.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Testimonials;
