const person = {
  firstName: "Gilson",
  lastName: "Vicente",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  birthDate: "2004-12-30",
  avatar: "/images/avatar.jpg",
  info: {
    nickname: "SoG",
    role: "Web/Software Developer",
    email: "gilsongvicente.999@gmail.com",
    location: "Africa/Mozambique",
  },
  languages: ["English", "Portuguese"], // optional: Leave the array empty if you don't want to display languages
};

const contacts = [
  {
    name: "GitHub",
    icon: "github",
    href: "https://github.com/SoG-WRLD",
    content: "SoG_WRLD",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: "www.linkedin.com/in/gilson-vicente-469a04306",
    content: "Gilson Vicente",
  },
  {
    name: "Instagram",
    icon: "instagram",
    href: `www.`,
    content: "_sog.dev",
  },
  {
    name: "Email",
    icon: "email",
    href: `mailto:${person.info.email}`,
    content: "gilsongvicente.999@gmail.com",
  },
  {
    name: "Phone",
    href: "tel:+258835345834",
    icon: "phone",
    content: "+258 83 534 5834",
  },
  { name: "Whatsapp", href: "", icon: "whatsapp", content: "86 534 5834" },
];
const socials = [contacts[0], contacts[1], contacts[2]];

type Skill = {
  title: string;
  proficiency: number;
  logoPath: string;
};
type SkillSet = {
  name: string;
  skills: Skill[];
};

const skillSet: SkillSet[] = [
  {
    name: "Languages",
    skills: [
      { title: "Python", logoPath: "/icons/python.svg", proficiency: 3 },
      {
        title: "JavaScript",
        logoPath: "/icons/javascript.svg",
        proficiency: 4,
      },
      {
        title: "TypeScript",
        logoPath: "/icons/typescript.svg",
        proficiency: 4,
      },
      { title: "HTML5", logoPath: "/icons/html5.svg", proficiency: 5 },
      { title: "CSS3", logoPath: "/icons/css3.svg", proficiency: 4 },
      { title: "Java", logoPath: "/icons/java.svg", proficiency: 3 },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { title: "React.js", logoPath: "/icons/react.svg", proficiency: 4 },
      { title: "React Native", logoPath: "/icons/react.svg", proficiency: 3 },
      { title: "Flutter", logoPath: "/icons/flutter.svg", proficiency: 3 },
      { title: "Node.js", logoPath: "/icons/nodejs.svg", proficiency: 3 },
      {
        title: "TailwindCSS",
        logoPath: "/icons/tailwindcss.svg",
        proficiency: 4,
      },
      { title: "Next.js", logoPath: "/icons/nextjs.svg", proficiency: 3 },
    ],
  },
  {
    name: "Database",
    skills: [
      { title: "MySQL", logoPath: "/icons/mysql.svg", proficiency: 4 },
      {
        title: "PostgreSQL",
        logoPath: "/icons/postgresql.svg",
        proficiency: 3,
      },
    ],
  },
  {
    name: "Technologies",
    skills: [
      { title: "npm", logoPath: "/icons/npm.svg", proficiency: 3 },
      { title: "git", logoPath: "/icons/git.svg", proficiency: 3 },
    ],
  },
];

type Navigation = {
  title: string;
  description: string;
  icon: string;
  path: string;
};

const home: Navigation = {
  title: "Home",
  description: "",
  icon: "home",
  path: "/",
};
const about: Navigation = {
  title: "About Me",
  description: "",
  icon: "person",
  path: "/about",
};
const skills: Navigation = {
  title: "Tech Skills",
  description: "",
  icon: "brackets",
  path: "/skills",
};
const projects: Navigation = {
  title: "Projects",
  description: "",
  icon: "folderOpen",
  path: "/projects",
};
const contact: Navigation = {
  title: "Contact",
  description: "",
  icon: "phoneCall",
  path: "/contact",
};
const resume: Navigation = {
  title: "Resume",
  description: "",
  icon: "document",
  path: "/resume",
};

const navigation: Navigation[] = [
  home,
  about,
  skills,
  projects,
  resume,
  contact,
];

export type { Navigation, Skill };
export { navigation, person, socials, skillSet, contacts };
