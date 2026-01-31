function Hero() {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" id="hero">
            <div className="hero-shapes">
                <div className="hero-shape hero-shape-1"></div>
                <div className="hero-shape hero-shape-2"></div>
                <div className="hero-shape hero-shape-3"></div>
            </div>

            <div className="hero-content">
                <div className="hero-badge">
                    🚀 Your Digital Growth Partner
                </div>

                <h1 className="hero-title">
                    Modern Website <span>Design & Development</span>
                </h1>

                <p className="hero-description">
                    We build modern websites that grow your business online.
                </p>

                <div className="hero-buttons">
                    <a
                        href="#contact"
                        className="btn btn-primary"
                        onClick={(e) => handleScroll(e, 'contact')}
                    >
                        Get Free Quote
                    </a>
                    <a
                        href="#pricing"
                        className="btn btn-secondary"
                        onClick={(e) => handleScroll(e, 'pricing')}
                    >
                        View Pricing
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
