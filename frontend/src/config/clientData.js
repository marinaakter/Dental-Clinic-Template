import { Award, Clock, Users } from "lucide-react";

export const clientInfo = {
  brand: {
    name: "Sabbir Dental Clinic",
    logoPrefix: "Sabbir",
    logoSuffix: "Dental Clinic",
    area: "Location Area", // এখানে ক্লায়েন্টের নির্দিষ্ট এলাকার নাম দিন (যেমন: Mirpur)
    location: "City Name, Dhaka", // এখানে শহরের নাম দিন
    tagline: "Your Family's Partner in Dental Wellness",
    description:
      "Sabbir Dental Clinic offers comprehensive dental care with a focus on patient comfort and advanced treatment options to ensure your perfect smile.",
    awardLabel: "Excellence in Care",
    awardTitle: "Best Patient Experience Award 2025",
    awardSource: "Healthcare Review BD",
    addressLines: ["Clinic Address Line 1,", "City/Area Name, Bangladesh"],
    phone: "+880 1700-000000", // ক্লায়েন্টের ফোন নম্বর এখানে দিন
    phoneHref: "tel:+8801700000000",
    email: "info@sabbirdental.com",
    emailHref: "mailto:info@sabbirdental.com",
    workingHours: {
      weekdays: "Sat - Thu: 9AM - 8PM",
      friday: "Friday: Closed",
      fullWeekdays: "Saturday - Thursday",
      fullWeekdayHours: "9:00 AM - 8:00 PM",
      fridayStatus: "Closed",
    },
    map: {
      src: "http://googleusercontent.com/maps.google.com/sabbir-location", // গুগল ম্যাপের এমবেড লিঙ্ক
      title: "Sabbir Dental Clinic Location",
    },
    socialLinks: [
      { name: "Facebook", href: "https://facebook.com/sabbirdental" },
      { name: "Instagram", href: "https://instagram.com/sabbirdental" },
      { name: "Twitter", href: "https://twitter.com/sabbirdental" },
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
      "Full Dental Checkup",
      "Laser Teeth Whitening",
      "Braces & Invisalign",
      "Advanced Root Canal",
      "Dental Implants",
      "Kids Dentistry",
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
      accent: "By",
      suffix: "Dr. Sabbir",
    },
    ctas: {
      primary: "Book Visit",
      secondary: "Our Expertise",
    },
    image: {
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=1000&fit=crop",
      alt: "Sabbir Dental Clinic Interior",
    },
  },
  stats: [
    {
      value: "3K+",
      label: "Happy Smiles",
      icon: Users,
      iconClassName: "text-teal",
      badgeClassName: "bg-teal/10",
    },
    {
      value: "8+",
      label: "Years Experience",
      icon: Award,
      iconClassName: "text-gold",
      badgeClassName: "bg-gold/10",
    },
    {
      value: "4.9",
      label: "Avg Rating",
      icon: Clock,
      iconClassName: "text-navy",
      badgeClassName: "bg-navy/10",
    },
  ],
  servicesPage: {
    hero: {
      eyebrow: "What We Do",
      titlePrefix: "Modern Dental",
      titleAccent: "Solutions",
      description:
        "Step into Sabbir Dental Clinic for a modern, pain-free dental experience tailored to your family's needs.",
    },
    card: {
      buttonLabel: "Explore Service",
    },
    cta: {
      titlePrefix: "Let's Brighten Your",
      titleAccent: "World",
      description: "Schedule your consultation today with our dental experts.",
      buttonLabel: "Make Appointment",
    },
  },
  appointmentPage: {
    hero: {
      eyebrow: "Book Your Slot",
      titlePrefix: "Secure Your",
      titleAccent: "Appointment",
      description:
        "Use our simple booking system to pick a time that works best for you.",
    },
    sidebar: {
      helpTitle: "Need Assistance?",
      callUsLabel: "Call Us",
      workingHoursLabel: "Clinic Hours",
      locationLabel: "Our Location",
      whyTitle: "Why Sabbir Dental?",
      trustTitle: "Safe & Sanitized",
      trustDescription: "Strict sterilization protocols",
    },
    features: [
      "Digital X-ray facility",
      "Emergency pain relief",
      "Detailed dental counseling",
    ],
  },
  contactPage: {
    hero: {
      eyebrow: "Reach Out",
      titlePrefix: "Get In",
      titleAccent: "Touch",
      description:
        "Have a dental emergency or a general query? We are here to help.",
    },
    form: {
      title: "Message Sabbir Dental",
      successTitle: "Received!",
      successDescription:
        "Thank you for reaching out. We will call you within the next hour.",
      submitLabel: "Send Message",
      sendingLabel: "Sending...",
      anotherMessageLabel: "Send New Message",
      validationError: "All fields are required",
      labels: {
        name: "Name *",
        phone: "Mobile No *",
        email: "Email Address",
        message: "Your Query *",
      },
      placeholders: {
        name: "Full name",
        phone: "+880 1...",
        email: "your@email.com",
        message: "How can we help you?",
      },
      successToast: "Message sent successfully!",
    },
    info: {
      title: "Clinic Contact",
      addressTitle: "Visit Us",
      phoneTitle: "Direct Line",
      emailTitle: "Email Us",
    },
  },
  footer: {
    brandDescription:
      "Delivering professional and compassionate dental care. Your comfort is our priority.",
    quickLinksTitle: "Quick Navigation",
    servicesTitle: "Popular Services",
    contactTitle: "Contact Info",
    copyrightPrefix: "©",
    copyrightSuffix: "Sabbir Dental Clinic. Built with Excellence.",
  },
  contactStrip: {
    eyebrow: "Find Us",
    titlePrefix: "Our Clinic in",
    titleAccent: "The City",
    addressTitle: "Location",
    phoneTitle: "Phone",
    emailTitle: "Email",
    hoursTitle: "Open Hours",
    map: {
      src: "http://googleusercontent.com/maps.google.com/sabbir-location",
      title: "Sabbir Dental Clinic Map",
    },
  },
  servicesGrid: {
    eyebrow: "Expertise",
    titlePrefix: "Professional Dental",
    titleAccent: "Treatments",
    viewAllLabel: "All Services",
    bookButtonLabel: "Book Now",
  },
  whyChooseUs: {
    eyebrow: "Our Difference",
    titlePrefix: "Why Choose",
    titleAccent: "Sabbir Dental",
    features: [
      {
        title: "Qualified Specialists",
        description: "Experienced dentists with specialized training.",
      },
      {
        title: "Painless Experience",
        description: "We use advanced techniques for a stress-free visit.",
      },
      {
        title: "Patient First",
        description: "Individualized care plans for every patient.",
      },
      {
        title: "Clean & Safe",
        description: "High standards of hygiene and patient safety.",
      },
    ],
  },
  whatsapp: {
    headerTitle: "Sabbir Dental Clinic",
    headerSubtitle: "Support Team",
    greeting: "Hi! How can we help you? 👋",
    prompt: "Looking for an appointment or have a question?",
    quickMessagesTitle: "Suggestions",
    quickMessages: [
      { id: 1, text: "I need to book a checkup", emoji: "🦷" },
      { id: 2, text: "What is the cost of scaling?", emoji: "💰" },
    ],
    quickMessagePrefix: "Hello Sabbir Dental!",
    customMessage: "I'd like to book a consultation at your clinic.",
    startChatLabel: "Start Chat",
    ariaLabel: "WhatsApp Support",
    whatsappNumber: "8801700000000",
    accentColor: "#25D366",
    accentHoverColor: "#20BD5A",
  },
  successModal: {
    title: "Appointment Requested!",
    description: "Dr. Sabbir's team will call you shortly to confirm.",
    labels: {
      doctor: "Dentist",
      service: "Service",
      date: "Date",
      time: "Time Slot",
    },
    contactPrompt: "Questions? Call Sabbir Dental at",
    doneLabel: "Great",
  },
  doctorCard: {
    experienceSuffix: "Years",
    bookButtonPrefix: "Consult With",
    section: {
      eyebrow: "Our Team",
      titlePrefix: "Meet Our",
      titleAccent: "Specialists",
      description: "A team of professionals dedicated to your oral health.",
      viewAllLabel: "See All Doctors",
    },
  },
  doctorsPage: {
    hero: {
      eyebrow: "The Experts",
      titlePrefix: "Certified Dental",
      titleAccent: "Specialists",
      description:
        "Qualified dentists working together to provide top-notch care.",
    },
    stats: [
      { value: "4+", label: "Expert Doctors" },
      { value: "3500+", label: "Satisfied Patients" },
      { value: "8+", label: "Years in Service" },
    ],
    cta: {
      title: "Have a Specific Problem?",
      description:
        "Our experts are ready to listen and solve your dental issues.",
      buttonLabel: "Request Callback",
    },
  },
  adminPage: {
    titlePrefix: "Sabbir Dental",
    titleAccent: "Admin Portal",
    logoutLabel: "Sign Out",
    stats: [
      { label: "Total Bookings" },
      { label: "Waiting" },
      { label: "Done" },
    ],
    appointmentsTitle: "Current Appointments",
    loadingText: "Fetching data...",
    emptyText: "No records found.",
  },
};
