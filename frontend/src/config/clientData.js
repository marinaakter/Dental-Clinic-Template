import { Award, Clock, Users } from "lucide-react";

export const clientInfo = {
  brand: {
    name: "Ortho Dental Clinic",
    logoPrefix: "Ortho",
    logoSuffix: "Dental Clinic",
    area: "Dhanmondi",
    location: "Dhaka",
    tagline: "Premium Dental Care in Dhaka",
    description:
      "Experience world-class dental care at Ortho Dental Clinic. Where cutting-edge technology meets compassionate service for your perfect smile.",
    awardLabel: "Certified Excellence",
    awardTitle: "Best Dental Clinic in Dhaka 2024",
    awardSource: "Bangladesh Dental Association",
    addressLines: ["House 12, Road 5, Dhanmondi,", "Dhaka 1205, Bangladesh"],
    phone: "+880 1700-000000",
    phoneHref: "tel:+8801700000000",
    email: "info@orthodentalclinic.com",
    emailHref: "mailto:info@orthodentalclinic.com",
    workingHours: {
      weekdays: "Sat - Thu: 9AM - 7PM",
      friday: "Friday: Closed",
      fullWeekdays: "Saturday - Thursday",
      fullWeekdayHours: "9:00 AM - 7:00 PM",
      fridayStatus: "Closed"
    },
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.426789022658!2d90.37166743082826!3d23.746506839048946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1709900000000!5m2!1sen!2sus",
      title: "Ortho Dental Clinic Location"
    },
    socialLinks: [
      { name: "Facebook", href: "https://facebook.com" },
      { name: "Instagram", href: "https://instagram.com" },
      { name: "Twitter", href: "https://twitter.com" }
    ],
    navigation: {
      links: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Doctors", path: "/doctors" },
        { name: "Contact", path: "/contact" }
      ],
      appointmentLabel: "Book Appointment"
    },
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Our Doctors", path: "/doctors" },
      { name: "Book Appointment", path: "/appointment" },
      { name: "Contact Us", path: "/contact" }
    ],
    serviceLinks: [
      "General Dentistry",
      "Teeth Whitening",
      "Orthodontics",
      "Dental Implants",
      "Root Canal",
      "Pediatric Care"
    ],
    legalLinks: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" }
    ]
  },
  theme: {
    colors: {
      background: "bg-pearl",
      surface: "bg-white",
      primary: "bg-gold",
      primaryHover: "hover:bg-gold/90",
      primaryText: "text-navy",
      secondaryText: "text-pearl",
      accentText: "text-gold",
      mutedText: "text-navy/70",
      inverseBg: "bg-navy",
      inverseText: "text-pearl",
      softPrimary: "bg-gold/10",
      softPrimaryStrong: "bg-gold/20",
      softAccent: "bg-teal/10",
      softAccentStrong: "bg-teal/20",
      softInverse: "bg-pearl/10",
      borderSoft: "border-gold/10",
      borderAccent: "border-gold/30",
      borderInverse: "border-pearl/10"
    },
    hero: {
      sectionClassName: "relative min-h-screen bg-pearl overflow-hidden pt-20",
      backgroundDecorationsClassName: "absolute inset-0 overflow-hidden",
      backgroundAccentTopClassName: "absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl",
      backgroundAccentBottomClassName: "absolute bottom-20 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl",
      contentWrapperClassName: "max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20",
      gridClassName: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]",
      badgeClassName: "inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2",
      badgeTextClassName: "font-body text-xs uppercase tracking-widest text-navy",
      headingClassName:
        "font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-navy leading-tight tracking-tight",
      accentTextClassName: "text-gold",
      dividerClassName: "w-24 h-1 bg-gold",
      descriptionClassName: "font-body text-base md:text-lg text-navy/70 max-w-md leading-relaxed",
      primaryButtonClassName:
        "bg-gold hover:bg-gold/90 text-navy font-body font-medium rounded-full px-8 py-6 text-lg transition-all hover:scale-105 inline-flex items-center gap-2",
      secondaryButtonClassName:
        "border-navy text-navy hover:bg-navy hover:text-pearl font-body font-medium rounded-full px-8 py-6 text-lg transition-all",
      statsWrapperClassName: "flex flex-wrap gap-8 pt-8",
      statItemClassName: "flex items-center gap-3",
      statIconWrapperBaseClassName: "w-12 h-12 rounded-full flex items-center justify-center",
      statValueClassName: "font-heading text-2xl font-semibold text-navy",
      statLabelClassName: "font-body text-sm text-navy/60",
      imageContainerClassName: "relative rounded-3xl overflow-hidden shadow-2xl",
      imageClassName: "w-full h-[500px] md:h-[600px] object-cover",
      overlayClassName: "absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent",
      floatingCardClassName: "absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-2xl shadow-xl p-6 max-w-[280px]",
      floatingCardHeaderClassName: "flex items-center gap-3 mb-3",
      floatingCardIconClassName: "w-10 h-10 rounded-full bg-teal flex items-center justify-center",
      floatingCardLabelClassName: "font-body text-xs uppercase tracking-widest text-gold",
      floatingCardTitleClassName: "font-heading text-lg text-navy",
      floatingCardSourceClassName: "font-body text-sm text-navy/60 mt-1",
      decorativeBorderClassName: "absolute -top-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-3xl",
      decorativeDotClassName: "absolute -bottom-8 right-12 w-16 h-16 bg-teal/20 rounded-full",
      scrollIndicatorClassName: "absolute bottom-8 left-1/2 -translate-x-1/2",
      scrollPillClassName: "w-6 h-10 border-2 border-navy/30 rounded-full flex justify-center pt-2",
      scrollDotClassName: "w-1.5 h-3 bg-gold rounded-full"
    }
  },
  hero: {
    title: {
      prefix: "Your Perfect",
      line: "Smile",
      accent: "Starts",
      suffix: "Here"
    },
    ctas: {
      primary: "Book Appointment",
      secondary: "Our Services"
    },
    image: {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop",
      alt: "Modern dental clinic interior"
    }
  },
  stats: [
    {
      value: "10K+",
      label: "Happy Patients",
      icon: Users,
      iconClassName: "text-teal",
      badgeClassName: "bg-teal/10"
    },
    {
      value: "15+",
      label: "Years Experience",
      icon: Award,
      iconClassName: "text-gold",
      badgeClassName: "bg-gold/10"
    },
    {
      value: "24/7",
      label: "Emergency Care",
      icon: Clock,
      iconClassName: "text-navy",
      badgeClassName: "bg-navy/10"
    }
  ],
  servicesPage: {
    hero: {
      eyebrow: "Our Expertise",
      titlePrefix: "Premium Dental",
      titleAccent: "Services",
      description:
        "From routine checkups to advanced cosmetic procedures, we offer comprehensive dental care tailored to your unique needs."
    },
    card: {
      buttonLabel: "Book This Service"
    },
    cta: {
      titlePrefix: "Ready to Transform Your",
      titleAccent: "Smile",
      description:
        "Book your appointment today and take the first step towards a healthier, brighter smile.",
      buttonLabel: "Book Your Appointment"
    }
  },
  appointmentPage: {
    hero: {
      eyebrow: "Schedule Your Visit",
      titlePrefix: "Book Your",
      titleAccent: "Appointment",
      description: "Fill out the form below and we'll confirm your appointment within 24 hours."
    },
    sidebar: {
      helpTitle: "Need Help?",
      callUsLabel: "Call Us",
      workingHoursLabel: "Working Hours",
      locationLabel: "Location",
      whyTitle: "Why Book With Us?",
      trustTitle: "100% Secure",
      trustDescription: "Your data is protected"
    },
    features: [
      "Confirmed within 24 hours",
      "Top-rated dental professionals",
      "Flexible scheduling options"
    ]
  },
  contactPage: {
    hero: {
      eyebrow: "Get in Touch",
      titlePrefix: "Contact",
      titleAccent: "Us",
      description:
        "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
    },
    form: {
      title: "Send Us a Message",
      successTitle: "Message Sent!",
      successDescription: "Thank you for reaching out. We'll get back to you shortly.",
      submitLabel: "Send Message",
      sendingLabel: "Sending...",
      anotherMessageLabel: "Send Another Message",
      validationError: "Please fill in all required fields",
      labels: {
        name: "Full Name *",
        phone: "Phone Number *",
        email: "Email Address",
        message: "Message *"
      },
      placeholders: {
        name: "Your full name",
        phone: "+880 1XXX-XXXXXX",
        email: "your@email.com",
        message: "How can we help you?"
      },
      successToast: "Message sent successfully!"
    },
    info: {
      title: "Contact Information",
      addressTitle: "Address",
      phoneTitle: "Phone",
      emailTitle: "Email"
    }
  },
  footer: {
    brandDescription:
      "Caring for Your Smile, One Visit at a Time. Premium dental care in the heart of Dhaka.",
    quickLinksTitle: "Quick Links",
    servicesTitle: "Our Services",
    contactTitle: "Contact Us",
    copyrightPrefix: "©",
    copyrightSuffix: "All rights reserved."
  },
  contactStrip: {
    eyebrow: "Visit Us",
    titlePrefix: "Find Us in",
    titleAccent: "Dhanmondi",
    addressTitle: "Address",
    phoneTitle: "Phone",
    emailTitle: "Email",
    hoursTitle: "Working Hours",
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.426789022658!2d90.37166743082826!3d23.746506839048946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1709900000000!5m2!1sen!2sus",
      title: "Ortho Dental Clinic Location"
    }
  },
  servicesGrid: {
    eyebrow: "What We Offer",
    titlePrefix: "Our Premium",
    titleAccent: "Services",
    viewAllLabel: "View All Services",
    bookButtonLabel: "Book This Service"
  },
  whyChooseUs: {
    eyebrow: "Why Ortho Dental Clinic",
    titlePrefix: "Why Choose",
    titleAccent: "Us",
    features: [
      {
        title: "Expert Doctors",
        description: "Our team of certified dental professionals brings decades of combined experience to your care."
      },
      {
        title: "Modern Equipment",
        description: "We use the latest dental technology for accurate diagnosis and comfortable treatments."
      },
      {
        title: "Painless Treatment",
        description: "Advanced techniques and caring approach ensure a comfortable, pain-free experience."
      },
      {
        title: "Affordable Pricing",
        description: "Quality dental care shouldn't break the bank. We offer transparent, competitive pricing."
      }
    ]
  },
  whatsapp: {
    headerTitle: "Ortho Dental Clinic",
    headerSubtitle: "Typically replies instantly",
    greeting: "Hi there! 👋",
    prompt:
      "How can we help you today? Select a quick option below or start a custom chat.",
    quickMessagesTitle: "Quick Messages",
    quickMessages: [
      { id: 1, text: "I'd like to book an appointment", emoji: "📅" },
      { id: 2, text: "What are your clinic hours?", emoji: "🕐" },
      { id: 3, text: "I have a dental emergency", emoji: "🚨" },
      { id: 4, text: "What services do you offer?", emoji: "🦷" },
      { id: 5, text: "I need pricing information", emoji: "💰" }
    ],
    quickMessagePrefix: "Hello Ortho Dental Clinic!",
    customMessage: "Hello Ortho Dental Clinic! I'd like to know more about your services.",
    startChatLabel: "Start Chat",
    ariaLabel: "Open WhatsApp chat",
    whatsappNumber: "8801700000000",
    accentColor: "#25D366",
    accentHoverColor: "#20BD5A"
  },
  successModal: {
    title: "Appointment Requested!",
    description: "We'll confirm via phone within 24 hours.",
    labels: {
      doctor: "Doctor",
      service: "Service",
      date: "Date",
      time: "Time"
    },
    contactPrompt: "Questions? Call us at",
    doneLabel: "Done"
  },
  doctorCard: {
    experienceSuffix: "Years",
    bookButtonPrefix: "Book with",
    section: {
      eyebrow: "Expert Care",
      titlePrefix: "Meet Our",
      titleAccent: "Doctors",
      description:
        "Our team of highly qualified dental professionals is dedicated to providing you with the best possible care in a comfortable environment.",
      viewAllLabel: "View All Doctors"
    }
  },
  doctorsPage: {
    hero: {
      eyebrow: "Our Team",
      titlePrefix: "Meet Our Expert",
      titleAccent: "Doctors",
      description:
        "Our team of highly qualified dental professionals combines years of experience with a passion for patient care."
    },
    stats: [
      { value: "43+", label: "Years Combined Experience" },
      { value: "4", label: "Specialized Doctors" },
      { value: "10K+", label: "Happy Patients" }
    ],
    cta: {
      title: "Not Sure Which Doctor to See?",
      description:
        "Book a general consultation and let us recommend the best specialist for your needs.",
      buttonLabel: "Book a Consultation"
    }
  },
  adminPage: {
    titlePrefix: "Ortho Dental Clinic",
    titleAccent: "Admin",
    logoutLabel: "Logout",
    stats: [
      { label: "Total Appointments" },
      { label: "Pending" },
      { label: "Confirmed" }
    ],
    appointmentsTitle: "Appointments",
    loadingText: "Loading appointments...",
    emptyText: "No appointments yet"
  }
};
