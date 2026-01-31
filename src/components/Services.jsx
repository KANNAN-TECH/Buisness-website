import ServiceCard from './ServiceCard';

function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Website Design',
      description: 'We design clean, modern, and user-friendly websites that create a strong first impression and build trust with your customers.'
    },
    {
      icon: '⚙️',
      title: 'Web Development',
      description: 'We develop fast, secure, and scalable websites using the latest technologies like React and Spring Boot to ensure high performance and reliability.'
    },
    {
      icon: '🛒',
      title: 'E-Commerce Development',
      description: 'We build powerful online stores with product management, secure payments, shopping carts, and order tracking to help you sell your products online.'
    },
    {
      icon: '🚀',
      title: 'SEO & Optimization',
      description: 'We optimize your website structure, speed, and content to rank higher on search engines and bring more organic traffic to your business.'
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Complete website solutions to grow your business online
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
