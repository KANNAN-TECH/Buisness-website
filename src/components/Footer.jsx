import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' }
    ];

    const services = [
        'Website Design',
        'Web Development',
        'E-Commerce Solutions',
        'SEO Optimization',
        'Website Maintenance'
    ];

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <motion.div
                    className="footer-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="footer-brand" variants={itemVariants}>
                        <h3>KAdigtech</h3>
                        <p>
                            Transforming ideas into powerful digital experiences.
                            We design and develop modern, fast, and SEO-optimized websites
                            that help businesses grow online.
                        </p>
                        <div className="footer-social">
                            <motion.a
                                href="https://www.instagram.com/kadigtech?igsh=YTd3b2gzYzJjdGk2"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg viewBox="0 0 448 512" width="20" height="20">
                                    <defs>
                                        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#FFDC80" />
                                            <stop offset="25%" stopColor="#F77737" />
                                            <stop offset="50%" stopColor="#E1306C" />
                                            <stop offset="75%" stopColor="#C13584" />
                                            <stop offset="100%" stopColor="#833AB4" />
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#instagram-gradient)" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="http://www.linkedin.com/in/mass-kannan4"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg viewBox="0 0 448 512" width="20" height="20" fill="#0A66C2">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://x.com/KAdigtech?t=w3Y71yFx68nWsJgLHAyijA&s=09"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://www.facebook.com/share/18q2HdmaV4/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg viewBox="0 0 512 512" width="20" height="20" fill="#1877F2">
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.75l-11 71.69h-57.75V501C413.31 482.38 504 379.78 504 256z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://youtube.com/@kadigtech?si=cjpZ39lucnqDgntJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg viewBox="0 0 576 512" width="20" height="20" fill="#FF0000">
                                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.781 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div className="footer-links" variants={itemVariants}>
                        <h4>Quick Links</h4>
                        <ul>
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div className="footer-links" variants={itemVariants}>
                        <h4>Services</h4>
                        <ul>
                            {services.map((service, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>{service}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div className="footer-links" variants={itemVariants}>
                        <h4>Contact</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <span className="footer-contact-icon">📍</span>
                                <span>Tiruvannamalai, Tamil Nadu, India</span>
                            </li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                <a href="mailto:kadigtech@gmail.com">
                                    <span className="footer-contact-icon">📧</span>
                                    <span>kadigtech@gmail.com</span>
                                </a>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                <a href="tel:+917010585097">
                                    <span className="footer-contact-icon">📞</span>
                                    <span>+91 7010585097</span>
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>© {currentYear} KAdigtech. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;
