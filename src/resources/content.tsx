import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

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
      I'm {person.firstName}, an {person.role.toLowerCase()} focused on creating cinematic product visuals,
      AI films, advertising imagery and high-end 3D work.
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
        I am a multidisciplinary visual artist working across AI, 3D, product visualization and film.
        My focus is turning ideas into polished visuals that feel cinematic, intentional and ready for
        advertising, brand communication and storytelling.
        <br /><br />
        My workflow combines traditional 3D production with generative AI tools, compositing,
        editing and visual direction. I enjoy working from a product or concept and building the complete
        visual language around it.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "U Studioz",
        timeframe: "2022 - Present",
        role: "AI Artist / 3D Artist",
        achievements: [
          <>Creating AI-driven films, product visuals, advertising content and cinematic image sequences.</>,
          <>Developing 3D product animations, lighting, look development and visual treatments for commercial work.</>,
          <>Combining Blender, rendering, compositing and generative AI workflows to produce finished visual content.</>,
        ],
        images: [],
      },
      {
        company: "Freelance / Creative Projects",
        timeframe: "Ongoing",
        role: "3D Artist / Visual Creator",
        achievements: [
          <>Producing product visualization, animation and AI-assisted creative work for brands and independent projects.</>,
          <>Building cinematic concepts from storyboard and visual development through final shots and edits.</>,
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
        title: "3D & Rendering",
        description: <>Blender, Maya, Arnold, V-Ray and Cycles for product visualization, animation, lighting and rendering.</>,
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
        title: "AI & Generative Visuals",
        description: <>AI-assisted concept development, image generation, video generation, visual consistency and cinematic experimentation.</>,
        tags: [
          { name: "Veo" },
          { name: "Midjourney" },
          { name: "Luma" },
          { name: "Stable Diffusion" },
          { name: "Google Flow" },
        ],
        images: [],
      },
      {
        title: "Post & Design",
        description: <>Photoshop, After Effects, Premiere Pro, Illustrator and Figma for compositing, editing, graphics and presentation.</>,
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
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Visual artwork",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Visual artwork",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Visual artwork",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Visual artwork",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
