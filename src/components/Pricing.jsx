import PricingCard from './PricingCard';

function Pricing() {
    const plans = [
        {
            plan: 'Starter Website',
            price: '₹4,999',
            description: 'Perfect for individuals, freelancers, and small startups who need a simple online presence.',
            features: [
                '1 Page Website',
                'Modern Responsive Design',
                'Contact Form',
                'Basic SEO Setup',
                'WhatsApp Integration',
                '2 Days Delivery',
                'Free Support (7 Days)'
            ],
            featured: false
        },
        {
            plan: 'Business Website',
            price: '₹9,999',
            description: 'Ideal for small businesses and companies looking for a professional multi-page website.',
            features: [
                'Up to 5 Pages',
                'Custom UI/UX Design',
                'Mobile & SEO Optimized',
                'Admin Panel',
                'WhatsApp + Social Integration',
                'Speed Optimization',
                '5 Days Delivery',
                'Free Support (15 Days)'
            ],
            featured: true,
            badge: 'Most Popular'
        },
        {
            plan: 'Premium Pro Website',
            price: '₹19,999',
            description: 'Complete solution for growing businesses and brands that need advanced features and scalability.',
            features: [
                'Unlimited Pages',
                'Fully Custom Design',
                'E-Commerce or Payment Integration',
                'Advanced SEO Optimization',
                'Blog or CMS Setup',
                'Hosting & Domain Setup Support',
                'Performance Optimization',
                '1 Month Free Support',
                'Priority Delivery'
            ],
            featured: false,
            badge: 'Best Value'
        }
    ];

    return (
        <section className="pricing section" id="pricing">
            <div className="container">
                <h2 className="section-title">Affordable Website Plans</h2>
                <p className="section-subtitle">
                    Simple pricing for startups and growing businesses.
                </p>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            plan={plan.plan}
                            price={plan.price}
                            description={plan.description}
                            features={plan.features}
                            featured={plan.featured}
                            badge={plan.badge}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;
