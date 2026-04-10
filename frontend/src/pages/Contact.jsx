import { motion } from "framer-motion";
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { clientInfo } from "../config/clientData";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error(clientInfo.contactPage.form.validationError);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Save to localStorage
    const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    contacts.push({
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success(clientInfo.contactPage.form.successToast);
  };

  const resetForm = () => {
    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-pearl" data-testid="contact-page">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="font-body text-xs uppercase tracking-widest text-gold mb-4 block">
                {clientInfo.contactPage.hero.eyebrow}
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy leading-tight mb-6">
                {clientInfo.contactPage.hero.titlePrefix} <span className="text-gold">{clientInfo.contactPage.hero.titleAccent}</span>
              </h1>
              <p className="font-body text-navy/70 text-base md:text-lg leading-relaxed">
                {clientInfo.contactPage.hero.description}
              </p>
              <div className="w-24 h-1 bg-gold mx-auto mt-8" />
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {isSubmitted ? (
                  <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gold/10 p-8 text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-teal/20 flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-teal" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-navy mb-2">
                      {clientInfo.contactPage.form.successTitle}
                    </h3>
                    <p className="font-body text-navy/70 mb-6">
                      {clientInfo.contactPage.form.successDescription}
                    </p>
                    <Button
                      onClick={resetForm}
                      className="bg-navy hover:bg-navy/90 text-pearl font-body font-medium rounded-full px-8 py-3"
                    >
                      {clientInfo.contactPage.form.anotherMessageLabel}
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gold/10 p-8"
                    data-testid="contact-form"
                  >
                    <h3 className="font-heading text-2xl font-semibold text-navy mb-6">
                      {clientInfo.contactPage.form.title}
                    </h3>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-body text-navy">
                          {clientInfo.contactPage.form.labels.name}
                        </Label>
                        <Input
                          id="name"
                          data-testid="contact-input-name"
                          placeholder={clientInfo.contactPage.form.placeholders.name}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="border-navy/20 focus:border-gold rounded-xl py-6"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-body text-navy">
                          {clientInfo.contactPage.form.labels.phone}
                        </Label>
                        <Input
                          id="phone"
                          data-testid="contact-input-phone"
                          placeholder={clientInfo.contactPage.form.placeholders.phone}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="border-navy/20 focus:border-gold rounded-xl py-6"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-body text-navy">
                          {clientInfo.contactPage.form.labels.email}
                        </Label>
                        <Input
                          id="email"
                          data-testid="contact-input-email"
                          type="email"
                          placeholder={clientInfo.contactPage.form.placeholders.email}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="border-navy/20 focus:border-gold rounded-xl py-6"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-body text-navy">
                          {clientInfo.contactPage.form.labels.message}
                        </Label>
                        <Textarea
                          id="message"
                          data-testid="contact-input-message"
                          placeholder={clientInfo.contactPage.form.placeholders.message}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="border-navy/20 focus:border-gold rounded-xl min-h-[150px] resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        data-testid="contact-submit-btn"
                        disabled={isSubmitting}
                        className="w-full bg-gold hover:bg-gold/90 text-navy font-body font-medium rounded-full py-6 text-lg transition-all hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                            {clientInfo.contactPage.form.sendingLabel}
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            {clientInfo.contactPage.form.submitLabel}
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Info Card */}
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gold/10 p-8">
                  <h3 className="font-heading text-2xl font-semibold text-navy mb-6">
                    {clientInfo.contactPage.info.title}
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg text-navy mb-1">{clientInfo.contactPage.info.addressTitle}</h4>
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
                        <h4 className="font-heading text-lg text-navy mb-1">{clientInfo.contactPage.info.phoneTitle}</h4>
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
                        <h4 className="font-heading text-lg text-navy mb-1">{clientInfo.contactPage.info.emailTitle}</h4>
                        <a href={clientInfo.brand.emailHref} className="font-body text-navy/70 hover:text-gold transition-colors">
                          {clientInfo.brand.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-navy rounded-3xl p-8 text-pearl">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock size={24} className="text-gold" />
                    <h3 className="font-heading text-2xl font-semibold">
                      {clientInfo.contactPage.info.hoursTitle}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 border-b border-pearl/10">
                      <span className="font-body">{clientInfo.brand.workingHours.fullWeekdays}</span>
                      <span className="font-body text-gold">{clientInfo.brand.workingHours.fullWeekdayHours}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-body">{clientInfo.brand.workingHours.friday.split(":")[0]}</span>
                      <span className="font-body text-red-400">{clientInfo.brand.workingHours.fridayStatus}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-lg border border-gold/10 h-[400px]"
            >
              <iframe
                src={clientInfo.brand.map.src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={clientInfo.brand.map.title}
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
