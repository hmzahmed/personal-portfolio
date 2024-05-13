import infantFeedingLogo from "@/images/logos/if-logo.png";
import mischoolLogo from "@/images/logos/mischool.ico";
import micareLogo from "@/images/logos/micarelogo.png";
import labsLogo from "@/images/logos/labs.png";
import PxdLogo from "@/images/logos/pxd.svg";
import sehatLogo from "@/images/logos/sehatdost.png";
import sbLogo from "@/images/logos/sbp.svg";

export const workHistory = [
  {
    organizationName: "CERP",
    duration: "2022 - 2024",
    role: "Full-Stack Developer",
    technologies: [
      "React",
      "Typescript",
      "Javascript",
      "Tailwind",
      "Elixir",
      "Phoenix",
      "Postgres",
      "GCP",
    ],
    responsibilies: [
      "Led product development and engineering across projects which encompassed a wide rage of domains including Healthcare (Infant Feeding, UNDP HIV, MICare), AgriTech (PxD) and EdTech(MISchool, Science Bowl), collaboratively designed, architected and built projects with Elixir (Phoenix) on backend and JavaScript/Typescript, ReactJS on the frontend",
      "Built RESTful APIs with Elixir Phoenix to serve data to the JavaScript front-ends built with ReactJS and Typescript based on dynamically chosen user inputs",
      "Proficiently diagnosed simple and complex technological issues across various assigned projects",
      "Enhanced the applications features to effectively fix the bugs and optimise the overall performance reliability, and efficiency",
      "Led and mentored 2 junior front end developers and an internee on the team on Javascript and React ",
      "Performed reviews on pull requests to catch bugs/issues before they are deployed to production",
    ],
    image: labsLogo,
    href: "",
  },
  {
    organizationName: "CERP",
    duration: "2021 - 2022",
    role: "Software Developer",
    technologies: [
      "React",
      "Typescript",
      "Javascript",
      "Tailwind",
      "Elixir",
      "Phoenix",
      "Postgres",
    ],
    responsibilies: [
      "Built and delivered major front-end features across various projects using ReactJS with Typescript",
      "Used Elixir to write scripts and ingest data from various different sources.",
      "Worked closely with the product team to contribute towards the redesign and release of MiSchool 2.0 using TailwindCSS. Introduced new features and enhanced existing ones to meet the stakeholders' requirements.",
      "Thoroughly tested the projects I worked on to identify and resolve any bugs in the codebase.",
      "Improved existing documentation and documented new features.",
      "Ensured best coding practices.",
    ],
    image: labsLogo,
    href: "",
  },
];

export const projects = [
  {
    name: "MiSchool",
    description:
      "MiSchool was developed in collaboration with the CERP Education researchers to build an application specially designed to increase the management capacity of low-cost private schools. We worked in the field to iteratively design and prioritise various features with school owners, admins and teachers, ultimately building an application which synced data between different school devices in real-time, and batch processing.",
    resposibilities: [],
    technologies: [
      "React",
      "Typescript",
      "Javascript",
      "Tailwind",
      "Elixir",
      "Postgres",
      "GCP",
    ],
    image: mischoolLogo,
    href: "https://mischool.pk/",
  },
  {
    name: "MICare",
    description:
      "MICare is a digital platform that transforms how Lady Health Workers (LHWs) go from house to house and sell a nutritional product called Wellma based on the condition of a woman. Wellma is designed as a supplement to conveniently provide nutrients to expecting or lactating mothers or Married Women of Reproductive Age (MWRA) who are malnourished.",
    resposibilities: [],
    technologies: [
      "React",
      "Typescript",
      "Javascript",
      "Tailwind",
      "Elixir",
      "Phoenix",
      "Postgres",
      "GCP",
    ],
    image: micareLogo,
  },
  {
    name: "Infant Feeding",
    description:
      "A PWA designed to empower Lady Health Workers (LHWs) to deliver reliable healthcare information and support to expecting and lactating mothers. LHWs can easily register patients, maintain detailed patient records, and apply integrated clinical algorithms for accurate diagnosis.",
    resposibilities: [],
    technologies: [
      "React",
      "Typescript",
      "Javascript",
      "Tailwind",
      "Elixir",
      "Phoenix",
      "Postgres",
      "GCP",
    ],
    image: infantFeedingLogo,
  },
  {
    name: "PxD - Weather Advisory",
    description:
      "A web-based weather advisory and forecast system to provide custom advisories about weather patterns and farming advice. The platform was capable of launching text campaigns and generating automated calls in multiple local languages using Text to Speech conversion services.",
    resposibilities: [],
    technologies: [
      "React",
      "Typescript",
      "Javascript",
      "Tailwind",
      "Elixir",
      "Phoenix",
      "Postgres",
      "GCP",
    ],
    image: PxdLogo,
    href: "https://precisiondev.org",
  },
  {
    name: "Sehat Dost",
    description:
      "Sehat Dost is a PWA which was developed in collaboration with the CERP Reasearch Team and UNDP. It's purpose is to serve as a Pakistan-specific information and support platform and forum on male sexual and reproductive health, mental well-being, and HIV.",
    resposibilities: [],
    technologies: [
      "React",
      "Typescript",
      "Javascript",
      "Tailwind",
      "Elixir",
      "Phoenix",
      "Postgres",
      "GCP",
    ],
    image: sehatLogo,
    href: "https://www.sehatdost.pk/",
  },
  {
    name: "Science Bowl",
    description:
      "A web-based real-time application (POC) that digitized the process of quiz touranments held by National Science Bowl. The application was capable of supporting upto 8 players: 4 in each opposing team, and 1 moderator for a single game session. All communication was realtime based on websockets",
    resposibilities: [],
    technologies: [
      "React",
      "Typescript",
      "Javascript",
      "Tailwind",
      "Elixir",
      "GCP",
    ],
    image: sbLogo,
    href: "https://sciencebowl.pk/",
  },
];
