import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              {t('contact.description')}
            </p>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 0 30px rgba(138, 179, 219, 0.5)",
                    backgroundColor: "rgba(138, 179, 219, 0.3)"
                  }}
                >
                  <Phone className="h-5 w-5 text-accent" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('contact.phone')}</p>
                  <p className="text-lg font-semibold">+(212) 621-036713</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 0 30px rgba(138, 179, 219, 0.5)",
                    backgroundColor: "rgba(138, 179, 219, 0.3)"
                  }}
                >
                  <Mail className="h-5 w-5 text-accent" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('contact.email')}</p>
                  <p className="text-lg font-semibold">contact@grow-212.com</p>
                </div>
              </motion.div>

              <div className="flex gap-4 pt-8">
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="https://www.instagram.com/grow212.ma/"
                  className="h-12 w-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="https://www.linkedin.com/company/grow-212/?viewAsMember=true"
                  className="h-12 w-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Contact Form with Formspree */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-[0_20px_60px_-10px_rgba(34,45,71,0.8)]"
          >
            <form
              action="https://formspree.io/f/xblpyjrw" 
              method="POST"
              className="space-y-6"
            >
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name')}
                  className="bg-background border-border h-14 text-lg"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email')}
                  className="bg-background border-border h-14 text-lg"
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder={t('contact.form.subject')}
                  className="bg-background border-border h-14 text-lg"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder={t('contact.form.message')}
                  className="bg-background border-border min-h-32 text-lg resize-none"
                  required
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full h-14 text-lg rounded-full bg-foreground text-background hover:bg-accent hover:text-foreground shadow-[0_0_60px_-15px_rgba(138,179,219,0.5)]"
                >
                  {t('contact.form.send')}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
