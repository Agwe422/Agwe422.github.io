import { SiteContent } from "./types";
import { slugify } from "../utils/slugify";

export const content: SiteContent = {
  person: {
    name: "Josh Hall",
    email: "Jhall61@calpoly.edu",
    phone: "(669) 261-1868",
    location: "San Jose, CA 95117",
    linkedIn: "https://www.linkedin.com/in/joshwhall408/"
  },
  heroSubtitle:
    "Software Engineer.",
  nav: [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Skills", to: "/skills" },
    { label: "Education", to: "/education" },
    { label: "Leadership", to: "/leadership" },
    { label: "Contact", to: "/contact" },
    { label: "Resume", to: "/resume" }
  ],
  pageTitles: {
    home: "Home",
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    education: "Education",
    leadership: "Leadership",
    contact: "Contact",
    resume: "Resume",
    notFound: "Not Found"
  },
  labels: {
    about: "About",
    featuredProjects: "Featured Projects",
    cta: "Contact",
    email: "Email",
    phone: "Phone",
    location: "Location",
    highlights: "Highlights",
    techStack: "Tech Stack",
    links: "Links",
    linksComingSoon: "Links coming soon",
    media: "Media",
    addScreenshots: "Add screenshots here",
    copyEmail: "Copy email",
    copiedEmail: "Email copied",
    downloadResume: "Download Resume",
    resumeViewer: "Resume Viewer",
    resumeFallback: "If the PDF does not load, use the download link.",
    linkedIn: "LinkedIn",
    notFoundMessage: "Page not found.",
    backHome: "Back to Home",
    coursework: "Relevant Coursework",
    skipToContent: "Skip to content",
    viewDetailsFor: "View details for",
    primaryNav: "Primary navigation"
  },
  ctas: [
    { label: "View Projects", to: "/projects", variant: "primary" },
    { label: "Download Resume", to: "/resume", variant: "secondary" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joshwhall408/",
      variant: "ghost"
    }
  ],
  projects: [
    {
      title:
        "Augmented Reality Aided Vehicle Operation: SURP (Summer Undergraduate Research Program)",
      slug: slugify(
        "Augmented Reality Aided Vehicle Operation: SURP (Summer Undergraduate Research Program)"
      ),
      dates: "June 2025 - Sept 2025",
      type: "Research / AR Prototype",
      stack: ["C#", "Unity", "Microsoft HoloLens 2", "Bluetooth", "OBD-II"],
      bullets: [
        "Connected a Bluetooth OBD-II meter to a phone and transmitted live vehicle telemetry data to a custom Unity application.",
        "Developed an AR prototype in C# on Microsoft HoloLens 2 in Unity to display real-time information in the user's field of view."
      ],
      links: []
    },
    {
      title: "SQL Database Potion Project",
      slug: slugify("SQL Database Potion Project"),
      dates: "March 2025 - June 2025",
      type: "Backend / Database Systems",
      stack: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Supabase",
        "Render",
        "Alembic",
        "SQL"
      ],
      bullets: [
        "Built and deployed a production-ready FastAPI Python backend integrated with PostgreSQL (via Supabase) and hosted on Render, implementing database migrations with Alembic and enforcing data integrity with SQL constraints.",
        "Designed and normalized relational schemas to support dynamic inventory management, custom potion recipes, and order/cart systems with proper foreign key relationships.",
        "Implemented advanced backend patterns, including event-sourced ledgerization and idempotent API endpoints to ensure fault tolerance, consistency, and accurate financial tracking.",
        "Developed analytics and search functionality by adding instrumentation, writing SQL queries for data-driven strategies, and creating efficient search/filter/pagination endpoints for order management."
      ],
      links: []
    },
    {
      title: "Spotify Playlist Manager",
      slug: slugify("Spotify Playlist Manager"),
      dates: "March 2025 - June 2025",
      type: "Front-End SPA",
      stack: [
        "TypeScript",
        "Vite",
        "Lit",
        "LitElement",
        "REST APIs",
        "OAuth",
        "MVU Architecture"
      ],
      bullets: [
        "Developed a single-page application (SPA) using TypeScript, Vite, and Lit, implementing client-side routing to deliver dynamic views without full page reloads.",
        "Integrated RESTful APIs with Spotify data (categories, playlists, and tracks) and designed a global state management system using MVU architecture to ensure consistency across views.",
        "Implemented authentication and protected routes with MVU, managing OAuth tokens securely, and enabling personalized, user-specific playlist features.",
        "Built reusable, type-safe components and views (e.g., playlist browsing, creation, and editing) leveraging LitElement and Mustang's typed messaging system for scalable, maintainable front-end development."
      ],
      links: []
    },
    {
      title: "Mobile Application in Android Studio",
      slug: slugify("Mobile Application in Android Studio"),
      dates: "January 2025 - March 2025",
      type: "Mobile App",
      stack: [
        "Kotlin",
        "Android Studio",
        "Room Database",
        "Kotlin Coroutines",
        "RecyclerView",
        "Photo Picker",
        "Camera"
      ],
      bullets: [
        "Developed an Android app in Kotlin that allows users to compile a list of restaurants and dishes in an easy-to-read and use UI.",
        "Implemented local data persistence using Room Database and background threading with Kotlin coroutines.",
        "Integrated Android Photo Picker and Camera functionality to support image attachments from device storage and live capture.",
        "Designed dynamic UI with RecyclerViews, nested adapters, and image preview overlays, enhancing user experience."
      ],
      links: []
    },
    {
      title: "2D Puzzle Platformer Unity Game (Lumen)",
      slug: slugify("2D Puzzle Platformer Unity Game (Lumen)"),
      dates: "January 2025 - March 2025",
      type: "Game Development",
      stack: ["Unity", "C#", "Tilemap"],
      bullets: [
        "Used the Unity game engine in a group of 5 to create a 2D puzzle platformer.",
        "Used a tilemap to create unique level designs and created a unique light/dark mechanic through the code.",
        "Coded in C# to create an intuitive platforming movement system and an activated sandbag falling effect."
      ],
      links: [
        {
          label: "Itch.io",
          url: "https://agwe422.itch.io/lumen"
        }
      ]
    },
    {
      title: "Inventory Management Web Application",
      slug: slugify("Inventory Management Web Application"),
      dates: "Sept 2023 - June 2024",
      type: "Full-Stack Web App",
      stack: [
        "TypeScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "AWS",
        "Azure"
      ],
      bullets: [
        "Developed an inventory management web application with a team of 5 engineering students.",
        "Managed the backend code and connected code to a Mongoose database (MongoDB) to store and extract data.",
        "Utilized cloud technologies like AWS for image storage and Azure for deployment.",
        "Programmed in TypeScript using React, Node.js, and Express framework."
      ],
      links: []
    }
  ],
  education: {
    school: "California Polytechnic State University (Cal Poly)",
    location: "San Luis Obispo, CA",
    dates: "Sept 2022 - Jun 2026",
    degree: "Bachelor of Science, Software Engineering",
    gpa: "GPA 3.7",
    honors: "Dean's List",
    coursework: [
      "Data Structures & Discrete Structures",
      "Object-Oriented Programming & Design",
      "Introduction to Computer Organization",
      "Software Engineering 1 & 2",
      "Systems Programming",
      "Design and Analysis of Algorithms",
      "Programming Languages",
      "Databases/SQL",
      "Interactive Entertainment Engineering/Game Design",
      "Mobile Application Development",
      "Web Application Development",
      "Artificial Intelligence"
    ]
  },
  skills: {
    languages: {
      label: "Languages",
      items: [
        "Java",
        "Python",
        "Kotlin",
        "C",
        "C#",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Assembly Language",
        "SAS"
      ]
    },
    frameworksTech: {
      label: "Frameworks & Tech",
      items: [
        "React",
        "Express",
        "Node.js",
        "FastAPI",
        "REST",
        "JSON",
        "SQL",
        "PostgreSQL",
        "MongoDB",
        "Alembic",
        "Supabase",
        "Render",
        "AI"
      ]
    },
    toolsPlatforms: {
      label: "Tools & Platforms",
      items: [
        "Git",
        "AWS",
        "Azure",
        "Unity",
        "Godot",
        "Unreal Engine 5",
        "Android Studio",
        "Xcode",
        "Slack",
        "Discord",
        "TinkerCad",
        "3D Printing",
        "Google Suite",
        "PowerPoint",
        "Word",
        "Excel",
        "Outlook"
      ]
    }
  },
  leadership: [
    {
      title: "Leadership in Christian Fellowship, Cal Poly",
      dates: "May 2025 - Present"
    },
    {
      title: "Historian for Nikkei Student Union, Cal Poly",
      dates: "Sept 2023 - June 2025"
    },
    {
      title: "Member of Ultimate Frisbee Team, Cal Poly",
      dates: "Sept 2022 - Present"
    }
  ]
};
