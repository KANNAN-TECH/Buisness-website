import { motion } from 'framer-motion';

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      className="service-card glass-card"
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="service-icon"
        whileHover={{
          scale: 1.2,
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.4 }
        }}
      >
        {icon}
      </motion.div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </motion.div>
  );
}

export default ServiceCard;
