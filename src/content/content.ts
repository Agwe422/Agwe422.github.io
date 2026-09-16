import { SiteContent } from "./types";
import { slugify } from "../utils/slugify";

export const content: SiteContent = {
  person: {
    name: "Josh Hall",
    email: "jhall61@calpoly.edu",
    phone: "(669) 261-1868",
    location: "San Jose, CA",
    linkedIn: "https://www.linkedin.com/in/joshwhall408/",
    github: "https://github.com/agwe422",
    itchIo: "https://agwe422.itch.io/"
  },
  heroTagline: "Software Engineer - backend systems, deep learning, and VR.",
  aboutText:
    "Software engineering student at Cal Poly in the blended B.S./M.S. program, with backend and systems experience from an internship at Hewlett Packard Enterprise Storage. Co-author of a VR research paper submitted to ACM CHI PLAY 2026. Special interest in Deep Learning, Machine Learning, Computer Vision, and AI. Experienced across Python backend services, deep learning in PyTorch, full stack applications, and Unity and VR development.",
  nav: [
    { label: "Home", to: "/" },
    { label: "Experience", to: "/experience" },
    { label: "Projects", to: "/projects" },
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
    github: "GitHub",
    itchIo: "itch.io",
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
    disciplines: "Disciplines",
    filters: "Filter by tags",
    searchTags: "Search tags",
    searchTagsPlaceholder: "Search tags",
    clearFilters: "Clear filters",
    selectedTags: "Selected tags",
    noProjects: "No projects match the selected tags.",
    experienceTimeline: "Timeline",
    viewAllExperience: "View All Experience",
    onThisPage: "On this page",
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
    },
    {
      label: "Contact",
      to: "/contact",
      variant: "ghost"
    }
  ],
  experience: [
    {
      role: "Software Engineering Intern",
      org: "Hewlett Packard Enterprise, Storage",
      slug: slugify("Hewlett Packard Enterprise Storage Software Engineering Intern"),
      location: "San Jose, CA",
      dates: "June 2026 - Aug 2026",
      focus: "Backend / Systems",
      stack: [
        "Python",
        "C++",
        "gRPC",
        "Protocol Buffers",
        "pytest",
        "Object-Oriented Design",
        "CLI Design"
      ],
      bullets: [
        "Rewrote a 2,700-line legacy C++ diagnostics CLI for an enterprise storage platform as an object oriented Python tool and client library, cutting the lines of code to edit the same command to 190 lines (93% less code) while adding functionality.",
        "Designed a resource-verb command grammar modeled on industry-standard cloud CLIs, shortening typical invocations by 82% and adding machine-readable JSON and YAML output alongside human-readable text.",
        "Built 90 automated tests to 100% coverage for a tool that previously had none, injecting a mocked transport layer so the full suite runs in under a second with no hardware or cluster required.",
        "Implemented role-based access control across four privilege tiers from a single declarative policy table, enforced at argument-parse time and designed to fail closed, with a test that turns an unclassified command into a build failure.",
        "Engineered a gRPC and Protocol Buffers client against an internal RPC framework, including a generic call envelope, connection keepalive, and selective retry with backoff that distinguishes transient from permanent failures."
      ],
      links: []
    },
    {
      role: "Undergraduate Researcher - Ocean Sight One",
      org: "Cal Poly",
      slug: slugify("Ocean Sight One Undergraduate Researcher"),
      location: "San Luis Obispo, CA",
      dates: "Aug 2025 - Present",
      focus: "VR Research / Game Development",
      stack: [
        "Unity",
        "C#",
        "VR",
        "Pathfinding AI",
        "Animation",
        "User Research"
      ],
      bullets: [
        "Built mini-games in Unity implementing pathfinding AI for fish and a parameterized roaming state with adjustable height and width bounds.",
        "Animated barracuda and shark models in Unity's animation editor to give the predators lifelike motion to increase immersion.",
        "Ran user testing with 50+ participants across the year, iterating mini-game mechanics and onboarding on the feedback.",
        "Co-authored research paper \"Ocean Sight One: Making Offshore Oil Platform Ecology Legible Through Play\" submitted to ACM CHI PLAY 2026, on communicating contested environmental science through embodied VR gameplay."
      ],
      links: []
    },
    {
      role: "Software Developer - Vet Scientia: Veterinary Anesthesia Training Platform",
      org: "Cal Poly",
      slug: slugify("Vet Scientia Veterinary Anesthesia Training Platform"),
      location: "San Luis Obispo, CA",
      dates: "Aug 2025 - June 2026",
      focus: "Simulation / Full-Stack",
      stack: [
        "Unity",
        "C#",
        "React",
        "Express",
        "MongoDB",
        "WebGL",
        "Pulse Physiology Engine",
        "JSON"
      ],
      bullets: [
        "Developed the Unity simulation - half of a veterinary anesthesia training platform for university vet programs and clinics, paired with a React, Express, and MongoDB dashboard for course and assignment management.",
        "Partnered with the Pulse Physiology Engine team to secure special access for veterinary use, then integrated the engine to drive animal vital signs in real time and log them for post-lesson performance graphs.",
        "Assembled the operating-room scene and 3D animal models, correcting materials, textures, and lighting so the environment reads accurately to students.",
        "Wrote core simulation scripts for lesson loading and JSON save/restore, surgeon notification popups, and the WebGL bridge that pulls per-user save files from the dashboard and returns results for grading."
      ],
      links: []
    }
  ],
  projects: [
    {
      title: "Artist Classification from Paintings",
      slug: slugify("Artist Classification from Paintings"),
      dates: "Jan 2026 - March 2026",
      type: "Deep Learning / Computer Vision",
      discipline: "Machine Learning",
      stack: [
        "Python",
        "PyTorch",
        "ResNet-18",
        "Computer Vision",
        "Deep Learning",
        "WikiArt"
      ],
      bullets: [
        "Built a 20-class painting-to-artist classifier in PyTorch on a balanced 10,000-image WikiArt subset with a team of 5, reaching 84.2% top-1 and 95.4% top-5 test accuracy (0.836 macro F1).",
        "Replaced a from-scratch CNN with a pretrained ResNet-18 backbone and a two-phase fine-tuning schedule, training the classification head against a frozen backbone before unfreezing deeper layers at a 10x lower learning rate.",
        "Designed a painting-specific augmentation pipeline and trained with AdamW, cosine annealing, label smoothing, and early stopping, using confusion matrices to diagnose confusions between stylistically similar artists."
      ],
      links: []
    },
    {
      title:
        "Augmented Reality Aided Vehicle Operation: SURP (Summer Undergraduate Research Program)",
      slug: slugify(
        "Augmented Reality Aided Vehicle Operation: SURP (Summer Undergraduate Research Program)"
      ),
      dates: "June 2025 - Sept 2025",
      type: "Research / AR Prototype",
      discipline: "AR / HCI",
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
      discipline: "Databases",
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
        "Developed analytics and search functionality by adding instrumentation, writing SQL queries for data-driven strategies, and creating efficient search/filter/pagination endpoints for order management.",
        "Placed top 4% of ~200 students in a course wide simulation competition scored on in-game revenue."
      ],
      links: []
    },
    {
      title: "Spotify Playlist Manager",
      slug: slugify("Spotify Playlist Manager"),
      dates: "March 2025 - June 2025",
      type: "Front-End SPA",
      discipline: "Web Development",
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
      discipline: "Mobile Development",
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
      discipline: "Game Development",
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
      discipline: "Web Development",
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
    dates: "Sept 2022 - Jun 2027",
    degree:
      "B.S. Software Engineering + M.S. Computer Science (Blended Program)",
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
  skills: [
    {
      label: "Languages",
      items: [
        "Python",
        "C#",
        "C",
        "C++",
        "Java",
        "Kotlin",
        "TypeScript",
        "JavaScript",
        "SQL",
        "Bash",
        "HTML",
        "CSS",
        "Assembly Language",
        "SAS"
      ]
    },
    {
      label: "Frameworks & Libraries",
      items: [
        "PyTorch",
        "scikit-learn",
        "React",
        "Node.js",
        "Express",
        "FastAPI",
        "gRPC",
        "Protocol Buffers",
        "Lit",
        "REST",
        "JSON",
        "Alembic"
      ]
    },
    {
      label: "Data & Cloud",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "AWS",
        "Azure",
        "Kubernetes",
        "Docker",
        "Render"
      ]
    },
    {
      label: "Tools & Engines",
      items: [
        "Git",
        "Linux",
        "pytest",
        "Unity",
        "Unreal Engine 5",
        "Godot",
        "WebGL",
        "Android Studio",
        "Xcode",
        "Microsoft HoloLens 2",
        "TinkerCad",
        "3D Printing"
      ]
    }
  ],
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
