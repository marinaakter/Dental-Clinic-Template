import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { clientInfo } from "../config/clientData";

export const Footer = () => {
  return (
    <footer className="bg-navy text-pearl" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="font-heading text-3xl font-semibold text-pearl">
                {clientInfo.brand.logoPrefix} <span className="text-gold">{clientInfo.brand.logoSuffix}</span>
              </h3>
            </Link>
            <p className="font-body text-pearl/70 leading-relaxed">
              {clientInfo.footer.brandDescription}
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href={clientInfo.brand.socialLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
                data-testid="social-facebook"
              >
                <Facebook size={18} className="text-gold group-hover:text-navy" />
              </a>
              <a
                href={clientInfo.brand.socialLinks[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
                data-testid="social-instagram"
              >
                <Instagram size={18} className="text-gold group-hover:text-navy" />
              </a>
              <a
                href={clientInfo.brand.socialLinks[2].href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
                data-testid="social-twitter"
              >
                <Twitter size={18} className="text-gold group-hover:text-navy" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-semibold text-gold mb-6">{clientInfo.footer.quickLinksTitle}</h4>
            <ul className="space-y-3">
              {clientInfo.brand.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-pearl/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-xl font-semibold text-gold mb-6">{clientInfo.footer.servicesTitle}</h4>
            <ul className="space-y-3">
              {clientInfo.brand.serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="font-body text-pearl/70 hover:text-gold transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl font-semibold text-gold mb-6">{clientInfo.footer.contactTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                <span className="font-body text-pearl/70">
                  {clientInfo.brand.addressLines[0]}<br />
                  {clientInfo.brand.addressLines[1]}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a href={clientInfo.brand.phoneHref} className="font-body text-pearl/70 hover:text-gold transition-colors">
                  {clientInfo.brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a href={clientInfo.brand.emailHref} className="font-body text-pearl/70 hover:text-gold transition-colors">
                  {clientInfo.brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-gold flex-shrink-0 mt-1" />
                <div className="font-body text-pearl/70">
                  <p>{clientInfo.brand.workingHours.weekdays}</p>
                  <p>{clientInfo.brand.workingHours.friday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-pearl/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-pearl/50">
              {clientInfo.footer.copyrightPrefix} {new Date().getFullYear()} {clientInfo.brand.name}. {clientInfo.footer.copyrightSuffix}
            </p>
            <div className="flex gap-6">
              {clientInfo.brand.legalLinks.map((link) => (
                <Link key={link.path} to={link.path} className="font-body text-sm text-pearl/50 hover:text-gold transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
