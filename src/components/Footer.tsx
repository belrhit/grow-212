import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img src={logo} alt="212 Grow" className="h-10" />
          </motion.div>

          <p className="text-muted-foreground">
            © 2025 Grow-212. {t('footer.rights')}
          </p>

          <div className="flex gap-6">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
