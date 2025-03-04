import { motion } from "framer-motion";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggler = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    sertIsDark(document.documentElement.classList.contains("dark"));
  };

  const [isDark, sertIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  return (
    <motion.span
      animate={{ rotate: isDark ? 100 : -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={toggleTheme}
      className="rounded-full text-3xl flex items-center overflow-hidden dark:text-mint text-gunmetal"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </motion.span>
  );
};

export default ThemeToggler;
