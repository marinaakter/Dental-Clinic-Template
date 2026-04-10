import { Award, Clock, Users } from "lucide-react";

export const clientInfo = {
  brand: {
    name: "ABS Dental Clinic",
    logoPrefix: "ABS",
    logoSuffix: "Dental Clinic",
    area: "Gazipur",
    location: "Gazipur, Dhaka",
    tagline: "Expert Dental Care for a Brighter Smile in Gazipur",
    description:
      "ABS Dental Clinic is committed to providing high-quality dental services with the latest technology and a patient-first approach in the heart of Gazipur.",
    awardLabel: "Local Excellence",
    awardTitle: "Top Rated Dental Service in Gazipur",
    awardSource: "Healthcare Excellence BD",
    addressLines: [
      "Gazipur Chowrasta, Near Main Road,",
      "Gazipur 1700, Bangladesh",
    ],
    phone: "+880 1800-000000", // আপনি আপনার অরিজিনাল নাম্বার দিয়ে রিপ্লেস করে নিয়েন
    phoneHref: "tel:+8801800000000",
    email: "info@absdentalclinic.com",
    emailHref: "mailto:info@absdentalclinic.com",
    workingHours: {
      weekdays: "Sat - Thu: 10AM - 8PM",
      friday: "Friday: Closed",
      fullWeekdays: "Saturday - Thursday",
      fullWeekdayHours: "10:00 AM - 8:00 PM",
      fridayStatus: "Closed",
    },
    map: {
      src: "http://googleusercontent.com/maps.google.com/gazipur-location", // এখানে গাজিপুরের ম্যাপ লিঙ্ক বসবে
      title: "ABS Dental Clinic Location",
    },
    socialLinks: [
      { name: "Facebook", href: "https://facebook.com/absdental" },
      { name: "Instagram", href: "https://instagram.com/absdental" },
      { name: "Twitter", href: "https://twitter.com/absdental" },
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
      "Teeth Scaling",
      "Braces Treatment",
      "Dental Surgery",
      "Crown & Bridges",
      "Root Canal",
      "Cosmetic Dentistry",
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
      prefix: "Best Oral",
      line: "Health",
      accent: "Starts",
      suffix: "In Gazipur",
    },
    ctas: {
      primary: "Get Appointment",
      secondary: "Explore Services",
    },
    image: {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop",
      alt: "ABS Dental Clinic Gazipur",
    },
  },
  stats: [
    {
      value: "5K+",
      label: "Patients Served",
      icon: Users,
      iconClassName: "text-teal",
      badgeClassName: "bg-teal/10",
    },
    {
      value: "12+",
      label: "Years Service",
      icon: Award,
      iconClassName: "text-gold",
      badgeClassName: "bg-gold/10",
    },
    {
      value: "100%",
      label: "Care Quality",
      icon: Clock,
      iconClassName: "text-navy",
      badgeClassName: "bg-navy/10",
    },
  ],
  servicesPage: {
    hero: {
      eyebrow: "Our Services",
      titlePrefix: "Comprehensive",
      titleAccent: "Care",
      description:
        "Explore the wide range of dental treatments available at ABS Dental Clinic, Gazipur.",
    },
    card: {
      buttonLabel: "Service Details",
    },
    cta: {
      titlePrefix: "Take Care of Your",
      titleAccent: "Smile",
      description: "Let us help you achieve the perfect smile you deserve.",
      buttonLabel: "Book Now",
    },
  },
  appointmentPage: {
    hero: {
      eyebrow: "Schedule Now",
      titlePrefix: "Book at",
      titleAccent: "ABS Dental",
      description:
        "Quickly book your appointment online. Our team will reach out to you shortly.",
    },
    sidebar: {
      helpTitle: "Need Help?",
      callUsLabel: "Call Us",
      workingHoursLabel: "Office Hours",
      locationLabel: "Our Office",
      whyTitle: "Why ABS Dental?",
      trustTitle: "Safe & Professional",
      trustDescription: "Your safety is our priority",
    },
    features: [
      "Same-day emergency support",
      "Specialized dentists for kids",
      "Hassle-free online booking",
    ],
  },
  contactPage: {
    hero: {
      eyebrow: "Contact Us",
      titlePrefix: "Visit Our",
      titleAccent: "Clinic",
      description:
        "Find our location in Gazipur or send us a message through the form below.",
    },
    form: {
      title: "Send ABS Dental a Message",
      successTitle: "Message Received!",
      successDescription:
        "We have received your query. Our Gazipur team will call you back.",
      submitLabel: "Send Now",
      sendingLabel: "Please wait...",
      anotherMessageLabel: "Send Again",
      validationError: "Please complete the form",
      labels: {
        name: "Full Name *",
        phone: "Mobile *",
        email: "Email Address",
        message: "Requirement *",
      },
      placeholders: {
        name: "Enter your name",
        phone: "+880 1XXX...",
        email: "example@email.com",
        message: "Tell us what you need",
      },
      successToast: "Message sent!",
    },
    info: {
      title: "Clinic Info",
      addressTitle: "Gazipur Branch",
      phoneTitle: "Direct Line",
      emailTitle: "Official Email",
    },
  },
  footer: {
    brandDescription:
      "Your trusted dental partner in Gazipur. Delivering smiles with care and precision.",
    quickLinksTitle: "Quick Links",
    servicesTitle: "Dental Services",
    contactTitle: "Contact Us",
    copyrightPrefix: "©",
    copyrightSuffix: "ABS Dental Clinic. All rights reserved.",
  },
  contactStrip: {
    eyebrow: "Our Location",
    titlePrefix: "Clinic at",
    titleAccent: "Gazipur",
    addressTitle: "Address",
    phoneTitle: "Phone",
    emailTitle: "Email",
    hoursTitle: "Clinic Hours",
    map: {
      src: "http://googleusercontent.com/maps.google.com/abs-gazipur",
      title: "ABS Dental Clinic Map",
    },
  },
  servicesGrid: {
    eyebrow: "Specialties",
    titlePrefix: "Our Specialized",
    titleAccent: "Treatments",
    viewAllLabel: "View All Services",
    bookButtonLabel: "Book Appointment",
  },
  whyChooseUs: {
    eyebrow: "Why Us",
    titlePrefix: "The ABS",
    titleAccent: "Advantage",
    features: [
      {
        title: "Gazipur's Best Doctors",
        description: "Dedicated specialists from top dental universities.",
      },
      {
        title: "Sterilized Environment",
        description: "We maintain strict hygiene protocols for your safety.",
      },
      {
        title: "Modern Technology",
        description: "Equipped with the latest tools for painless treatment.",
      },
      {
        title: "Central Location",
        description: "Easy to reach from anywhere in Gazipur.",
      },
    ],
  },
  whatsapp: {
    headerTitle: "ABS Dental Support",
    headerSubtitle: "Gazipur Branch",
    greeting: "Hi! Welcome to ABS Dental 👋",
    prompt: "How can we assist your smile today?",
    quickMessagesTitle: "Inquiries",
    quickMessages: [
      { id: 1, text: "I want to book an appointment", emoji: "📅" },
      { id: 2, text: "Emergency dental help", emoji: "🚨" },
    ],
    quickMessagePrefix: "Hello ABS Dental!",
    customMessage: "I'd like to book an appointment at your Gazipur clinic.",
    startChatLabel: "Chat Now",
    ariaLabel: "WhatsApp Contact",
    whatsappNumber: "8801800000000",
    accentColor: "#25D366",
    accentHoverColor: "#20BD5A",
  },
  successModal: {
    title: "Appointment Booked!",
    description: "Our Gazipur clinic will contact you for confirmation.",
    labels: {
      doctor: "Specialist",
      service: "Treatment",
      date: "Scheduled Date",
      time: "Scheduled Time",
    },
    contactPrompt: "Questions? Call ABS Dental at",
    doneLabel: "Done",
  },
  doctorCard: {
    experienceSuffix: "Yrs Exp",
    bookButtonPrefix: "Consult",
    section: {
      eyebrow: "Specialists",
      titlePrefix: "Experienced",
      titleAccent: "Dentists",
      description:
        "Meet our highly qualified dental team serving the Gazipur community.",
      viewAllLabel: "View All Doctors",
    },
  },
  doctorsPage: {
    hero: {
      eyebrow: "Our Team",
      titlePrefix: "Expert Doctors in",
      titleAccent: "Gazipur",
      description:
        "Qualified, professional, and compassionate dentists ready to serve you.",
    },
    stats: [
      { value: "5+", label: "Expert Doctors" },
      { value: "5000+", label: "Total Patients" },
      { value: "12+", label: "Years Experience" },
    ],
    cta: {
      title: "Need a Consultation?",
      description: "Talk to one of our dental experts today.",
      buttonLabel: "Get Appointment",
    },
  },
  adminPage: {
    titlePrefix: "ABS Dental",
    titleAccent: "Admin",
    logoutLabel: "Sign Out",
    stats: [
      { label: "Total Inquiries" },
      { label: "Under Process" },
      { label: "Finished" },
    ],
    appointmentsTitle: "Patient Appointments",
    loadingText: "Loading data....",
    emptyText: "No data available.",
  },
};
