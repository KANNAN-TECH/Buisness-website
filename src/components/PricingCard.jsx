function PricingCard({ plan, price, description, features, featured = false, badge = '' }) {
    return (
        <div className={`pricing-card glass-card ${featured ? 'featured' : ''}`}>
            {badge && <div className="pricing-badge">{badge}</div>}
            <div className="pricing-plan">{plan}</div>
            <div className="pricing-price">
                {price}
            </div>
            <p className="pricing-description">{description}</p>

            <ul className="pricing-features">
                {features.map((feature, index) => (
                    <li key={index}>
                        <span className="check">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <a
                href={`https://wa.me/917010585097?text=${encodeURIComponent(`Hi KAdigtech, I am interested in the ${plan} package. Please share the complete details and pricing.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${featured ? 'btn-primary' : 'btn-secondary'}`}
            >
                Get Started
            </a>
        </div>
    );
}

export default PricingCard;
