import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 180, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? 0 : 360,
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="theme-icon-wrapper"
            >
                {isDark ? (
                    <Moon size={20} className="theme-icon moon" />
                ) : (
                    <Sun size={20} className="theme-icon sun" />
                )}
            </motion.div>
        </motion.button>
    );
}

export default ThemeToggle;
