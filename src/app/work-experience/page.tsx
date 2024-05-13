import { workHistory } from "@/data/constants";
import Image from "next/image";

export default function WorkExperience() {
  return (
    <div className="space-y-4">
      {workHistory.map((work) => (
        <div
          className="border-l border-zinc-600/50 p-4 space-y-8"
          key={work.organizationName + "-" + work.role}
        >
          <div className="flex flex-row h-40 items-center justify-items-start">
            <Image
              alt={`Logo for ${work.organizationName}`}
              src={work.image}
              className="object-contain aspect-square w-auto h-2/5 md:h-3/5"
            />
            <div className="w-full flex-col items-center justify-between md:flex-row ml-4">
              <div className="text-zinc-200 ">
                <a
                  href={work.href}
                  target="_blank"
                  className="text-xl font-bold hover:text-teal-500 transition-all"
                >
                  {work.organizationName}
                </a>
                <h2 className="text-lg">{work.role}</h2>
              </div>
              <p className="text-zinc-300">{work.duration}</p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-zinc-200">Responsibilites</h1>
            {/* Never use index as key */}
            <ul className="list-disc pl-8 space-y-2">
              {work.responsibilies.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
            <h1 className="text-xl font-bold text-zinc-200">Featured Skills</h1>
            {/* Never use index as key */}
            <ul className="list-disc pl-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {work.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <ul></ul>
          </div>
        </div>
      ))}
    </div>
  );
}
