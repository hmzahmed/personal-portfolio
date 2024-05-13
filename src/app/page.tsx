import { workHistory } from "@/data/constants";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import profilePicture from "@/images/profile.png";
import React from "react";
import {
  ArrowDownIcon,
  BriefcaseIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";

const MyScene = dynamic(() => import("@/components/scene"));

const description =
  "Hi, I'm Hamza. A Software Engineer with 3 years of solid experience in building Fullstack Web Apps, I have a proven track record of delivering high-quality solutions.";

export default function Home() {
  return (
    <div className="h-full flex-col lg:pt-20">
      <div className="flex flex-row w-full lg:h-2/3">
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
          <div className="flex flex-col gap-2">
            <Image
              alt="My Picture"
              src={profilePicture}
              className="h-20 lg:h-30 w-20 lg:w-30 overflow-hidden object-contain rounded-full"
            />
            <h1 className="font-bold text-2xl lg:text-4xl text-zinc-200">
              Software Engineer
            </h1>
          </div>
          <p className=" text-base lg:text-lg text-zinc-300">{description}</p>
          <div className="flex space-x-4">
            <a
              className="group -m-1 p-1"
              target="_blank"
              href={"github.com/hmzahmed"}
            >
              <GitHubIcon className="h-8 w-8 fill-zinc-400 hover:fill-zinc-200 transition-all" />
            </a>
            <a
              className="group -m-1 p-1"
              target="_blank"
              href={"https://www.linkedin.com/in/hamza-ahmed-671381204/"}
            >
              <LinkedInIcon className="h-8 w-8 fill-zinc-400 hover:fill-zinc-200 transition-all" />
            </a>
            <a
              className="group -m-1 p-1"
              target="_blank"
              href={"mailto:hamzaahmed00@hotmail.com"}
            >
              <MailIcon className="h-8 w-8 fill-zinc-400 hover:fill-zinc-200 transition-all" />
            </a>
          </div>
          <p className="text-zinc-300 text-sm">
            Reach me at:
            <a
              className="ml-2 hover:underline"
              href={"mailto:hamzaahmed00@hotmail.com"}
            >
              hamzaahmed00@hotmail.com
            </a>
          </p>
        </div>
        <div className="w-1/2 -z-10 hidden lg:block">
          <Suspense>
            <MyScene />
          </Suspense>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row w-full">
        <Resume className="lg:w-1/2 mt-4 lg:mt-0" />
        <Skills className="lg:w-1/2 mt-4 lg:mt-0" />
      </div>
    </div>
  );
}

function Resume(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  return (
    <div
      className={clsx(
        "rounded-2xl border p-6 border-zinc-700/40",
        props.className
      )}
    >
      <h2 className="flex text-sm font-semibold items-center text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {workHistory.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
              <Image src={role.image} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-100">
                {role.organizationName}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xstext-zinc-400">{role.role}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-500"
                aria-label={role.duration}
              >
                {role.duration}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Link
        target="_blank"
        href={"/Hamzas_Resume.pdf"}
        className="group mt-6 w-full flex items-center border shadow-md border-zinc-600 p-4 max-w-max rounded-lg bg-zinc-800/70 hover:bg-zinc-700/80"
      >
        Download CV
        <ArrowDownIcon className="h-6 w-6 stroke-zinc-400 transition group-hover:stroke-zinc-50 group-active:stroke-zinc-50" />
      </Link>
    </div>
  );
}

function Skills(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  return (
    <div
      className={clsx(
        "rounded-2xl border p-6 h-full border-zinc-700/40",
        props.className
      )}
    >
      Skills
      <div className="gap-4 mt-4 flex flex-wrap">
        {[
          "React",
          "Typescript",
          "Javascript",
          "Node",
          "Tailwind",
          "Elixir",
          "Phoenix",
          "Postgres",
          "MongoDB",
          "Firestore",
          "GCP",
        ].map((skill) => {
          return <Skill key={skill} text={skill} />;
        })}
      </div>
    </div>
  );
}

const Skill = ({ text }: { text: string }) => {
  return (
    <div className="rounded-xl max-h-max px-2 py-1 bg-zinc-700 shadow-sm text-zinc-200 transition-all hover:bg-teal-600/70">
      {text}
    </div>
  );
};
