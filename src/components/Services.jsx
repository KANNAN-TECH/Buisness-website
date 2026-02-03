import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom business websites, landing pages, portfolio sites, and e-commerce platforms built for speed and conversions.'
    },
    {
      icon: '📱',
      title: 'App Development',
      description: 'Android and cross-platform mobile applications with smooth performance and modern UI.'
    },
    {
      icon: '⚙️',
      title: 'Full Stack Development',
      description: 'Complete frontend and backend solutions using React, Java Spring Boot, and PostgreSQL.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Clean, user-friendly designs that improve engagement and customer experience.'
    },
    {
      icon: '🚀',
      title: 'Website Optimization & SEO',
      description: 'Speed optimization, technical SEO, and ranking improvements to get your business on top of Google.'
    },
    {
      icon: '🛒',
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and secure checkout.'
    }
  ];

  // Container with stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Card animation - pop effect
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Title animation
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="services section" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <motion.h2
            className="section-title"
            variants={titleVariants}
          >
            Our Services
          </motion.h2>

          <motion.p
            className="section-subtitle"
            variants={titleVariants}
          >
            Powerful digital solutions for modern businesses. Everything you need to launch and scale online.
          </motion.p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
