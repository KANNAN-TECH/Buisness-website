import { useState } from 'react';

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

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <h2 className="section-title">Let’s Talk About Your Project</h2>
                <p className="section-subtitle">
                    Have an idea or project in mind? Contact KAdigtech today and let’s build something amazing together.
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>
                            Have a project in mind? We'd love to hear about it.
                            Get in touch and let's create something amazing together.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-item-icon">📍</span>
                                <div>
                                    <strong>Address</strong>
                                    <p>Tiruvannamalai, Tamil Nadu, India</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <a href="mailto:kadigtech@gmail.com" className="contact-item-link">
                                    <span className="contact-item-icon">📧</span>
                                    <div>
                                        <strong>Email</strong>
                                        <p>kadigtech@gmail.com</p>
                                    </div>
                                </a>
                            </div>

                            <div className="contact-item">
                                <a href="tel:+917010585097" className="contact-item-link">
                                    <span className="contact-item-icon">📞</span>
                                    <div>
                                        <strong>Phone</strong>
                                        <p>+91 7010585097</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className={`form-group ${errors.name ? 'error' : ''}`}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <span className="form-error">{errors.name}</span>
                        </div>

                        <div className={`form-group ${errors.email ? 'error' : ''}`}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email Address"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <span className="form-error">{errors.email}</span>
                        </div>

                        <div className={`form-group ${errors.subject ? 'error' : ''}`}>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Project Subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <span className="form-error">{errors.subject}</span>
                        </div>

                        <div className={`form-group ${errors.message ? 'error' : ''}`}>
                            <textarea
                                name="message"
                                placeholder="Tell us about your project requirements"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <span className="form-error">{errors.message}</span>
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        <div className={`form-success ${isSubmitted ? 'show' : ''}`}>
                            ✅ Message sent successfully
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
