import ProjectItem from "@/components/molecules/ProjectItem";
import { Crypto, Netflix, Property, Twitch } from "../../../../public/assets";

export default function Project() {
  return (
    <div id="project" className="w-full px-10">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="py-4 uppercase text-xl tracking-widest text-[#035B81] ">
          Project
        </p>
        <h2 className="py-4">Apa yang saya bikin</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Netflix"
            imgProject={Netflix}
            projectUrl="/property"
          />
          <ProjectItem title="Crypto" imgProject={Crypto} projectUrl="#" />
          <ProjectItem title="Property" imgProject={Property} projectUrl="#" />
          <ProjectItem title="Twitch" imgProject={Twitch} projectUrl="#" />
        </div>
      </div>
    </div>
  );
}
