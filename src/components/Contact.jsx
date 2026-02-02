import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            try {
                const response = await fetch('https://formspree.io/f/mgoyberp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    setIsSubmitted(true);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setTimeout(() => setIsSubmitted(false), 5000);
                } else {
                    alert('Something went wrong. Please try again.');
                }
            } catch (error) {
                console.error('Submission error:', error);
                alert('Failed to send message. Please check your internet connection.');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const formFieldVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
            }
        })
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <AnimatedSection variant="fadeUp" delay={0}>
                    <h2 className="section-title">Let's Build Something Amazing Together</h2>
                </AnimatedSection>

                <AnimatedSection variant="fadeUp" delay={0.1}>
                    <p className="section-subtitle">
                        Tell us your idea. We'll handle the rest.
                    </p>
                </AnimatedSection>

                <div className="contact-content">
                    <AnimatedSection variant="fadeLeft" delay={0.2} className="contact-info">
                        <h3>Get In Touch</h3>
                        <p>
                            Ready to start your project? Drop us a message and
                            let's create something amazing together.
                        </p>

                        <div className="contact-details">
                            <motion.div
                                className="contact-item"
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <span className="contact-item-icon">📍</span>
                                <div>
                                    <strong>Address</strong>
                                    <p>Tiruvannamalai, Tamil Nadu, India</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="contact-item"
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <a href="mailto:kadigtech@gmail.com" className="contact-item-link">
                                    <span className="contact-item-icon">📧</span>
                                    <div>
                                        <strong>Email</strong>
                                        <p>kadigtech@gmail.com</p>
                                    </div>
                                </a>
                            </motion.div>

                            <motion.div
                                className="contact-item"
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <a href="tel:+917010585097" className="contact-item-link">
                                    <span className="contact-item-icon">📞</span>
                                    <div>
                                        <strong>Phone</strong>
                                        <p>+91 7010585097</p>
                                    </div>
                                </a>
                            </motion.div>
                        </div>
                    </AnimatedSection>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div
                            className={`form-group ${errors.name ? 'error' : ''}`}
                            custom={0}
                            variants={formFieldVariants}
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <span className="form-error">{errors.name}</span>
                        </motion.div>

                        <motion.div
                            className={`form-group ${errors.email ? 'error' : ''}`}
                            custom={1}
                            variants={formFieldVariants}
                        >
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email Address"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <span className="form-error">{errors.email}</span>
                        </motion.div>

                        <motion.div
                            className={`form-group ${errors.subject ? 'error' : ''}`}
                            custom={2}
                            variants={formFieldVariants}
                        >
                            <input
                                type="text"
                                name="subject"
                                placeholder="Project Subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <span className="form-error">{errors.subject}</span>
                        </motion.div>

                        <motion.div
                            className={`form-group ${errors.message ? 'error' : ''}`}
                            custom={3}
                            variants={formFieldVariants}
                        >
                            <textarea
                                name="message"
                                placeholder="Tell us about your project requirements"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <span className="form-error">{errors.message}</span>
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                            custom={4}
                            variants={formFieldVariants}
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {isSubmitting ? (
                                <motion.span
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    Sending...
                                </motion.span>
                            ) : (
                                'Send Message'
                            )}
                        </motion.button>

                        <motion.div
                            className={`form-success ${isSubmitted ? 'show' : ''}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isSubmitted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            ✅ Message sent successfully
                        </motion.div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
