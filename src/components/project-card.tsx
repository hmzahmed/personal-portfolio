import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  name: string;
  description: string;
  resposibilities: never[];
  technologies: string[];
  image: string;
  href: string;
};
export default function ProjectCard({
  name,
  description,
  technologies,
  projectId,
  image,
}: Partial<ProjectCardProps> & { image: string; projectId: number }) {
  return (
    <Link href={`/projects/${projectId}`}>
      <div className="rounded-lg flex flex-col w-full gap-4 group bg-zinc-800/80 hover:bg-zinc-800 transition-all p-4 shadow-md">
        <div className="w-full h-40">
          <Image
            alt={`Logo for ${name}`}
            src={image}
            className="object-contain w-full h-full my-auto mx-auto"
          />
        </div>
        <h1 className="text-white text-lg 2xl:text-xl">{name}</h1>
        <p className="text-zinc-100 line-clamp-6">{description}</p>
        <span className="text-xs underline transition-all hover:text-teal-300">
          Read More
        </span>
        <div className="flex flex-row gap-2 flex-wrap">
          {technologies?.map((tech) => (
            <Pill key={tech + name} text={tech} />
          ))}
        </div>
      </div>
    </Link>
  );
}

const Pill = ({ text }: { text: string }) => {
  return (
    <div className="rounded-full px-2 py-1 text-xs bg-zinc-700 shadow-sm text-zinc-200 transition-all hover:bg-teal-600/70">
      {text}
    </div>
  );
};
