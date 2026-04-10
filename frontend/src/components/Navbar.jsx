import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { clientInfo } from "../config/clientData";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = clientInfo.brand.navigation.links;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-gold/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" data-testid="logo-link">
            <span className="font-heading text-2xl md:text-3xl font-semibold text-navy tracking-tight">
              {clientInfo.brand.logoPrefix}
            </span>
            <span className="font-heading text-lg md:text-xl text-gold">{clientInfo.brand.logoSuffix}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className={`font-body text-sm uppercase tracking-widest transition-colors hover:text-gold ${
                  location.pathname === link.path ? "text-gold" : "text-navy"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={clientInfo.brand.phoneHref}
              className="flex items-center gap-2 text-navy hover:text-gold transition-colors"
              data-testid="phone-link"
            >
              <Phone size={18} className="text-gold" />
              <span className="font-body text-sm">{clientInfo.brand.phone}</span>
            </a>
            <Link to="/appointment">
              <Button
                data-testid="book-appointment-btn"
                className="bg-gold hover:bg-gold/90 text-navy font-body font-medium rounded-full px-6 py-2 transition-transform hover:scale-105"
              >
                {clientInfo.brand.navigation.appointmentLabel}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-pearl"
            >
              <div className="py-6 flex flex-col gap-4 bg-pearl">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                    className={`font-body text-lg py-2 border-b border-gold/20 transition-colors ${
                      location.pathname === link.path ? "text-gold" : "text-navy"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/appointment" className="mt-4">
                  <Button
                    data-testid="mobile-book-appointment-btn"
                    className="w-full bg-gold hover:bg-gold/90 text-navy font-body font-medium rounded-full py-3"
                  >
                    {clientInfo.brand.navigation.appointmentLabel}
                  </Button>
                </Link>
                <a
                  href={clientInfo.brand.phoneHref}
                  className="flex items-center justify-center gap-2 text-navy py-2"
                >
                  <Phone size={18} className="text-gold" />
                  <span className="font-body">{clientInfo.brand.phone}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
