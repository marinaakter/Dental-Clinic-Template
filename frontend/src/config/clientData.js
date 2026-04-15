import { Award, Clock, Users } from "lucide-react";

export const clientInfo = {
  brand: {
    name: "Siraj Dental Clinic",
    logoPrefix: "Siraj",
    logoSuffix: "Dental",
    area: "Tangail",
    location: "Tangail, Bangladesh",
    tagline: "Expert Dental Care for a Brighter Smile",
    description:
      "At Siraj Dental Clinic, we provide high-quality dental services with a focus on patient comfort and advanced treatment procedures. Your smile is our priority.",
    awardLabel: "Dental Specialist",
    awardTitle: "Excellence in Dental Care 2025",
    awardSource: "Bangladesh Dental Society",
    addressLines: ["Siraj Dental Clinic,", "Tangail, Bangladesh"],
    phone: "+880 1729-300723",
    phoneHref: "tel:+8801729300723",
    email: "shirajdental@gmail.com",
    emailHref: "mailto:shirajdental@gmail.com",
    workingHours: {
      weekdays: "Sat - Thu: 11AM - 9PM",
      friday: "Friday: Closed",
      fullWeekdays: "Saturday - Thursday",
      fullWeekdayHours: "11:00 AM - 9:00 PM",
      fridayStatus: "Closed",
    },
    map: {
      src: "http://googleusercontent.com/maps.google.com/siraj-dental-location",
      title: "Siraj Dental Clinic Location",
    },
    socialLinks: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/sirajdentalclinicc",
      },
      { name: "Instagram", href: "https://instagram.com/sirajdental" },
      { name: "Twitter", href: "https://twitter.com/sirajdental" },
    ],
    navigation: {
      links: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Doctors", path: "/doctors" },
        { name: "Contact", path: "/contact" },
      ],
      appointmentLabel: "Book Appointment",
    },
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Our Doctors", path: "/doctors" },
      { name: "Book Appointment", path: "/appointment" },
      { name: "Contact Us", path: "/contact" },
    ],
    serviceLinks: [
      "Root Canal Treatment",
      "Dental Implants",
      "Teeth Scaling",
      "Tooth Extraction",
      "Cosmetic Filling",
      "Orthodontic Braces",
    ],
    legalLinks: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
    ],
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
      borderInverse: "border-pearl/10",
    },
    hero: {
      sectionClassName: "relative min-h-screen bg-pearl overflow-hidden pt-20",
      backgroundDecorationsClassName: "absolute inset-0 overflow-hidden",
      backgroundAccentTopClassName:
        "absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl",
      backgroundAccentBottomClassName:
        "absolute bottom-20 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl",
      contentWrapperClassName:
        "max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20",
      gridClassName:
        "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]",
      badgeClassName:
        "inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2",
      badgeTextClassName:
        "font-body text-xs uppercase tracking-widest text-navy",
      headingClassName:
        "font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-navy leading-tight tracking-tight",
      accentTextClassName: "text-gold",
      dividerClassName: "w-24 h-1 bg-gold",
      descriptionClassName:
        "font-body text-base md:text-lg text-navy/70 max-w-md leading-relaxed",
      primaryButtonClassName:
        "bg-gold hover:bg-gold/90 text-navy font-body font-medium rounded-full px-8 py-6 text-lg transition-all hover:scale-105 inline-flex items-center gap-2",
      secondaryButtonClassName:
        "border-navy text-navy hover:bg-navy hover:text-pearl font-body font-medium rounded-full px-8 py-6 text-lg transition-all",
      statsWrapperClassName: "flex flex-wrap gap-8 pt-8",
      statItemClassName: "flex items-center gap-3",
      statIconWrapperBaseClassName:
        "w-12 h-12 rounded-full flex items-center justify-center",
      statValueClassName: "font-heading text-2xl font-semibold text-navy",
      statLabelClassName: "font-body text-sm text-navy/60",
      imageContainerClassName:
        "relative rounded-3xl overflow-hidden shadow-2xl",
      imageClassName: "w-full h-[500px] md:h-[600px] object-cover",
      overlayClassName:
        "absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent",
      floatingCardClassName:
        "absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-2xl shadow-xl p-6 max-w-[280px]",
      floatingCardHeaderClassName: "flex items-center gap-3 mb-3",
      floatingCardIconClassName:
        "w-10 h-10 rounded-full bg-teal flex items-center justify-center",
      floatingCardLabelClassName:
        "font-body text-xs uppercase tracking-widest text-gold",
      floatingCardTitleClassName: "font-heading text-lg text-navy",
      floatingCardSourceClassName: "font-body text-sm text-navy/60 mt-1",
      decorativeBorderClassName:
        "absolute -top-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-3xl",
      decorativeDotClassName:
        "absolute -bottom-8 right-12 w-16 h-16 bg-teal/20 rounded-full",
      scrollIndicatorClassName: "absolute bottom-8 left-1/2 -translate-x-1/2",
      scrollPillClassName:
        "w-6 h-10 border-2 border-navy/30 rounded-full flex justify-center pt-2",
      scrollDotClassName: "w-1.5 h-3 bg-gold rounded-full",
    },
  },
  hero: {
    title: {
      prefix: "Healthy",
      line: "Smiles",
      accent: "Expert",
      suffix: "Care",
    },
    ctas: {
      primary: "Start Transformation",
      secondary: "Our Services",
    },
    image: {
      src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=1000&fit=crop",
      alt: "Siraj Dental Specialist",
    },
  },
  stats: [
    {
      value: "2000+",
      label: "Happy Patients",
      icon: Users,
      iconClassName: "text-teal",
      badgeClassName: "bg-teal/10",
    },
    {
      value: "10+",
      label: "Specialized Years",
      icon: Award,
      iconClassName: "text-gold",
      badgeClassName: "bg-gold/10",
    },
    {
      value: "99%",
      label: "Success Rate",
      icon: Clock,
      iconClassName: "text-navy",
      badgeClassName: "bg-navy/10",
    },
  ],
  servicesPage: {
    hero: {
      eyebrow: "Our Services",
      titlePrefix: "General &",
      titleAccent: "Dental",
      description:
        "Comprehensive dental care including root canal, scaling, extraction, and surgery to keep your teeth healthy.",
    },
    card: {
      buttonLabel: "Learn More",
    },
    cta: {
      titlePrefix: "Ready for a Brighter",
      titleAccent: "Smile?",
      description:
        "Consult with our specialists today and discover the best dental options for you.",
      buttonLabel: "Get Appointment",
    },
  },
  appointmentPage: {
    hero: {
      eyebrow: "Book Visit",
      titlePrefix: "Plan Your",
      titleAccent: "Treatment",
      description:
        "Your journey to a perfect smile starts here. Schedule your dental consultation today.",
    },
    sidebar: {
      helpTitle: "Need Guidance?",
      callUsLabel: "Call Clinic",
      workingHoursLabel: "Clinic Timing",
      locationLabel: "Our Address",
      whyTitle: "Why Choose Us?",
      trustTitle: "Expert Hands",
      trustDescription: "Specialized dental and oral care",
    },
    features: [
      "Initial dental check-up",
      "Pain-free treatments",
      "Advanced dental technology",
    ],
  },
  contactPage: {
    hero: {
      eyebrow: "Contact Us",
      titlePrefix: "Visit",
      titleAccent: "Siraj Dental",
      description:
        "Reach out to us for any queries related to dental care or appointments.",
    },
    form: {
      title: "Enquire About Treatment",
      successTitle: "Thank You!",
      successDescription:
        "We have received your enquiry. Our team will contact you for a consultation.",
      submitLabel: "Submit Enquiry",
      sendingLabel: "Wait...",
      anotherMessageLabel: "Send New Message",
      validationError: "Fill required fields",
      labels: {
        name: "Full Name *",
        phone: "WhatsApp No *",
        email: "Email (Optional)",
        message: "Your Dental Concern *",
      },
      placeholders: {
        name: "Full name",
        phone: "+880 1729-...",
        email: "shirajdental@gmail.com",
        message: "e.g. Interested in scaling or filling",
      },
      successToast: "Enquiry sent!",
    },
    info: {
      title: "Contact Siraj Dental Clinic",
      addressTitle: "Our Clinic",
      phoneTitle: "Call Now",
      emailTitle: "Write to Us",
    },
  },
  footer: {
    brandDescription: "Transforming smiles with expert dental care in Tangail.",
    quickLinksTitle: "Navigation",
    servicesTitle: "Specialties",
    contactTitle: "Reach Us",
    copyrightPrefix: "©",
    copyrightSuffix: "Siraj Dental Clinic. All Rights Reserved.",
  },
  contactStrip: {
    eyebrow: "Find Us",
    titlePrefix: "Located In",
    titleAccent: "Tangail",
    addressTitle: "Address",
    phoneTitle: "Phone",
    emailTitle: "Email",
    hoursTitle: "Working Hours",
    map: {
      src: "http://googleusercontent.com/maps.google.com/siraj-dental-location",
      title: "Siraj Dental Clinic Map",
    },
  },
  servicesGrid: {
    eyebrow: "Specialties",
    titlePrefix: "Precision",
    titleAccent: "Treatments",
    viewAllLabel: "All Specialties",
    bookButtonLabel: "Book Visit",
  },
  whyChooseUs: {
    eyebrow: "The Siraj Dental Way",
    titlePrefix: "Why Siraj",
    titleAccent: "Dental",
    features: [
      {
        title: "Expert Dentists",
        description: "Specialized focus on general and surgical dentistry.",
      },
      {
        title: "Modern Equipment",
        description: "Equipped with the latest tools for accurate results.",
      },
      {
        title: "Personalized Care",
        description: "Customized treatment plans for every unique case.",
      },
      {
        title: "Top-tier Sterilization",
        description:
          "Maintaining extreme hygiene standards for all procedures.",
      },
    ],
  },
  whatsapp: {
    headerTitle: "Siraj Dental",
    headerSubtitle: "Dental Support",
    greeting: "Hello! Ready for a smile makeover? 👋",
    prompt: "Have a dental question or need an appointment?",
    quickMessagesTitle: "FAQs",
    quickMessages: [
      { id: 1, text: "What is the cost of scaling?", emoji: "🦷" },
      { id: 2, text: "Do you offer root canal?", emoji: "✨" },
    ],
    quickMessagePrefix: "Hello Siraj Dental Clinic!",
    customMessage: "I'd like to consult about dental care at your clinic.",
    startChatLabel: "Chat via WhatsApp",
    ariaLabel: "WhatsApp Support",
    whatsappNumber: "8801729300723",
    accentColor: "#25D366",
    accentHoverColor: "#20BD5A",
  },
  successModal: {
    title: "Appointment Set!",
    description: "Our clinic will reach out to confirm your time slot.",
    labels: {
      doctor: "Specialist",
      service: "Service",
      date: "Date",
      time: "Time",
    },
    contactPrompt: "Questions? Call Siraj Dental Clinic at",
    doneLabel: "Done",
  },
  doctorCard: {
    experienceSuffix: "Years",
    bookButtonPrefix: "Meet",
    section: {
      eyebrow: "Specialists",
      titlePrefix: "Our Dental",
      titleAccent: "Experts",
      description: "Meet the specialized hands behind your healthy smile.",
      viewAllLabel: "All Specialists",
    },
  },
  doctorsPage: {
    hero: {
      eyebrow: "The Experts",
      titlePrefix: "Specialized",
      titleAccent: "Dentists",
      description:
        "Our team focuses on clinical excellence and patient comfort.",
    },
    stats: [
      { value: "3+", label: "Doctors" },
      { value: "2000+", label: "Success Stories" },
      { value: "10+", label: "Years Experience" },
    ],
    cta: {
      title: "Not Sure About Treatment?",
      description: "Our doctors can provide a preliminary assessment today.",
      buttonLabel: "Book Now",
    },
  },
  adminPage: {
    titlePrefix: "Siraj Dental",
    titleAccent: "Admin Portal",
    logoutLabel: "Logout",
    stats: [
      { label: "New Enquiries" },
      { label: "Active" },
      { label: "Completed" },
    ],
    appointmentsTitle: "Patient Queue",
    loadingText: "Loading queue....",
    emptyText: "No data found.",
  },
};
