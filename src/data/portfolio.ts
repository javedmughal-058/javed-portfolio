import { Award, Experience, Project, SkillGroup } from '@/types';

export const profile = {
  name: 'Muhammad Javed',
  title: 'Senior Flutter & Mobile Application Developer',
  headline: 'Building offline-first, native-integrated mobile products for real-world operations',
  intro:
    'Senior Flutter developer focused on production-grade Android and iOS applications, offline-first architecture, native Android/Kotlin integrations, hardware and SDK integrations, maps/GIS, enterprise workflows, payments, Firebase, and scalable API-driven products.',
  email: 'javedmughal609@gmail.com',
  phone: '+92 302 4716341',
  location: 'Lahore, Pakistan',
  github: 'https://github.com/javedmughal-058',
  linkedin: 'https://www.linkedin.com/in/muhammad-javed-a3b13b1ba',
  upwork: 'https://www.upwork.com/freelancers/~01b0b1455c6e6d22b7',
  stackoverflow: 'https://stackoverflow.com/users/20158220/muhammad-javed',
};

export const stats = [
  { value: '4+', label: 'Years in Flutter' },
  { value: '10+', label: 'Mobile Products' },
  { value: 'Android + iOS', label: 'Production Delivery' },
  { value: 'Offline-first', label: 'Core Expertise' },
];

export const skills: SkillGroup[] = [
  {
    title: 'Flutter & Mobile Engineering',
    items: ['Flutter', 'Dart', 'Android', 'iOS', 'Responsive UI', 'Localization', 'App Flavors', 'Deep Linking'],
  },
  {
    title: 'State Management & Architecture',
    items: ['GetX', 'Provider', 'BLoC', 'MVC', 'MVP', 'MVVM', 'Clean Architecture', 'Repository Pattern', 'SOLID', 'OOP'],
  },
  {
    title: 'Offline-first & Local Data',
    items: ['ObjectBox', 'SQLite', 'Hive', 'Shared Preferences', 'Offline Sync', 'Conflict-aware Workflows', 'Background Persistence'],
  },
  {
    title: 'Native & Hardware Integrations',
    items: ['Flutter Method Channels', 'Native Kotlin', 'DJI SDK Integration', 'Honeywell Scanner', 'In-app Barcode / QR Scanning', 'Bluetooth Connectivity', 'Biometric Authentication'],
  },
  {
    title: 'Maps, GIS & Location',
    items: ['Google Maps', 'Mapbox', 'Offline Maps', 'GeoJSON', 'GPS / Location Services', 'Geofencing Concepts', 'Map-based Workflows'],
  },
  {
    title: 'Firebase & Cloud Services',
    items: ['Firebase Authentication', 'Cloud Firestore', 'Firebase Messaging', 'Crashlytics', 'Remote Config', 'Analytics', 'Push Notifications'],
  },
  {
    title: 'Backend, APIs & Data',
    items: ['REST APIs', 'Laravel', 'PHP', 'MySQL', 'JSON', 'Third-party APIs', 'Database Design', 'API Integration'],
  },
  {
    title: 'Payments & Product Integrations',
    items: ['PayFast', 'PayStack', 'Stripe', 'Google Sign-In', 'YouTube API', 'Audio / Video Playback', 'Third-party SDKs'],
  },
  {
    title: 'Engineering & Delivery',
    items: ['Git', 'GitHub', 'Debugging', 'Release Management', 'Performance Optimization', 'Agile Collaboration', 'Problem Solving', 'Production Support'],
  },
];

