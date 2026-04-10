import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { clientInfo } from "../config/clientData";
import { Button } from "./ui/button";

export const HeroSection = () => {
  const ref = useRef(null);
  const heroTheme = clientInfo.theme.hero;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className={heroTheme.sectionClassName}
      data-testid="hero-section"
    >
      {/* Background decoration */}
      <div className={heroTheme.backgroundDecorationsClassName}>
        <div className={heroTheme.backgroundAccentTopClassName} />
        <div className={heroTheme.backgroundAccentBottomClassName} />
      </div>

      <div className={heroTheme.contentWrapperClassName}>
        <div className={heroTheme.gridClassName}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ opacity }}
            className="space-y-8 relative z-10"
          >
            <div className={heroTheme.badgeClassName}>
              <Award size={16} className="text-gold" />
              <span className={heroTheme.badgeTextClassName}>
                {clientInfo.brand.tagline}
              </span>
            </div>

            <h1 className={heroTheme.headingClassName}>
              {clientInfo.hero.title.prefix}
              <span className="block font-semibold">
                {clientInfo.hero.title.line} <span className={heroTheme.accentTextClassName}>{clientInfo.hero.title.accent}</span> {clientInfo.hero.title.suffix}
              </span>
            </h1>

            <div className={heroTheme.dividerClassName} />

            <p className={heroTheme.descriptionClassName}>
              {clientInfo.brand.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/appointment">
                <Button
                  data-testid="hero-book-appointment-btn"
                  className={heroTheme.primaryButtonClassName}
                >
                  {clientInfo.hero.ctas.primary}
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  data-testid="hero-services-btn"
                  variant="outline"
                  className={heroTheme.secondaryButtonClassName}
                >
                  {clientInfo.hero.ctas.secondary}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className={heroTheme.statsWrapperClassName}>
              {clientInfo.stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div key={stat.label} className={heroTheme.statItemClassName}>
                    <div className={`${heroTheme.statIconWrapperBaseClassName} ${stat.badgeClassName}`}>
                      <Icon size={20} className={stat.iconClassName} />
                    </div>
                    <div>
                      <p className={heroTheme.statValueClassName}>{stat.value}</p>
                      <p className={heroTheme.statLabelClassName}>{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            style={{ y }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Image */}
              <div className={heroTheme.imageContainerClassName}>
                <img
                  src={clientInfo.hero.image.src}
                  alt={clientInfo.hero.image.alt}
                  className={heroTheme.imageClassName}
                  loading="eager"
                />
                <div className={heroTheme.overlayClassName} />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={heroTheme.floatingCardClassName}
              >
                <div className={heroTheme.floatingCardHeaderClassName}>
                  <div className={heroTheme.floatingCardIconClassName}>
                    <Award size={20} className="text-white" />
                  </div>
                  <span className={heroTheme.floatingCardLabelClassName}>
                    {clientInfo.brand.awardLabel}
                  </span>
                </div>
                <p className={heroTheme.floatingCardTitleClassName}>
                  &quot;{clientInfo.brand.awardTitle}&quot;
                </p>
                <p className={heroTheme.floatingCardSourceClassName}>
                  — {clientInfo.brand.awardSource}
                </p>
              </motion.div>

              {/* Decorative elements */}
              <div className={heroTheme.decorativeBorderClassName} />
              <div className={heroTheme.decorativeDotClassName} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className={heroTheme.scrollIndicatorClassName}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className={heroTheme.scrollPillClassName}
        >
          <div className={heroTheme.scrollDotClassName} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
