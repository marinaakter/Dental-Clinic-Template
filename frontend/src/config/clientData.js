import { Award, Clock, Users } from "lucide-react";

export const clientInfo = {
  brand: {
    name: "Saafwan Dental & Ortho Dontics",
    logoPrefix: "Saafwan",
    logoSuffix: "Dental & Ortho",
    area: "Location Area", // যেমন: Uttara বা Banani
    location: "City Name, Dhaka",
    tagline: "Precision Orthodontics & Comprehensive Dental Care",
    description:
      "At Saafwan Dental & Ortho Dontics, we specialize in smile transformations. From advanced orthodontics to general dentistry, we provide expert care with a touch of perfection.",
    awardLabel: "Orthodontic Specialist",
    awardTitle: "Excellence in Orthodontic Care 2025",
    awardSource: "Bangladesh Orthodontic Society",
    addressLines: ["Clinic Address Line 1,", "Area Name, Dhaka, Bangladesh"],
    phone: "+880 1900-000000", // অরিজিনাল নাম্বার বসিয়ে নিন
    phoneHref: "tel:+8801900000000",
    email: "info@saafwandental.com",
    emailHref: "mailto:info@saafwandental.com",
    workingHours: {
      weekdays: "Sat - Thu: 11AM - 9PM",
      friday: "Friday: Closed",
      fullWeekdays: "Saturday - Thursday",
      fullWeekdayHours: "11:00 AM - 9:00 PM",
      fridayStatus: "Closed",
    },
    map: {
      src: "http://googleusercontent.com/maps.google.com/saafwan-location",
      title: "Saafwan Dental Location",
    },
    socialLinks: [
      { name: "Facebook", href: "https://facebook.com/saafwandental" },
      { name: "Instagram", href: "https://instagram.com/saafwandental" },
      { name: "Twitter", href: "https://twitter.com/saafwandental" },
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
      "Orthodontic Braces",
      "Invisalign Treatment",
      "Teeth Alignment",
      "Jaw Correction",
      "Cosmetic Filling",
      "Dental Implants",
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
      prefix: "Perfect",
      line: "Alignment",
      accent: "Expert",
      suffix: "Care",
    },
    ctas: {
      primary: "Start Transformation",
      secondary: "Our Specialties",
    },
    image: {
      src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=1000&fit=crop",
      alt: "Saafwan Orthodontics Specialist",
    },
  },
  stats: [
    {
      value: "1500+",
      label: "Braces Cases",
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
      eyebrow: "Our Focus",
      titlePrefix: "Orthodontic &",
      titleAccent: "Dental",
      description:
        "Specialized in straightening smiles and improving oral health through cutting-edge orthodontic solutions.",
    },
    card: {
      buttonLabel: "Learn More",
    },
    cta: {
      titlePrefix: "Ready for a Straighter",
      titleAccent: "Smile?",
      description:
        "Consult with our orthodontist today and discover the best options for you.",
      buttonLabel: "Get Appointment",
    },
  },
  appointmentPage: {
    hero: {
      eyebrow: "Book Consult",
      titlePrefix: "Plan Your",
      titleAccent: "Treatment",
      description:
        "Your journey to a perfect smile starts here. Schedule your consultation today.",
    },
    sidebar: {
      helpTitle: "Need Guidance?",
      callUsLabel: "Call Office",
      workingHoursLabel: "Clinic Timing",
      locationLabel: "Our Address",
      whyTitle: "Why Choose Us?",
      trustTitle: "Expert Hands",
      trustDescription: "Specialized orthodontic care",
    },
    features: [
      "Initial smile assessment",
      "Flexible installment plans",
      "Latest orthodontic tools",
    ],
  },
  contactPage: {
    hero: {
      eyebrow: "Contact Us",
      titlePrefix: "Visit",
      titleAccent: "Saafwan",
      description:
        "Reach out to us for any queries related to braces or general dental care.",
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
        phone: "+880 1...",
        email: "your@email.com",
        message: "e.g. Interested in braces",
      },
      successToast: "Enquiry sent!",
    },
    info: {
      title: "Contact Saafwan",
      addressTitle: "Our Office",
      phoneTitle: "Call Now",
      emailTitle: "Write to Us",
    },
  },
  footer: {
    brandDescription:
      "Transforming smiles with specialized orthodontic and dental care in Dhaka.",
    quickLinksTitle: "Navigation",
    servicesTitle: "Specialties",
    contactTitle: "Reach Us",
    copyrightPrefix: "©",
    copyrightSuffix: "Saafwan Dental & Ortho Dontics. All Rights Reserved.",
  },
  contactStrip: {
    eyebrow: "Find Us",
    titlePrefix: "Located In",
    titleAccent: "Dhaka",
    addressTitle: "Address",
    phoneTitle: "Phone",
    emailTitle: "Email",
    hoursTitle: "Working Hours",
    map: {
      src: "http://googleusercontent.com/maps.google.com/saafwan-location",
      title: "Saafwan Dental Map",
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
    eyebrow: "The Saafwan Way",
    titlePrefix: "Why Saafwan",
    titleAccent: "Dental",
    features: [
      {
        title: "Orthodontic Experts",
        description: "Specialized focus on jaw and teeth alignment.",
      },
      {
        title: "Advanced Braces",
        description: "From metal to invisible aligners, we have it all.",
      },
      {
        title: "Personalized Care",
        description: "Customized treatment plans for every unique smile.",
      },
      {
        title: "Hygiene Standard",
        description: "Top-tier sterilization for every procedure.",
      },
    ],
  },
  whatsapp: {
    headerTitle: "Saafwan Dental",
    headerSubtitle: "Orthodontic Support",
    greeting: "Hello! Ready for a transformation? 👋",
    prompt: "Interested in braces or have a dental question?",
    quickMessagesTitle: "FAQs",
    quickMessages: [
      { id: 1, text: "What is the cost of braces?", emoji: "🦷" },
      { id: 2, text: "Do you have clear aligners?", emoji: "✨" },
    ],
    quickMessagePrefix: "Hello Saafwan Dental!",
    customMessage: "I'd like to consult about braces at your clinic.",
    startChatLabel: "Chat via WhatsApp",
    ariaLabel: "WhatsApp Support",
    whatsappNumber: "8801900000000",
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
    contactPrompt: "Questions? Call Saafwan at",
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
      titleAccent: "Orthodontists",
      description:
        "Our team focuses on clinical excellence and patient comfort.",
    },
    stats: [
      { value: "5+", label: "Doctors" },
      { value: "2000+", label: "Success Stories" },
      { value: "10+", label: "Years Experience" },
    ],
    cta: {
      title: "Not Sure About Braces?",
      description: "Our doctors can provide a preliminary assessment today.",
      buttonLabel: "Book Now",
    },
  },
  adminPage: {
    titlePrefix: "Saafwan",
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