export const experience: Experience[] = [
  {
    role: 'Senior Mobile Developer',
    company: 'Agrilift Private Limited Company',
    companyUrl: 'https://www.linkedin.com/company/agrilift/home/',
    period: 'Mar 2025 – Present',
    type: 'Full-time · Lahore',
    bullets: [
      'Design, maintain, and evolve production Flutter applications with a strong focus on reliability, performance, maintainability, and field usability.',
      'Build offline-first mobile workflows for environments where network connectivity is intermittent, using resilient local persistence and synchronization strategies.',
      'Integrate Flutter with native Android/Kotlin functionality through Method Channels for platform-specific capabilities, hardware access, and native SDK integration.',
      'Work on DJI native SDK integration for drone-related mobile workflows and bridge native capabilities into Flutter applications.',
      'Develop location-heavy experiences using Google Maps, Mapbox, offline maps, GeoJSON, GPS, and map-driven field workflows.',
      'Deliver new UI/UX, backend integrations, architecture improvements, debugging, optimization, and release-ready features across the application lifecycle.',
    ],
    tech: ['Flutter', 'Dart', 'Kotlin', 'Method Channels', 'DJI SDK', 'Mapbox', 'Google Maps', 'GeoJSON', 'Offline-first', 'REST APIs'],
  },
  {
    role: 'Freelance Project Developer · Mobile & Web',
    company: 'Julmon Empire',
    companyUrl: 'https://www.linkedin.com/company/julmon-empire/home/',
    period: 'Ongoing · Project-based',
    type: 'Freelance · Remote',
    bullets: [
      'Contribute to client-facing mobile products and supporting web administration portals across multiple business domains.',
      'Develop Flutter applications and integrate backend APIs, authentication, notifications, payments, media, maps, and production-ready user flows.',
      'Collaborate on feature planning, implementation, troubleshooting, release support, and ongoing product improvements.',
      'Project experience includes Joshua Sangweni, CropJoy, CropJoy Farmer, and additional client solutions delivered through Julmon Empire.',
    ],
    tech: ['Flutter', 'Dart', 'REST APIs', 'Firebase', 'Payments', 'Web Admin Portals', 'Client Delivery'],
  },
  {
    role: 'Freelance Mobile Application Developer',
    company: 'Upwork',
    companyUrl: 'https://www.linkedin.com/company/upwork/home/',
    period: 'Project-based',
    type: 'Freelance · Remote',
    bullets: [
      'Completed freelance software projects through Upwork, delivering mobile application features and client-requested improvements from requirements through handover.',
      'Worked independently on Flutter development, API integrations, debugging, UI implementation, third-party integrations, and production-oriented delivery.',
      'Managed client communication, requirement clarification, iteration, and delivery for remote freelance engagements.',
    ],
    tech: ['Flutter', 'Dart', 'REST APIs', 'Client Delivery', 'Remote Collaboration', 'Freelancing'],
  },
  {
    role: 'Independent Product Developer',
    company: 'Evolix Technologies',
    period: 'Present · Product in development',
    type: 'Own Product · Umrahforu',
    bullets: [
      'Developing Umrahforu as an organization-based product under Evolix Technologies, with ownership across mobile development, backend integration, data design, hosting, deployment, and technical product decisions.',
      'Building the Flutter mobile application alongside a Laravel and MySQL backend architecture.',
      'Managing hosting and environment configuration through Namecheap while coordinating the broader development and deployment lifecycle.',
      'Own the technical direction across mobile, backend integration, testing, release preparation, and iterative product delivery.',
    ],
    tech: ['Flutter', 'Laravel', 'MySQL', 'REST APIs', 'Namecheap Hosting', 'Product Development'],
  },
  {
    role: 'Flutter Developer',
    company: 'US Group',
    companyUrl: 'https://www.linkedin.com/company/usgroup/home/',
    period: 'Sep 2022 – Mar 2025',
    type: 'Full-time · Lahore',
    bullets: [
      'Developed and maintained production Flutter applications for Android and iOS across enterprise, retail, workforce, and operational use cases.',
      'Collaborated with cross-functional teams to analyze requirements, prioritize features, and deliver new modules from implementation through QA and release.',
      'Improved application performance, maintained existing codebases, resolved production issues, and supported long-term feature evolution.',
      'Built and maintained RESTful backend APIs using Laravel and integrated third-party services, maps, Firebase, authentication, and enterprise workflows.',
      'Contributed to applications including USG Smart Office, LEEDS FMS, Kamil Emaan, MySapphire, and other internal/client-facing solutions.',
    ],
    tech: ['Flutter', 'Dart', 'Laravel', 'REST APIs', 'Google Maps', 'Firebase', 'MySQL', 'Enterprise Apps'],
  },
  {
    role: 'Flutter Intern',
    company: 'SkillzUPP Technologies',
    period: 'Aug 2022 – Sep 2022',
    type: 'Internship · Vehari',
    bullets: [
      'Worked with senior developers on complex application designs and production-oriented Flutter development practices.',
      'Contributed to application features using Firebase, local storage, push notifications, and reusable mobile UI components.',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Local Storage', 'Push Notifications'],
  },
];

export const projects: Project[] = [
   {
    title: 'Umrahforu',
    subtitle: 'Evolix Technologies - Organization Platform',
    description:
      'An organization-based product being developed under Evolix Technologies. The Flutter mobile application integrates with a Laravel/MySQL backend, while hosting, deployment, environment configuration, and ongoing technical product development are managed as part of the same lifecycle.',
    image: '/images/projects/Umrahforu.png',
    tech: ['Flutter', 'Laravel', 'MySQL', 'REST APIs', 'Namecheap', 'Product Development'],
    featured: true,
    private: false,
  },
  {
    title: 'AlBaraka Holidays',
    subtitle: 'Client Project · Travel Platform',
    description:
      'Client application work involving Flutter mobile development and backend API integration, with Laravel services backed by a MySQL database.',
    image: '/images/projects/Albaraka Holidays.png',
    tech: ['Flutter', 'Laravel', 'MySQL', 'REST APIs', 'Travel'],
    private: false,
  },
  {
    title: 'AppScope - Inspector',
    subtitle: 'Developer Tool - App Inspection Utility',
    description:
      'Developer-oriented inspection utility designed around app analysis workflows, organized technical information, and clear mobile interfaces for reviewing application details efficiently.',
    image: '/images/projects/AppScope - Inspector.png',
    tech: ['Flutter', 'Dart', 'Developer Tools', 'Inspection Workflows', 'Mobile UI/UX'],
    private: false,
  },
  {
    title: 'CareerPilot - Resume Builder',
    subtitle: 'Productivity - Resume Builder',
    description:
      'Resume-building mobile product focused on structured profile entry, guided resume creation, professional document presentation, and a smooth user experience for preparing career materials.',
    image: '/images/projects/CareerPilot - Resume Builder.png',
    tech: ['Flutter', 'Dart', 'Resume Builder', 'Productivity', 'Mobile UI/UX', 'Document Workflows'],
    private: false,
  },
  {
    title: 'EvoFit',
    subtitle: 'Fitness - Mobile Training Platform',
    description:
      'Fitness-focused mobile application supporting workout discovery, training routines, progress-oriented user flows, and API-driven content delivery for a polished health and fitness experience.',
    image: '/images/projects/EvoFit.png',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Fitness', 'Mobile UI/UX', 'Client Delivery'],
    private: false,
  },

  {
    title: 'Agrilift',
    subtitle: 'Field Operations · Maps · DJI Native Integration',
    description:
      'Production mobile engineering across offline-first field workflows, Google Maps and Mapbox experiences, GeoJSON-driven map data, native Android/Kotlin integration through Flutter Method Channels, and DJI SDK capabilities. Focused on reliable mobile behavior in field environments with intermittent connectivity and platform-specific hardware requirements.',
    image: '/images/projects/Agrilift.png',
    tech: ['Flutter', 'Kotlin', 'Method Channels', 'DJI SDK', 'Mapbox', 'Google Maps', 'GeoJSON', 'Offline Maps'],
    featured: true,
    private: true,
  },

  {
    title: 'Joshua Sangweni',
    subtitle: 'Lifestyle · Ministry & Media App',
    description:
      'Production Flutter app for teachings, daily devotions, articles, audio/video content, books, and ministry resources. Work includes Google Sign-In, push notifications, PayFast payment flows, YouTube integration, and rich audio/video playback experiences.',
    image: '/images/projects/Joshua Sangweni - 1.png',
    tech: ['Flutter', 'Firebase', 'Push Notifications', 'PayFast', 'YouTube API', 'Media'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.julmon.joshua_sangweni_user_app&hl=en' },
      { label: 'App Store', url: 'https://apps.apple.com/us/app/joshua-sangweni/id6505020798' },
    ],
  },
  {
    title: 'CropJoy',
    subtitle: 'Food & Drink · Farm-to-Door Marketplace',
    description:
      'Consumer marketplace connecting customers with local farmers for fresh produce and meat, with ordering, delivery-area/location workflows, order tracking, communication, and farm-to-door commerce.',
    image: '/images/projects/CropJoy.png',
    tech: ['Flutter', 'Maps', 'REST APIs', 'Payments', 'Location', 'Marketplace'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.julmon.cropjoy&hl=en' },
      { label: 'App Store', url: 'https://apps.apple.com/za/app/cropjoy/id6743083392' },
    ],
  },
  {
    title: 'CropJoy Farmer',
    subtitle: 'Business · Farmer Marketplace App',
    description:
      'Farmer-side application supporting produce selling, order management, customer communication, bidding, invoices, chat, packhouse navigation, and payment-oriented workflows.',
    image: '/images/projects/CropJoy Farmer.png',
    tech: ['Flutter', 'REST APIs', 'Chat', 'Payments', 'Orders', 'Business'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.julmon.crop_joy_farmer&hl=en' },
      { label: 'App Store', url: 'https://apps.apple.com/za/app/cropjoy-farmer/id6743001978' },
    ],
  },
  {
    title: 'Square15',
    subtitle: 'Client Project · Multi-vendor Services Platform',
    description:
      'Multi-vendor service application with service discovery and assignment flows, PayFast payments, push notifications, authentication, Google Sign-In, and Firebase-backed mobile integrations.',
    image: '/images/projects/Square-15.png',
    tech: ['Flutter', 'Firebase', 'PayFast', 'Push Notifications', 'Google Sign-In', 'REST APIs'],
    private: false,
  },
  {
    title: 'EasiRide',
    subtitle: 'Client Project · Mobile Application',
    description:
      'Client-focused Flutter application work involving feature development, API-driven workflows, debugging, and mobile product delivery across the implementation lifecycle.',
    image: '/images/projects/EaziRide.png',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Mobile Development', 'Client Delivery'],
    private: false,
  },

  {
    title: 'MySapphire',
    subtitle: 'Enterprise · Employee Self Service & Inventory',
    description:
      'Enterprise mobile application for Sapphire employees and partners, providing employee self-service, company policies, inventory workflows, notifications, secure authentication, and barcode-based inventory functionality.',
    image: '/images/projects/MySapphire.png',
    tech: ['Flutter', 'Enterprise', 'Biometrics', 'Barcode Scanning', 'Inventory', 'Notifications', 'REST APIs'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.mysapphire.app&hl=en' },
    ],
    private: true,
  },
  {
    title: 'CoreWMS',
    subtitle: 'Offline-first Warehouse Management · Scanning & Operations',
    description:
      'Job-based warehouse application designed to continue operating without network connectivity. Built around ObjectBox-backed local persistence and operational modules for Putaway, Picking, and Distribution, with scanning through both an in-app scanner and Honeywell handheld devices. The product is designed for dependable warehouse execution, local-first data handling, and synchronization when connectivity becomes available.',
    image: '/images/projects/coreWMS.png',
    tech: ['Flutter', 'ObjectBox', 'Offline-first', 'Honeywell Scanner', 'Barcode / QR', 'Putaway', 'Picking', 'Distribution'],
    featured: true,
    private: true,
  },
  
 
  
  
  
  {
    title: 'USG Smart Office',
    subtitle: 'Enterprise · Employee Productivity',
    description:
      'Enterprise mobile app for employee self-service, decision-support and approval workflows, appointments, policies, task planning, and corporate communication.',
    image: '/images/projects/USG Smart Office.png',
    tech: ['Flutter', 'REST APIs', 'Approvals', 'Enterprise', 'Notifications', 'Employee Services'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.usapparelandtextiles.us_app&hl=en' },
      { label: 'App Store', url: 'https://apps.apple.com/za/app/usg-smart-office/id1609033249' },
    ],
    private: true,
  },
  {
    title: 'LEEDS FMS',
    subtitle: 'Fleet Management · Employee & Driver App',
    description:
      'Fleet-management application supporting employee and driver workflows, Google Maps/location features, biometric authentication, localization, and operational trip, expense, and accident information.',
    image: '/images/projects/LEEDS FMS.png',
    tech: ['Flutter', 'Google Maps', 'Location', 'Biometrics', 'Localization', 'Laravel API'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.leedsfms.leeds_app&hl=en' },
    ],
    private: true,
  },
  {
    title: 'Kamil Emaan',
    subtitle: 'Faith & Utility · Salah Companion',
    description:
      'Mobile application featuring prayer times, daily ayat, Qibla direction, Salah record keeping, and related faith-focused utility workflows.',
    image: '/images/projects/Kamil Emaan.png',
    tech: ['Flutter', 'Location', 'Qibla', 'Local Storage', 'REST APIs', 'Notifications'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.usgroup.kamilemaan_app&hl=en' },
      { label: 'App Store', url: 'https://apps.apple.com/in/app/kamil-emaan/id1569546858' },
    ],
    private: true,
  },

  
  
  {
    title: 'Kaisi WiFi',
    subtitle: 'Client Project · Mobile Application',
    description:
      'Client mobile application engagement covering Flutter feature development, application integration, debugging, and production-oriented delivery.',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Mobile UI/UX', 'Client Delivery'],
    private: true,
  },
  
  {
    title: 'Blood Donation',
    subtitle: 'University Project · Community & Donor Platform',
    description:
      'University software project centered on digital blood-donation workflows and applying core mobile/software engineering concepts to a real-world community use case.',
    tech: ['Mobile Development', 'Database', 'Authentication', 'Academic Project'],
    private: true,
  },
  {
    title: 'Online Vehicle Maintenance',
    subtitle: 'University Project · Service Management',
    description:
      'University project designed around online vehicle-maintenance and service-management workflows, developed as part of academic software engineering practice.',
    tech: ['Application Development', 'Database', 'Service Workflows', 'Academic Project'],
    private: true,
  },
];

export const awards: Award[] = [
  { icon: '✦', title: 'Introduction to Flutter', company: 'Simplilearn', date: 'Sep 2024' },
  { icon: '★', title: 'Flutter Animation', company: 'MindLuster', date: 'Aug 2023' },
  { icon: '✦', title: 'OOP Concepts in C++', company: 'Great Learning', date: 'Aug 2022' },
  { icon: '★', title: 'Soft Skills for IT', company: 'Great Learning', date: 'Aug 2022' },
  { icon: '✦', title: 'SQL', company: 'SoloLearn', date: 'Aug 2020' },
];
