import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rogerio Battistoni Filho",
  description:
    "Experienced front-end developer with a strong background in building scalable applications using React, React Native, and Vue. Passionate about creating clean, accessible UI with top performance, and integrating modern tools like TypeScript, TailwindCSS, Redux, and Zustand.",
  initials: "RB",
  url: "https://rogerio-battistoni.vercel.app/",
  location: "São Paulo, Brazil",
  locationLink: "https://www.google.com/maps/place/S%C3%A3oPaulo,SP",

  avatarUrl: "/me.jpg",

  skills: [
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "Node.js",
    "VueJS",
    "Pinia",
    "Redux",
    "TailwindCSS",
    "Shadcn/UI",
    "Figma",
    "Adobe XD",
    "SCRUM",
    "Jest",
    "MongoDB",
    "Zustand",
    "Prisma",
    "PostgreSQL",
    "MySQL",
    "Git",
    "GitHub",
    "GitLab",
    "CI/CD",
    "Agile",
    "Software Architecture",
    "API Development",
    "Software Engineering",
    "UX/UI Design",
    "Performance Optimization",
    "Code Review",
    "Team Leadership",
    "Problem Solving",
    "Communication",
    "Collaboration",
    "Agile Methodologies",
    "Project Management",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "rogeriobf.dev@gmail.com",
    tel: "+55013991827771",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rogerbatt",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rogerio-battistoni/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "https://mailto:rogeriobf.dev@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Whatsapp: {
        name: "Send Email",
        url: "https://api.whatsapp.com/send/?phone=5513991827771&text&type=phone_number&app_absent=0",
        icon: Icons.whatsapp,

        navbar: true,
      },
    },
  },

  work: [
    {
      key: "2easyInsurance",
      company: "2Easy Insurance",
      href: "https://www.2easyinsurance.com/",
      badges: [],
      logoUrl: "/2easyinsurance_logo.jpg",
    },
    {
      key: "riotGames",
      company: "Riot Games",
      href: "https://www.riotgames.com/",
      badges: [],
      logoUrl: "/riot_games_logo.jpg",
    },
    {
      key: "soluCX2",
      company: "SoluCX",
      href: "https://solucx.com.br/",
      badges: [],
      logoUrl: "/solucx_logo.jpg",
    },
    {
      key: "soluCX1",
      company: "SoluCX",
      href: "https://solucx.com.br/",
      badges: [],
      logoUrl: "/solucx_logo.jpg",
    },
    {
      key: "ambitsIt",
      company: "Ambits IT",
      href: "#",
      badges: [],
      logoUrl: "",
    },
    {
      key: "guaruja",
      company: "Guarujá City Hall",
      href: "https://www.guaruja.sp.gov.br/",
      badges: [],
      logoUrl: "/guarujaLogo.jpeg",
    },
  ],

  education: [
    {
      key: "esamc2",
      school: "ESAMC",
      href: "https://www.esamc.br/",
      logoUrl: "/esamc_logo.png",
      start: "2020",
      end: "2022",
    },
    {
      key: "esamc1",
      school: "ESAMC",
      href: "https://www.esamc.br/",
      logoUrl: "/esamc_logo.png",
      start: "2015",
      end: "2020",
    },
  ],

  projects: [
    {
      key: "2easyApp",
      href: "https://play.google.com/store/apps/details?id=com.easyInsurance.easyapp&pcampaignid=web_share",
      active: true,
      technologies: [
        "React",
        "React Native",
        "Typescript",
        "CSS",
        "i18n",
        "Redux",
        "Expo",
      ],
      links: [
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.easyInsurance.easyapp&pcampaignid=web_share",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Apple Store",
          href: "https://apps.apple.com/us/app/2easy-app/id6751677391?platform=iphone",
          icon: <Icons.globe className="size-3" />,
        },
      ],      
      image: "/2easyApp.png",
      video: "",
    },
  ],
} as const;
