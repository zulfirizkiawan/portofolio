import { ProjectItem } from "@/components/molecules";
import { useState } from "react";
import {
  Property,
  belum,
  digiponic,
  storegg,
  storeggAdmin,
  vdbAdmin,
} from "../../../../public/assets";

export default function Project() {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 0,
      title: "Store GG",
      framework: "React JS",
      imgProject: storegg,
      projectUrl: "/StoreGg",
      category: "web",
    },
    {
      id: 1,
      title: "Digiponic",
      framework: "React JS",
      imgProject: digiponic,
      projectUrl: "/Digiponic",
      category: "web",
    },
    {
      id: 2,
      title: "Store GG Admin Panel",
      framework: "Laravel",
      imgProject: storeggAdmin,
      projectUrl: "/StoreGgAdmin",
      category: "web",
    },
    {
      id: 3,
      title: "VDB Karyawan",
      framework: "React Native",
      imgProject: belum,
      projectUrl: "/VdbKaryawan",
      category: "mobile",
    },
    {
      id: 4,
      title: "NagaMas Store",
      framework: "React Native",
      imgProject: belum,
      projectUrl: "/NagamasStore",
      category: "mobile",
    },
    {
      id: 5,
      title: "My Doctor",
      framework: "React Native",
      imgProject: belum,
      projectUrl: "/MyDoctor",
      category: "mobile",
    },
    {
      id: 6,
      title: "Food Market",
      framework: "React Native",
      imgProject: belum,
      projectUrl: "/FoodMarket",
      category: "mobile",
    },
    {
      id: 7,
      title: "VDB Perawatan Hewan",
      framework: "React Native",
      imgProject: belum,
      projectUrl: "/VdbPerawatan",
      category: "mobile",
    },
    {
      id: 8,
      title: "VDB Admin Panel",
      framework: "Laravel",
      imgProject: vdbAdmin,
      projectUrl: "/VdbAdmin",
      category: "web",
    },
    {
      id: 9,
      title: "Absensi Digiponic",
      framework: "React Native",
      imgProject: belum,
      projectUrl: "/AbsensiDigiponic",
      category: "mobile",
    },
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

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
          {filteredProjects.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              framework={project.framework}
              imgProject={project.imgProject}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
