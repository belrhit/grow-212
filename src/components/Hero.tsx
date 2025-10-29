import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";
import officeHero from "@/assets/office-hero.jpg";
import { useTheme } from "next-themes";

const AnimatedText = ({ children, delay = 0 }: { children: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const words = children.split(" ");
  
  return (
    <span ref={ref} style={{ display: "inline-block" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.1,
            ease: [0.215, 0.610, 0.355, 1.000]
          }}
          style={{ 
            display: "inline-block", 
            marginRight: "0.25em",
            textShadow: "0 0 30px rgba(138, 179, 219, 0.3)"
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { theme } = useTheme();
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 md:px-12 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: theme === 'dark' ? `url(${heroBg})` : `url(${officeHero})`,
            filter: theme === 'dark' ? "brightness(0.3) blur(0px)" : "brightness(0.5) blur(0px)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </motion.div>
      <motion.div
        style={{ scale }}
        className="max-w-7xl w-full relative z-10"
      >
        <div className="space-y-8">
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
              <AnimatedText delay={0.2}>{t('hero.title1')}</AnimatedText>
            </h1>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, rotate: 5, boxShadow: "0 0 60px -15px rgba(138, 179, 219, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="rounded-full h-32 w-32 md:h-44 md:w-44 text-base md:text-2xl font-semibold bg-foreground text-background hover:bg-accent hover:text-foreground shadow-[0_0_60px_-15px_rgba(138,179,219,0.5)]"
              >
                {t('hero.button')}
              </Button>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
              <AnimatedText delay={0.5}>{t('hero.title2')}</AnimatedText>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl"
          >
            {t('hero.description')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 md:mt-24 flex flex-col md:flex-row gap-8 md:gap-16 text-sm"
        >
          <motion.div
            whileHover={{ y: -5, textShadow: "0 0 20px rgba(138, 179, 219, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-muted-foreground mb-2">{t('hero.phone')}</p>
            <p className="text-lg md:text-xl font-semibold">+(212) 621-036713</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5, textShadow: "0 0 20px rgba(138, 179, 219, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-muted-foreground mb-2">{t('hero.email')}</p>
            <p className="text-lg md:text-xl font-semibold">contact@grow-212.com</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
