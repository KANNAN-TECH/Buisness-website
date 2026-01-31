function About() {
    const stats = [
        { number: '50+', label: 'Projects' },
        { number: '15+', label: 'Happy Clients' },
        { number: '1+', label: 'Years Experience' }
    ];

    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="gradient-text">Who We Are</h2>
                        <p>
                            KAdigtech is a modern website design and web development company dedicated to helping startups, small businesses, and entrepreneurs build a powerful online presence. We specialize in creating professional, fast, and user-friendly websites that help businesses attract customers, increase trust, and grow digitally.
                        </p>
                        <p>
                            Our team focuses on clean design, high performance, and SEO optimization to ensure every website not only looks great but also ranks higher on search engines like Google. From simple business websites to advanced web applications and e-commerce platforms, we deliver reliable and scalable digital solutions tailored to your goals.
                        </p>
                        <p>
                            At KAdigtech, we don't just build websites — we build digital experiences that drive real business growth.
                        </p>

                        <div className="about-stats">
                            {stats.map((stat, index) => (
                                <div className="stat-item" key={index}>
                                    <span className="stat-number">{stat.number}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-visual">
                        <div className="about-card glass-card">
                            <div className="about-card-icon">🚀</div>
                            <h3>Our Mission</h3>
                            <p>
                                Our mission is to empower businesses with smart, modern, and result-driven website solutions that improve visibility, generate leads, and accelerate growth. We aim to provide affordable, high-quality web development services that help every business succeed online.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
