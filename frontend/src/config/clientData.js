import { Award, Clock, Users } from "lucide-react";

export const clientInfo = {
  brand: {
    name: "Arfan Dental Clinic",
    logoPrefix: "Arfan",
    logoSuffix: "Dental Clinic",
    area: "Mirpur", // উদাহরণ হিসেবে মিরপুর দিলাম, প্রয়োজন অনুযায়ী পরিবর্তন করতে পারেন
    location: "Mirpur, Dhaka",
    tagline: "Smile with Confidence at Arfan Dental",
    description:
      "Arfan Dental Clinic provides comprehensive oral healthcare with a focus on patient comfort and long-term dental wellness using state-of-the-art facilities.",
    awardLabel: "Patient Choice",
    awardTitle: "Most Trusted Dental Clinic 2025",
    awardSource: "Healthcare Review BD",
    addressLines: ["Plot 10, Block C, Main Road,", "Mirpur 10, Dhaka 1216"],
    phone: "+880 1900-000000",
    phoneHref: "tel:+8801900000000",
    email: "contact@arfandental.com",
    emailHref: "mailto:contact@arfandental.com",
    workingHours: {
      weekdays: "Sat - Thu: 4PM - 10PM", // চেম্বারের সময় সাধারণত বিকেলে হয়, তাই এটি দিলাম
      friday: "Friday: 10AM - 1PM",
      fullWeekdays: "Saturday - Thursday",
      fullWeekdayHours: "4:00 PM - 10:00 PM",
      fridayStatus: "Friday: 10:00 AM - 1:00 PM",
    },
    map: {
      src: "http://googleusercontent.com/maps.google.com/arfan-location",
      title: "Arfan Dental Clinic Location",
    },
    socialLinks: [
      { name: "Facebook", href: "https://facebook.com/arfandental" },
      { name: "Instagram", href: "https://instagram.com/arfandental" },
      { name: "Youtube", href: "https://youtube.com/arfandental" },
    ],
    navigation: {
      links: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Doctors", path: "/doctors" },
        { name: "Contact", path: "/contact" },
      ],
      appointmentLabel: "Book Now",
    },
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Our Specialists", path: "/doctors" },
      { name: "Appointment", path: "/appointment" },
      { name: "Contact", path: "/contact" },
    ],
    serviceLinks: [
      "Dental Fillings",
      "Teeth Alignment",
      "Gum Surgery",
      "Wisdom Tooth Extraction",
      "Oral Cancer Screening",
      "Dental X-Ray",
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
      prefix: "Compassionate",
      line: "Dental",
      accent: "Care",
      suffix: "For You",
    },
    ctas: {
      primary: "Book Visit",
      secondary: "View Services",
    },
    image: {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop",
      alt: "Arfan Dental Clinic",
    },
  },
  stats: [
    {
      value: "8K+",
      label: "Smiles Restored",
      icon: Users,
      iconClassName: "text-teal",
      badgeClassName: "bg-teal/10",
    },
    {
      value: "10+",
      label: "Expert Doctors",
      icon: Award,
      iconClassName: "text-gold",
      badgeClassName: "bg-gold/10",
    },
    {
      value: "99%",
      label: "Satisfaction",
      icon: Clock,
      iconClassName: "text-navy",
      badgeClassName: "bg-navy/10",
    },
  ],
  servicesPage: {
    hero: {
      eyebrow: "Expert Care",
      titlePrefix: "Modern Dental",
      titleAccent: "Solutions",
      description:
        "Advanced treatments designed to restore and maintain your perfect smile.",
    },
    card: {
      buttonLabel: "View More",
    },
    cta: {
      titlePrefix: "Ready for a Better",
      titleAccent: "Smile?",
      description:
        "Schedule your consultation with Arfan Dental experts today.",
      buttonLabel: "Appointment Now",
    },
  },
  appointmentPage: {
    hero: {
      eyebrow: "Online Booking",
      titlePrefix: "Easy",
      titleAccent: "Appointment",
      description:
        "Book your slot in just a few clicks. We look forward to seeing you.",
    },
    sidebar: {
      helpTitle: "Got Questions?",
      callUsLabel: "Direct Call",
      workingHoursLabel: "Chamber Hours",
      locationLabel: "Our Address",
      whyTitle: "Why Arfan Dental?",
      trustTitle: "Safe & Secure",
      trustDescription: "Your data is encrypted",
    },
    features: [
      "Minimal waiting time",
      "Hygienic and safe environment",
      "Highly experienced dentists",
    ],
  },
  contactPage: {
    hero: {
      eyebrow: "Get in Touch",
      titlePrefix: "We'd Love to",
      titleAccent: "Hear",
      description: "Have a dental emergency or a general query? Reach out now.",
    },
    form: {
      title: "Drop us a Message",
      successTitle: "Received!",
      successDescription: "We will contact you very shortly for confirmation.",
      submitLabel: "Send Message",
      sendingLabel: "Sending...",
      anotherMessageLabel: "Send New Message",
      validationError: "Fill in all fields please",
      labels: {
        name: "Patient Name *",
        phone: "Mobile No *",
        email: "Email (Optional)",
        message: "Your Query *",
      },
      placeholders: {
        name: "Enter full name",
        phone: "01XXX-XXXXXX",
        email: "your@email.com",
        message: "Describe your dental issue",
      },
      successToast: "Sent!",
    },
    info: {
      title: "Clinic Details",
      addressTitle: "Mirpur Branch",
      phoneTitle: "Phone Number",
      emailTitle: "Email Support",
    },
  },
  footer: {
    brandDescription:
      "Premium dental care providing painless treatments and aesthetic results in Mirpur.",
    quickLinksTitle: "Navigation",
    servicesTitle: "Treatments",
    contactTitle: "Reach Us",
    copyrightPrefix: "©",
    copyrightSuffix: "Arfan Dental Clinic.",
  },
  contactStrip: {
    eyebrow: "Location",
    titlePrefix: "Find Us in",
    titleAccent: "Mirpur",
    addressTitle: "Address",
    phoneTitle: "Call Us",
    emailTitle: "Email Us",
    hoursTitle: "Chamber Hours",
    map: {
      src: "http://googleusercontent.com/maps.google.com/arfan-mirpur",
      title: "Arfan Dental Clinic Map",
    },
  },
  servicesGrid: {
    eyebrow: "What We Do",
    titlePrefix: "Our Specialized",
    titleAccent: "Services",
    viewAllLabel: "All Services",
    bookButtonLabel: "Book Now",
  },
  whyChooseUs: {
    eyebrow: "Our Pride",
    titlePrefix: "Why Trust",
    titleAccent: "Arfan",
    features: [
      {
        title: "Specialized Care",
        description: "Every patient gets a customized treatment plan.",
      },
      {
        title: "Zero Pain Tech",
        description: "We use advanced techniques to minimize discomfort.",
      },
      {
        title: "Expert Diagnosis",
        description: "Accurate diagnosis leads to long-lasting results.",
      },
      {
        title: "Patient Comfort",
        description: "Friendly environment to make you feel at home.",
      },
    ],
  },
  whatsapp: {
    headerTitle: "Arfan Dental",
    headerSubtitle: "Online Now",
    greeting: "Hello from Arfan Dental! 👋",
    prompt: "How can we help you today?",
    quickMessagesTitle: "Inquiries",
    quickMessages: [
      { id: 1, text: "I want an appointment", emoji: "🦷" },
      { id: 2, text: "Price for Scaling", emoji: "💰" },
    ],
    quickMessagePrefix: "Hi Arfan Dental!",
    customMessage: "I need to talk to a dentist.",
    startChatLabel: "WhatsApp Now",
    ariaLabel: "WhatsApp Contact",
    whatsappNumber: "8801900000000",
    accentColor: "#25D366",
    accentHoverColor: "#20BD5A",
  },
  successModal: {
    title: "Request Submitted!",
    description: "We will call you to confirm the time slot.",
    labels: {
      doctor: "Dentist",
      service: "Procedure",
      date: "Date",
      time: "Preferred Time",
    },
    contactPrompt: "Emergency? Call us at",
    doneLabel: "Done",
  },
  doctorCard: {
    experienceSuffix: "Yrs Exp",
    bookButtonPrefix: "Book",
    section: {
      eyebrow: "Doctors",
      titlePrefix: "Our Dental",
      titleAccent: "Specialists",
      description:
        "Our surgeons and consultants are here to ensure your smile is healthy.",
      viewAllLabel: "All Doctors",
    },
  },
  doctorsPage: {
    hero: {
      eyebrow: "Specialists",
      titlePrefix: "The Team at",
      titleAccent: "Arfan Dental",
      description: "Dedicated to excellence in every dental procedure.",
    },
    stats: [
      { value: "10+", label: "Doctors" },
      { value: "8000+", label: "Happy Faces" },
      { value: "15+", label: "Awards Won" },
    ],
    cta: {
      title: "Want to talk to a Doctor?",
      description:
        "Book an initial consultation to discuss your dental health.",
      buttonLabel: "Book Consultation",
    },
  },
  adminPage: {
    titlePrefix: "Arfan Dental",
    titleAccent: "Admin",
    logoutLabel: "Sign Out",
    stats: [
      { label: "New Leads" },
      { label: "In Review" },
      { label: "Completed" },
    ],
    appointmentsTitle: "Lead List",
    loadingText: "Loading...",
    emptyText: "No leads available",
  },
};
