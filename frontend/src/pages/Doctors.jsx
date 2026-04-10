import { motion } from "framer-motion";
import { Award, GraduationCap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { DoctorCard } from "../components/DoctorCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { clientInfo } from "../config/clientData";
import { doctors } from "../data/doctors";

export const Doctors = () => {
  const statIcons = [Award, GraduationCap, Heart];

  return (
    <div className="min-h-screen bg-pearl" data-testid="doctors-page">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="font-body text-xs uppercase tracking-widest text-gold mb-4 block">
                {clientInfo.doctorsPage.hero.eyebrow}
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy leading-tight mb-6">
                {clientInfo.doctorsPage.hero.titlePrefix} <span className="text-gold">{clientInfo.doctorsPage.hero.titleAccent}</span>
              </h1>
              <p className="font-body text-navy/70 text-base md:text-lg leading-relaxed">
                {clientInfo.doctorsPage.hero.description}
              </p>
              <div className="w-24 h-1 bg-gold mx-auto mt-8" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clientInfo.doctorsPage.stats.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gold/10"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-4">
                      <Icon size={24} className="text-gold" />
                    </div>
                    <p className="font-heading text-4xl font-semibold text-navy mb-2">
                      {stat.value}
                    </p>
                    <p className="font-body text-navy/70">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {doctors.map((doctor, index) => (
                <DoctorCard key={doctor.id} doctor={doctor} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-pearl mb-4">
                  {clientInfo.doctorsPage.cta.title}
                </h2>
                <p className="font-body text-pearl/70 mb-8 max-w-xl mx-auto">
                  {clientInfo.doctorsPage.cta.description}
                </p>
                <Link to="/appointment">
                  <Button
                    data-testid="doctors-cta-btn"
                    className="bg-gold hover:bg-gold/90 text-navy font-body font-medium rounded-full px-8 py-6 text-lg transition-all hover:scale-105"
                  >
                    {clientInfo.doctorsPage.cta.buttonLabel}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
