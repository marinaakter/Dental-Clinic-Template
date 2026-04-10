import { Award, Clock, Users } from "lucide-react";

export const clientInfo = {
  brand: {
    name: "Your Agency Name",
    logoPrefix: "Your",
    logoSuffix: "Agency",
    area: "Your Area",
    location: "Your City",
    tagline: "Your Catchy Tagline Goes Here",
    description:
      "Provide a brief description of your client's business here. This will appear in the hero and about sections.",
    awardLabel: "Award/Certification Label",
    awardTitle: "Award Title or Achievement",
    awardSource: "Awarding Organization",
    addressLines: ["Street Address,", "City, Postcode, Country"],
    phone: "+880 1700-000000",
    phoneHref: "tel:+8801700000000",
    email: "info@yourclient.com",
    emailHref: "mailto:info@yourclient.com",
    workingHours: {
      weekdays: "Mon - Thu: 9AM - 6PM",
      friday: "Friday: Closed",
      fullWeekdays: "Monday - Thursday",
      fullWeekdayHours: "9:00 AM - 6:00 PM",
      fridayStatus: "Closed",
    },
    map: {
      src: "https://www.google.com/maps/embed?pb=...",
      title: "Business Location",
    },
    socialLinks: [
      { name: "Facebook", href: "https://facebook.com" },
      { name: "Instagram", href: "https://instagram.com" },
      { name: "Twitter", href: "https://twitter.com" },
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
      { name: "Our Team", path: "/doctors" },
      { name: "Appointment", path: "/appointment" },
      { name: "Contact Us", path: "/contact" },
    ],
    serviceLinks: [
      "Service Name 1",
      "Service Name 2",
      "Service Name 3",
      "Service Name 4",
      "Service Name 5",
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
      // Tailwind CSS structure for the Hero Section
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
      prefix: "Main Headline",
      line: "Focus Word",
      accent: "Action",
      suffix: "Result",
    },
    ctas: {
      primary: "Primary CTA",
      secondary: "Secondary CTA",
    },
    image: {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop",
      alt: "Business Image",
    },
  },
  stats: [
    {
      value: "500+",
      label: "Metrics 1",
      icon: Users,
      iconClassName: "text-teal",
      badgeClassName: "bg-teal/10",
    },
    {
      value: "10+",
      label: "Metrics 2",
      icon: Award,
      iconClassName: "text-gold",
      badgeClassName: "bg-gold/10",
    },
    {
      value: "24/7",
      label: "Metrics 3",
      icon: Clock,
      iconClassName: "text-navy",
      badgeClassName: "bg-navy/10",
    },
  ],
  servicesPage: {
    hero: {
      eyebrow: "Our Expertise",
      titlePrefix: "Our Core",
      titleAccent: "Services",
      description: "Explain the range of services offered by the business.",
    },
    card: {
      buttonLabel: "Service Detail",
    },
    cta: {
      titlePrefix: "Ready to Start",
      titleAccent: "Journey",
      description: "Call to action text at the bottom of the services page.",
      buttonLabel: "Contact Us Now",
    },
  },
  appointmentPage: {
    hero: {
      eyebrow: "Booking Section",
      titlePrefix: "Schedule Your",
      titleAccent: "Visit",
      description: "Information about how the booking process works.",
    },
    sidebar: {
      helpTitle: "Need Help?",
      callUsLabel: "Call Us",
      workingHoursLabel: "Hours",
      locationLabel: "Find Us",
      whyTitle: "Why Us?",
      trustTitle: "Safe & Secure",
      trustDescription: "Your privacy matters",
    },
    features: [
      "Benefit 1 of booking",
      "Benefit 2 of booking",
      "Benefit 3 of booking",
    ],
  },
  contactPage: {
    hero: {
      eyebrow: "Get in Touch",
      titlePrefix: "Contact",
      titleAccent: "Information",
      description:
        "Invite users to reach out through the form or other methods.",
    },
    form: {
      title: "Send a Message",
      successTitle: "Success!",
      successDescription: "Message received, we'll get back to you.",
      submitLabel: "Send Now",
      sendingLabel: "Wait...",
      anotherMessageLabel: "Send Again",
      validationError: "All fields are required",
      labels: {
        name: "Name *",
        phone: "Phone *",
        email: "Email",
        message: "Message *",
      },
      placeholders: {
        name: "Enter name",
        phone: "+880 1XXX...",
        email: "example@mail.com",
        message: "Your message here",
      },
      successToast: "Sent successfully!",
    },
    info: {
      title: "Contact Info",
      addressTitle: "Address",
      phoneTitle: "Phone",
      emailTitle: "Email",
    },
  },
  footer: {
    brandDescription: "Brief brand mission statement for the footer area.",
    quickLinksTitle: "Quick Links",
    servicesTitle: "Services",
    contactTitle: "Contact",
    copyrightPrefix: "©",
    copyrightSuffix: "All rights reserved.",
  },
  contactStrip: {
    eyebrow: "Location",
    titlePrefix: "Visit Our",
    titleAccent: "Office",
    addressTitle: "Address",
    phoneTitle: "Phone",
    emailTitle: "Email",
    hoursTitle: "Business Hours",
    map: {
      src: "https://www.google.com/maps/embed?...",
      title: "Map View",
    },
  },
  servicesGrid: {
    eyebrow: "Offerings",
    titlePrefix: "What We",
    titleAccent: "Provide",
    viewAllLabel: "View All",
    bookButtonLabel: "Book Now",
  },
  whyChooseUs: {
    eyebrow: "Features",
    titlePrefix: "Why Choose",
    titleAccent: "Us",
    features: [
      { title: "Point 1", description: "Detail about point 1." },
      { title: "Point 2", description: "Detail about point 2." },
      { title: "Point 3", description: "Detail about point 3." },
      { title: "Point 4", description: "Detail about point 4." },
    ],
  },
  whatsapp: {
    headerTitle: "Support Chat",
    headerSubtitle: "Online Now",
    greeting: "Hello! 👋",
    prompt: "How can we assist you?",
    quickMessagesTitle: "Suggestions",
    quickMessages: [
      { id: 1, text: "Message Option 1", emoji: "ℹ️" },
      { id: 2, text: "Message Option 2", emoji: "📞" },
    ],
    quickMessagePrefix: "Hello!",
    customMessage: "I'm interested in your services.",
    startChatLabel: "Open WhatsApp",
    ariaLabel: "WhatsApp Link",
    whatsappNumber: "8801700000000",
    accentColor: "#25D366",
    accentHoverColor: "#20BD5A",
  },
  successModal: {
    title: "Request Received!",
    description: "Confirmation message goes here.",
    labels: {
      doctor: "Expert",
      service: "Service",
      date: "Date",
      time: "Time",
    },
    contactPrompt: "Questions? Call",
    doneLabel: "Close",
  },
  doctorCard: {
    experienceSuffix: "Yrs Exp",
    bookButtonPrefix: "Consult",
    section: {
      eyebrow: "Team",
      titlePrefix: "Our",
      titleAccent: "Experts",
      description: "Description about the team members.",
      viewAllLabel: "All Experts",
    },
  },
  doctorsPage: {
    hero: {
      eyebrow: "Experts",
      titlePrefix: "Meet The",
      titleAccent: "Team",
      description: "Intro for the team page.",
    },
    stats: [
      { value: "10+", label: "Experts" },
      { value: "50+", label: "Projects" },
      { value: "100%", label: "Satisfaction" },
    ],
    cta: {
      title: "Need Guidance?",
      description: "Helpful text for guiding the user.",
      buttonLabel: "Get Help",
    },
  },
  adminPage: {
    titlePrefix: "System",
    titleAccent: "Admin",
    logoutLabel: "Sign Out",
    stats: [
      { label: "Total Items" },
      { label: "Processing" },
      { label: "Completed" },
    ],
    appointmentsTitle: "Requests",
    loadingText: "Loading...",
    emptyText: "No data available",
  },
};
