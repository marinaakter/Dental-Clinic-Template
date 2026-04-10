import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { clientInfo } from "../config/clientData";

export const ContactStrip = () => {
  return (
    <section className="py-16 bg-pearl" data-testid="contact-strip">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-xs uppercase tracking-widest text-gold mb-4 block">
              {clientInfo.contactStrip.eyebrow}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy mb-8">
              {clientInfo.contactStrip.titlePrefix} <span className="text-gold">{clientInfo.contactStrip.titleAccent}</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-navy mb-1">{clientInfo.contactStrip.addressTitle}</h4>
                  <p className="font-body text-navy/70">
                    {clientInfo.brand.addressLines[0]}<br />
                    {clientInfo.brand.addressLines[1]}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-navy mb-1">{clientInfo.contactStrip.phoneTitle}</h4>
                  <a href={clientInfo.brand.phoneHref} className="font-body text-navy/70 hover:text-gold transition-colors">
                    {clientInfo.brand.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-navy mb-1">{clientInfo.contactStrip.emailTitle}</h4>
                  <a href={clientInfo.brand.emailHref} className="font-body text-navy/70 hover:text-gold transition-colors">
                    {clientInfo.brand.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-navy mb-1">{clientInfo.contactStrip.hoursTitle}</h4>
                  <p className="font-body text-navy/70">
                    {clientInfo.brand.workingHours.fullWeekdays}: {clientInfo.brand.workingHours.fullWeekdayHours}<br />
                    {clientInfo.brand.workingHours.friday}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gold/10"
          >
            <iframe
              src={clientInfo.brand.map.src}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={clientInfo.contactStrip.map.title}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
