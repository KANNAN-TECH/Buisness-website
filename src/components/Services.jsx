import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Website Design',
      description: 'Modern UI/UX that converts visitors into customers'
    },
    {
      icon: '⚙️',
      title: 'Web Development',
      description: 'Fast, secure, and scalable web applications'
    },
    {
      icon: '🛒',
      title: 'E-Commerce',
      description: 'Complete online stores with payment integration'
    },
    {
      icon: '🚀',
      title: 'SEO Optimization',
      description: 'Rank higher and drive organic traffic'
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
            Powerful Digital Solutions for Modern Businesses
          </motion.h2>

          <motion.p
            className="section-subtitle"
            variants={titleVariants}
          >
            Everything you need to launch and scale online.
          </motion.p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
