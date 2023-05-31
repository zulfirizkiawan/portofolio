import { ProjectItem } from "@/components/molecules";
import { Crypto, Netflix, Property, Twitch } from "../../../../public/assets";
import { useState } from "react";

export default function Project(props) {
  const [activeCategory, setActiveCategory] = useState("all");

  console.log("props.", props.dataProjects);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const projects = [
    {
      id: 0,
      title: "Netflix",
      imgProject: Netflix,
      projectUrl: "/ProjectDetail",
      category: "all",
    },
    {
      id: 1,
      title: "Twitch",
      imgProject: Twitch,
      projectUrl: "/ProjectDetail",
      category: "mobile",
    },
    {
      id: 2,
      title: "Crypto",
      imgProject: Crypto,
      projectUrl: "/ProjectDetail",
      category: "web",
    },
    {
      id: 3,
      title: "Property",
      imgProject: Property,
      projectUrl: "/ProjectDetail",
      category: "all",
    },
    // ... daftar project lainnya
  ];

  console.log("project", projects);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div id="project" className="w-full px-10">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="py-4 uppercase text-xl tracking-widest text-[#035B81] ">
          Projects
        </p>
        <h2 className="py-4">Apa yang saya bikin</h2>
        <div className="w-[13%] bg-[#035B81] h-2" />
        <div className=" justify-center py-4 md:py-8 flex-wrap">
          <button
            type="button"
            className="text-[#035B81] hover:text-white border border-[#035B81] bg-white hover:bg-[#035B81] focus:ring-4 focus:ring-[#035B81] focus:outline-nonerounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3"
            onClick={() => handleCategoryClick("all")}
          >
            All categories
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 hover:text-[#035B81] dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-[#035B81] rounded-full text-base font-medium px-7 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
            onClick={() => handleCategoryClick("mobile")}
          >
            Mobile
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 hover:text-[#035B81] dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-[#035B81] rounded-full text-base font-medium px-7 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
            onClick={() => handleCategoryClick("web")}
          >
            Web
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8 pt-2">
          {filteredProjects.map((project, index) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              imgProject={project.imgProject}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const dataProjects = [
    {
      id: 0,
      title: "Netflix",
      imgProject: Netflix,
      projectUrl: "/projectDetail",
      category: "all",
    },
    {
      id: 1,
      title: "Twitch",
      imgProject: Twitch,
      projectUrl: "/projectDetail",
      category: "mobile",
    },
    {
      id: 2,
      title: "Crypto",
      imgProject: Crypto,
      projectUrl: "/projectDetail",
      category: "web",
    },
    {
      id: 3,
      title: "Property",
      imgProject: Property,
      projectUrl: "/projectDetail",
      category: "all",
    },
    // ... daftar project lainnya
  ];

  return {
    props: {
      projdataProjectsects,
    },
  };
}