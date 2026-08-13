import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";

const person: Person = {
  firstName: "Alauddin",
  lastName: "SK",
  name: "Alauddin SK",
  role: "AI Artist · 3D Artist · Product Visualizer",
  avatar: "/images/avatar.png",
  email: "",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Bengali"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Updates from {person.firstName}</>,
  description: <>Creative work, experiments and new projects.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Sk786design",
    essential: true,
  },
  {
    name: "ArtStation",
    icon: "artstation",
    link: "https://alauddinsk1.artstation.com/",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — ${person.role}`,
  description: `Portfolio of ${person.name}, an AI Artist, 3D Artist and Product Visualizer creating cinematic visuals, product films and AI-driven imagery.`,
  headline: <>AI visuals. 3D craft. Cinematic storytelling.</>,
  featured: {
    display: true,
    title: <>Selected Work</>,
    href: "/work",
  },
  subline: (
    <>
      I'm {person.firstName}, an AI Artist, 3D Artist and Product Visualizer
      focused on creating cinematic product visuals, AI films, advertising
      imagery and high-end 3D work.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About — ${person.name}`,
  description: `${person.name} — AI Artist, 3D Artist and Product Visualizer.`,

  tableOfContent: {
    display: true,
    subItems: false,
  },

  avatar: {
    display: true,
  },

  calendar: {
    display: false,
    link: "",
  },

  intro: {
    display: true,
    title: "About me",
    description: (
      <>
        I am an AI Artist, 3D Artist and AI Filmmaker / Visual Artist working
        across generative imagery, cinematic video and visual development.
        <br />
        <br />
        I bring 3D production knowledge into AI filmmaking through camera
        thinking, lighting, composition and post-production to create polished,
        cinematic visuals for advertising, product communication and
        storytelling.
      </>
    ),
  },

  work: {
    display: true,
    title: "Experience",

    experiences: [
      {
        company: "Pitchperfekt Collective",
        timeframe: "2026 - Present",
        role: "AI Artist",
        achievements: [
          <>
            Working across generative imagery, cinematic video and visual
            development.
          </>,
          <>
            Bringing 3D production knowledge into AI filmmaking through camera
            thinking, lighting, composition and post-production.
          </>,
          <>
            Developing cinematic visual content through AI-assisted image and
            video workflows.
          </>,
        ],
        images: [],
      },

      {
        company: "U Studioz, Mumbai",
        timeframe: "2024 - 2026",
        role: "3D Artist",
        achievements: [
          <>
            Worked across 3D production, product visualization, lighting,
            rendering and commercial visual development.
          </>,
          <>
            Created product-focused visuals and animation using traditional 3D
            production workflows.
          </>,
        ],
        images: [],
      },

      {
        company: "Sally's Studio",
        timeframe: "2022 - 2024",
        role: "3D Artist",
        achievements: [
          <>
            Worked on 3D visual production, product visualization and
            animation.
          </>,
        ],
        images: [],
      },

      {
        company: "Evolution Sports Nutrition Pvt. Ltd.",
        timeframe: "2021 - 2022",
        role: "Graphic Designer",
        achievements: [
          <>
            Created graphic design and visual communication assets for the
            brand.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },

  technical: {
    display: true,
    title: "Core Skills",

    skills: [
      {
        title: "AI Visual Production",
        description: (
          <>
            Generative imagery, cinematic video, visual development and
            AI-assisted filmmaking workflows.
          </>
        ),
        tags: [
          { name: "Veo" },
          { name: "Midjourney" },
          { name: "Seedance" },
          { name: "Kling" },
          { name: "Luma" },
        ],
        images: [],
      },

      {
        title: "3D & Rendering",
        description: (
          <>
            Blender, Maya, Arnold, V-Ray and Cycles for product visualization,
            animation, lighting and rendering.
          </>
        ),
        tags: [
          { name: "Blender" },
          { name: "Maya" },
          { name: "Arnold" },
          { name: "V-Ray" },
          { name: "Cycles" },
        ],
        images: [],
      },

      {
        title: "Product Films & Advertising",
        description: (
          <>
            Cinematic product visuals, advertising imagery, product films and
            visual storytelling.
          </>
        ),
        tags: [
          { name: "Product Films" },
          { name: "Advertising" },
          { name: "Visual Storytelling" },
          { name: "Camera & Composition" },
        ],
        images: [],
      },

      {
        title: "Post & Finish",
        description: (
          <>
            Photoshop, After Effects, Premiere Pro, Illustrator and Figma for
            compositing, editing, graphics and presentation.
          </>
        ),
        tags: [
          { name: "Photoshop" },
          { name: "After Effects" },
          { name: "Premiere Pro" },
          { name: "Illustrator" },
          { name: "Figma" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Creative Notes",
  description: `Experiments and process notes from ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Selected Work — ${person.name}`,
  description: `AI, 3D, product visualization and cinematic work by ${person.name}.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Visual Gallery — ${person.name}`,
  description: `Selected visual experiments and artwork by ${person.name}.`,
  images: [],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
};
