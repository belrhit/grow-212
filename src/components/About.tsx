import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import aboutPattern from "@/assets/about-pattern.jpg";
import teamCollab from "@/assets/team-collab.jpg";
import techPattern from "@/assets/tech-pattern.jpg";

const About = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 md:py-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative Background Pattern */}
      <motion.div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none"
        style={{ scale, opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]) }}
      >
        <img 
          src={aboutPattern} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Additional Decorative Images */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-0 top-1/4 w-64 h-64 rounded-2xl overflow-hidden opacity-20 hidden lg:block"
      >
        <img src={techPattern} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div
        style={{ scale, opacity, rotateX }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-12 leading-tight"
          style={{ textShadow: "0 0 40px rgba(138, 179, 219, 0.2)" }}
        >
          {t('about.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
        >
          {t('about.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: t('about.mission'), value: t('about.missionText') },
            { label: t('about.vision'), value: t('about.visionText') },
            { label: t('about.values'), value: t('about.valuesText') },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 60px -10px rgba(138, 179, 219, 0.3)",
                textShadow: "0 0 20px rgba(138, 179, 219, 0.5)"
              }}
              className="border-t-2 border-accent pt-4 cursor-pointer"
            >
              <motion.p 
                className="text-sm text-accent mb-2 uppercase"
                whileHover={{ x: 5 }}
              >
                {item.label}
              </motion.p>
              <p className="text-xl md:text-2xl font-semibold">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-elegant"
        >
          <img 
            src={teamCollab} 
            alt="Team collaboration" 
            className="w-full h-96 object-cover opacity-80"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
