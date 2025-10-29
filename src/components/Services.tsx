import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import serviceWeb from "@/assets/service-web.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import serviceBrand from "@/assets/service-brand.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceContent from "@/assets/service-content.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";

const Services = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const services = [
    {
      number: "01",
      titleKey: "services.webDev.title",
      descriptionKey: "services.webDev.description",
      tags: ["React", "TypeScript", "Tailwind"],
      image: serviceWeb,
    },
    {
      number: "02",
      titleKey: "services.seo.title",
      descriptionKey: "services.seo.description",
      tags: ["SEO", "Analytics", "Growth"],
      image: serviceSeo,
    },
    {
      number: "03",
      titleKey: "services.branding.title",
      descriptionKey: "services.branding.description",
      tags: ["Design", "Branding", "Strategy"],
      image: serviceBrand,
    },
    {
      number: "04",
      titleKey: "services.marketing.title",
      descriptionKey: "services.marketing.description",
      tags: ["Marketing", "Ads", "Social"],
      image: serviceMarketing,
    },
    {
      number: "05",
      titleKey: "services.content.title",
      descriptionKey: "services.content.description",
      tags: ["Content", "Video", "Photography"],
      image: serviceContent,
    },
    {
      number: "06",
      titleKey: "services.ecommerce.title",
      descriptionKey: "services.ecommerce.description",
      tags: ["Shop", "Payment", "Management"],
      image: serviceEcommerce,
    },
  ];

  return (
    <section
      ref={ref}
      id="services"
      className="py-20 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            {t('services.subtitle')}
          </h2>
          <Button
            variant="outline"
            className="border-2 border-foreground hover:bg-foreground hover:text-background rounded-full px-8"
          >
            {t('services.cta')}
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => {
            const cardRef = useRef(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "end start"],
            });
            
            const y = useTransform(
              cardProgress,
              [0, 0.5, 1],
              [100, 0, -100]
            );
            
            const opacity = useTransform(
              cardProgress,
              [0, 0.3, 0.7, 1],
              [0, 1, 1, 0]
            );

            const rotateY = useTransform(
              cardProgress,
              [0, 0.5, 1],
              [-15, 0, 15]
            );

            return (
              <motion.div
                key={service.number}
                ref={cardRef}
                style={{ y, opacity, rotateY }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 60px -15px rgba(138, 179, 219, 0.5), 0 20px 60px -10px rgba(34, 45, 71, 0.8)"
                }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(34,45,71,0.8)] group"
              >
                {/* Service Image */}
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={service.image} 
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card" />
                </motion.div>

                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                  <motion.span 
                    className="text-6xl md:text-7xl font-bold text-accent/20"
                    whileHover={{ 
                      scale: 1.1, 
                      color: "rgba(138, 179, 219, 0.4)",
                      textShadow: "0 0 40px rgba(138, 179, 219, 0.6)"
                    }}
                  >
                    {service.number}
                  </motion.span>
                </div>
                
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  whileHover={{ x: 5, textShadow: "0 0 30px rgba(138, 179, 219, 0.4)" }}
                >
                  {t(service.titleKey)}
                </motion.h3>
                
                  <p className="text-muted-foreground text-lg mb-6">
                    {t(service.descriptionKey)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-4 py-2 bg-muted rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
