import iplLandingPage from "@/assets/images/ipl.png";
import marioLandingPage from "@/assets/images/Mario.png";
import webEditorLandingPage from "@/assets/images/Web-Editor.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Self",
    year: "2025",
    title: "IPL win predictor",
    results: [
      { title: "Trained a model to predict IPL wins" },
      { title: "Uses previously recorded data to predict future results" },
      { title: "Used Streamlit to make an application for deployment" },
    ],
    link: "https://iplscorepredictionapp.streamlit.app/",
    image: iplLandingPage,
  },
  {
    company: "Self",
    year: "2024",
    title: "Web Editor",
    results: [
      { title: "Used React and Material UI to create a web editor" },
      { title: "It uses the React library to ensure all the editing is done smoothly" },
      { title: "Used GitHub to make the page live" },
    ],
    link: "https://biswasgaurav.github.io/WebEditor/",
    image: webEditorLandingPage,
  },
  {
    company: "Self",
    year: "2023",
    title: "Mario",
    results: [
      { title: "Created Mario game with HTML, CSS, and JS" },
      { title: "Given smooth control instructions for a better experience" },
      { title: "Used GitHub to make the page live" },
    ],
    link: "https://biswasgaurav.github.io/Mario/",
    image: marioLandingPage,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Turning Ideas into Reality" title="Featured Projects" description="Explore how I bring concepts to life through engaging digital experiences."/>
      <div className="mt-10 md:mt-20 flex flex-col gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card 
            key={project.title} 
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
            style={{
              top: `calc(64px + ${projectIndex * 40}px)`,
            }}
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className=" lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, index) => (
                    <li key={index}  className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6 shrink-0"/>
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto  px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4"/>
                  </button>
                </a>
              </div>
              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>;
};
