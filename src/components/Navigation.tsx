import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";
import logoLight from "@/assets/logo-light.png";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
      <img 
  src={theme === 'dark' ? logo : logoLight} 
  alt="212 Grow" 
  className="h-20 md:h-24" 
/>


        </motion.div>

        <div className="hidden md:flex items-center gap-8">
  <a href="#home" className="text-foreground font-bold hover:text-accent transition-colors">
    {t('nav.home')}
  </a>
  <a href="#services" className="text-foreground font-bold hover:text-accent transition-colors">
    {t('nav.services')}
  </a>
  <a href="#about" className="text-foreground font-bold hover:text-accent transition-colors">
    {t('nav.about')}
  </a>
  <a href="#contact" className="text-foreground font-bold hover:text-accent transition-colors">
    {t('nav.contact')}
  </a>
</div>


        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-muted hover:bg-accent transition-colors flex items-center gap-2"
          >
            <Languages className="h-5 w-5" />
            <span className="text-sm font-semibold">{i18n.language.toUpperCase()}</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.button>
          
          <Button 
            variant="outline" 
            className="border-2 border-foreground hover:bg-foreground hover:text-background rounded-full px-6"
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;