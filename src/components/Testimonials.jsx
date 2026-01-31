import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Arun Kumar",
            role: "Startup Founder",
            content: "KAdigtech delivered our business website faster than expected. The design is modern and professional, and we started getting leads within weeks. Highly recommended!",
            rating: 5
        },
        {
            name: "Priya Sharma",
            role: "Small Business Owner",
            content: "Very responsive team and excellent support. They understood our requirements perfectly and built exactly what we needed. Great experience working with them.",
            rating: 5
        },
        {
            name: "Rahul Mehta",
            role: "E-Commerce Store Owner",
            content: "Our website performance improved a lot after their optimization. Clean design, fast loading, and SEO friendly. Worth every rupee.",
            rating: 5
        }
    ];

    return (
        <section className="section testimonials" id="testimonials">
            <div className="container">
                <h2 className="section-title">What Our Clients Say</h2>
                <p className="section-subtitle">
                    Trusted by startups and businesses across India
                </p>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="glass-card testimonial-card animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="testimonial-top">
                                <div className="star-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <Quote className="quote-icon" size={24} style={{ opacity: 0.2, marginBottom: '15px' }} />
                                <p className="testimonial-content">
                                    "{testimonial.content}"
                                </p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
