import { motion } from 'framer-motion';

function AnimatedCard({
    children,
    delay = 0,
    className = '',
    hoverScale = 1.05,
    tapScale = 0.98
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            whileHover={{
                scale: hoverScale,
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: tapScale }}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedCard;
